import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import './globals.css'

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['100', '200', '400', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Personal Finance app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased min-h-screen`}>{children}</body>
    </html>
  )
}
