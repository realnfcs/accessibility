import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { SignpostIcon as SignLanguage } from 'lucide-react'
import Link from "next/link"
import './globals.css'
import { VLibrasWidget } from "@/components/vlibras-widget"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-blue-700">
                <SignLanguage className="h-6 w-6" />
                <span>Tradutor para LIBRAS</span>
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/tutorial" legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2">
                        Tutorial
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/sobre" legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2">
                        Sobre
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t bg-cyan-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between text-2xl text-white">
              <span>UNIR</span>
              <span>2024</span>
            </div>
          </footer>
        </div>
        <VLibrasWidget />
      </body>
    </html>
  )
}

