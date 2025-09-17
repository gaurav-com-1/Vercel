import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// NEXT.JS FONT OPTIMIZATION
// This automatically hosts the font file and removes the need for an external Google Fonts network request.
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // This connects the font to Tailwind CSS
})

export const metadata: Metadata = {
  title: 'Invictus Fitness | Forge Your Body, Unleash Your Soul',
  description: 'The premium gym experience for achieving your ultimate fitness goals. State-of-the-art equipment, expert trainers, and a motivating community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-primary`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-[68px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}