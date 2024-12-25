import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, FileText, SignpostIcon as SignLanguage } from 'lucide-react'

export default function TutorialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Como Usar o Tradutor para LIBRAS</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-6 w-6 text-red-600" />
              <span>1. Selecione um Vídeo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Na página inicial, cole o link de um vídeo do YouTube que você deseja traduzir para LIBRAS. Certifique-se de que o vídeo tenha legendas disponíveis.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-gray-600" />
              <span>2. Visualize as Legendas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Após carregar o vídeo, você verá as legendas exibidas abaixo do player. Você pode navegar pelas legendas para encontrar o conteúdo específico que deseja traduzir.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SignLanguage className="h-6 w-6 text-blue-600" />
              <span>3. Use o VLibras</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Clique no ícone do VLibras no canto inferior direito da tela. Selecione o texto que deseja traduzir, e o avatar do VLibras irá interpretar o conteúdo em LIBRAS para você.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🎥</span>
              <span>4. Controle o Vídeo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Use os controles do player de vídeo para pausar, retroceder ou avançar conforme necessário. Isso permite que você sincronize a tradução em LIBRAS com o conteúdo do vídeo.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🔁</span>
              <span>5. Repita Conforme Necessário</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Você pode repetir o processo para diferentes partes do vídeo ou para novos vídeos. Basta voltar à página inicial e colar um novo link do YouTube.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">❓</span>
              <span>6. Obtenha Ajuda</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Se você tiver dúvidas ou encontrar problemas, consulte nossa página Sobre para informações de contato e recursos adicionais.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

