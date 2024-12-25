'use client'

import YouTube from 'react-youtube'
import { Card } from '@/components/ui/card'
import { getYouTubeVideoId } from '@/lib/youtube'

interface YouTubePlayerProps {
  url: string
}

export function YouTubePlayer({ url }: YouTubePlayerProps) {
  const videoId = getYouTubeVideoId(url)

  if (!videoId) {
    return (
      <Card className="overflow-hidden">
        <div className="aspect-video bg-black/90 flex items-center justify-center text-white">
          URL do YouTube inválida
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-black relative">
        <YouTube
          videoId={videoId}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 0,
              modestbranding: 1,
              rel: 0,
            },
          }}
          className="absolute inset-0"
          iframeClassName="w-full h-full"
        />
      </div>
    </Card>
  )
}

