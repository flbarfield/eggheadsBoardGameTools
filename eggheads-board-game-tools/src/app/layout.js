import { Inter } from 'next/font/google'
import './globals.css'
import logo from './images/cover.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <img src={logo} alt="test" />
      <body className={inter.className}>{children}</body>
      <h1>test</h1>
    </html>
  )
}
