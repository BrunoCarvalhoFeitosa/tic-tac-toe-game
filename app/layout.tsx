import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ToastContainer } from "react-toastify"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Jogo da velha",
    description: "Jogo da velha criado com Next.js, Typescript e TailwindCSS",
    icons: {
        icon: "/images/fav.png",
        shortcut: "/images/fav.png"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <div className="w-full h-[100dvh]">
                    <ToastContainer />
                    {children}
                </div>
            </body>
        </html>
    )
}