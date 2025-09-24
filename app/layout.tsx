import type React from "react"
import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import logo from "@/assets/CASE_PROPERTIES_LOGO_HD.png"
import "./globals.css"

export const metadata: Metadata = {
  title: "Case Properties",
  description: "Your ultimate destination for cutting-edge technology, gaming gear, and authentic anime merchandise",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
