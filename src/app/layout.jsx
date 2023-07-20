import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Porto Vica',
  description: 'my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div style={{ marginTop:'100px'}}></div>
        {children}
      </body>
    </html>
  )
}
