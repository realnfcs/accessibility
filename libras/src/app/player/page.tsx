'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { YouTubePlayer } from '@/components/youtube-player'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Caption {
  startTime: string
  endTime: string
  text: string
}

export default function PlayerPage() {
  const searchParams = useSearchParams()
  const videoUrl = searchParams.get('url')
  const [captions, setCaptions] = useState<Caption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCaptions = async () => {
      if (!videoUrl) return
      const videoId = new URL(videoUrl).searchParams.get('v')
      if (!videoId) return

      setIsLoading(true)

      try {
        const response = await fetch(`http://localhost:5000/traduzir/${videoId}`)
        const data = await response.json()

        const formattedCaptions = data.map((item: { timestamp: string; text: string }) => {
          const [startTime, endTime] = item.timestamp.split(' - ')
          return { startTime, endTime, text: item.text }
        })

        setCaptions(formattedCaptions)
      } catch (error) {
        console.error('Erro ao buscar legendas:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCaptions()
  }, [videoUrl])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {videoUrl ? (
            <YouTubePlayer url={videoUrl} />
          ) : (
            <Card className="overflow-hidden">
              <div className="aspect-video bg-black/90 flex items-center justify-center text-white">
                Nenhum vídeo selecionado
              </div>
            </Card>
          )}

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Legendas:</h2>
            {isLoading ? (
              <p className="text-gray-500">Carregando legendas...</p>
            ) : (
              <Card className="p-4">
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {captions.map((caption, index) => (
                      <div key={index} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                        <span className="text-green-600 whitespace-nowrap font-medium min-w-[100px]">
                          {caption.startTime} - {caption.endTime}
                        </span>
                        <span className="flex-1">{caption.text}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

