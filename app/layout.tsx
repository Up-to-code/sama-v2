import type React from "react"
import { Cairo } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "سَما - وكالة المحتوى العربي المتميزة",
  description: "وكالة سعودية متخصصة في إدارة المحتوى العربي لشركات التطوير العقاري",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  )
}
