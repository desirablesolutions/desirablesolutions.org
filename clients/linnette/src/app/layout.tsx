import './globals.css'
import type { Metadata } from 'next'
import Footer from "@includes/Footer"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Linnettes Lens.',
  description: 'how to combine Art and Engineering one project at a time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
