import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Viewport } from "next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "MPL - MMD Pose Language",
  description: "Use plain text to control MMD poses and facial morphs, no more brain-hurting quaternions",
  keywords: ["MMD", "MikuMikuDance", "AI pose", "text to pose", "MMD pose language"],
  openGraph: {
    title: "MPL - MMD Pose Language",
    description: "Use plain text to control MMD poses and facial morphs, no more brain-hurting quaternions",
    url: "https://mpl.love",
    siteName: "MPL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPL - MMD Pose Language",
    description: "Use plain text to control MMD poses and facial morphs, no more brain-hurting quaternions",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="select-none outline-none">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      <Analytics />
    </html>
  )
}
