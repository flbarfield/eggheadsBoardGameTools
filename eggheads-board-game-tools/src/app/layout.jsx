import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Egghead\'s Board Game Tools',
  description: 'The one stop shop for all your game-aid needs!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
