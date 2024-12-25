'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Youtube, FileText, SignpostIcon as SignLanguage } from 'lucide-react'
import { FormEvent } from 'react'

export default function Home() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const youtubeUrl = formData.get('youtubeUrl')
    if (youtubeUrl) {
      router.push(`/player?url=${encodeURIComponent(youtubeUrl.toString())}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-center text-4xl font-medium">
            Traduza conteúdo textual de vídeos do Youtube para LIBRAS!
          </h1>

          <form onSubmit={handleSubmit}>
            <Input 
              name="youtubeUrl"
              placeholder="Cole o link do vídeo do Youtube aqui..."
              className="w-full h-14 shadow-lg"
            />
          </form>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Youtube className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-lg font-medium">1. Copie o link do vídeo do Youtube que você quer traduzir</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-lg font-medium">2. A plataforma disponibilizará a legenda e o próprio vídeo.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <SignLanguage className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-lg font-medium">3. Você selecionar o que quer traduzir e a suite do VLibras traduzirá para você!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

