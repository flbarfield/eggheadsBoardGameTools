import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Egghead\'s Board Game Tools',
  description: 'The one stop shop for all your game-aid needs!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex flex-col min-h-screen'>
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
