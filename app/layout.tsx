import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className="mx-20 my-10">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar/>
            <div className='p-6'>
            {children}
            </div>
            <Footer/>
        </ThemeProvider>
        </body>
        
    </html>
  )
}
