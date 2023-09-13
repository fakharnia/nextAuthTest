import "normalize.css";
import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from "./AuthProvider";

export const metadata: Metadata = {
  title: 'CMS Fakharnia.com',
  description: 'Fakharnia.com CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
