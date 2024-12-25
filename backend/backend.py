import json
import os
import shutil
import speech_recognition as sr
import time
import yt_dlp

from pydub import AudioSegment
from flask import Flask
from flask import jsonify

from youtube_transcript_api import YouTubeTranscriptApi

from flask_cors import CORS

# Variáveis
MAX_DURATION = 120
INTERVAL_LENGTH = 30

# Back End
app = Flask(__name__)

CORS(app)

@app.route("/traduzir/test/<video_id>")
def translator_test(video_id):

	# Substitua pelo ID do vídeo do YouTube (após "v=" na URL)
	video_id = "dQw4w9WgXcQ"

	try:
		# Obtém a transcrição
		transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['pt', 'en'])

		# Exibe a transcrição em formato de texto
		for item in transcript:
			print(f"{item['start']:.2f}s: {item['text']}")

	except Exception as e:
		print(f"Erro ao obter a transcrição: {e}")

@app.route("/traduzir/<video_id>")
def translator(video_id):
	# Obter o instante atual
	timestamp = int(time.time())
	
	# Obter as informações do vídeo
	url = f"https://www.youtube.com/watch?v={video_id}"
	info_dict = {}
	
	try:
		with yt_dlp.YoutubeDL() as ydl:
			info_dict = ydl.extract_info(url, download = False)
	except:
		return '{"erro": "O vídeo especificado está indisponível."}', 400, {"Content-Type": "application/json"}
	
	
	# Tentar fazer download do vídeo
	folder = f"./tmp/request-{timestamp}"
	duration = min(info_dict.get("duration"), MAX_DURATION)
	options = {
		"outtmpl": f"{folder}/audio",
		"format": "wav/bestaudio/best",
		"postprocessors": [{
			"key": "FFmpegExtractAudio",
			"preferredcodec": "wav"
		}]
	}
	
	os.makedirs(folder)
	
	try:
		with yt_dlp.YoutubeDL(options) as ydl:
			info_dict = ydl.download(url)
	except:
		return '{"erro": "Não foi possível fazer download do vídeo."}', 500, {"Content-Type": "application/json"}
	
	# Secionar o áudio do vídeo
	intervals = []
	
	s = 0
	e = min(INTERVAL_LENGTH, duration)
	
	while s < duration:
		intervals.append((s, e))
		s = e
		e = min(e + INTERVAL_LENGTH, duration)
	
	os.makedirs(f"{folder}/sections")
	
	
	
	segment = AudioSegment.from_wav(f"{folder}/audio.wav")
	
	for interval in intervals:
		start = interval[0] * 1000
		end = interval[1] * 1000
		cut = segment[start:end]
		cut.export("%s/%s.wav" % (f"{folder}/sections", "seg_%02d-%02d" % interval), format = "wav")
	
	# Realizar a tradução dos segmentos de áudio
	lines = []
	rec = sr.Recognizer()
	
	for interval in intervals:
		file_name = "%s/%s.wav" % (f"{folder}/sections", "seg_%02d-%02d" % interval)
		audio_ts = "%02i:%02i - %02i:%02i" % (interval[0] // 60, interval[0] % 60, interval[1] // 60, interval[1] % 60)
		
		with sr.AudioFile(file_name) as source:
			audio = rec.record(source)
		
		try:
			text = rec.recognize_google(audio, language = "pt-BR")
			lines.append({"timestamp": audio_ts, "text": text})
		except:
			return '{"erro": "Ocorreu um erro durante a tradução do vídeo."}', 500, {"Content-Type": "application/json"}
	
	# Deletar os arquivos temporários
	shutil.rmtree(folder)
	
	# Enviar a resposta
	return json.dumps(lines), 200, {"Content-Type": "application/json"}