import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Robot India | India\'s robot discovery and consultancy platform',
  description: 'Explore robots for your home, business or research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#050505] text-[#F4F0E7] font-sans antialiased selection:bg-[#E8C988] selection:text-black">
        {children}
      </body>
    </html>
  )
}
