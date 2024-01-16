import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LibraByte',
  description: 'LibraByte is a library management system.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-Theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
