import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Sobre o Tradutor para LIBRAS</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p>O Tradutor para LIBRAS tem como missão tornar o conteúdo online mais acessível para a comunidade surda brasileira. Acreditamos que a informação e o entretenimento devem estar disponíveis para todos, independentemente de suas habilidades auditivas.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Como Funciona</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Nossa plataforma utiliza tecnologia de ponta para extrair legendas de vídeos do YouTube e traduzi-las para a Língua Brasileira de Sinais (LIBRAS) usando o VLibras, uma ferramenta desenvolvida pelo governo brasileiro em parceria com a Universidade Federal da Paraíba.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipe</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Somos um grupo de desenvolvedores, designers e pesquisadores apaixonados por acessibilidade e tecnologia. Nossa equipe trabalha constantemente para melhorar a plataforma e expandir seu alcance.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contato</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Para dúvidas, sugestões ou relatos de problemas, entre em contato conosco:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Email: contato@tradutorlibras.com.br</li>
              <li>Telefone: (XX) XXXX-XXXX</li>
              <li>Endereço: Av. Exemplo, 123 - Cidade, Estado</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Acessibilidade</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Estamos comprometidos em tornar nossa plataforma o mais acessível possível. Além da tradução para LIBRAS, trabalhamos continuamente para garantir que nosso site seja compatível com leitores de tela e outras tecnologias assistivas. Se você encontrar algum problema de acessibilidade ou tiver sugestões para melhorias, por favor, entre em contato conosco.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

