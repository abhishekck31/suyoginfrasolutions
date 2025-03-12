import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suyog Infra Solutions',
  description: 'Premium construction and infrastructure solutions for projects that stand the test of time',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
