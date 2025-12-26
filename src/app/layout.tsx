import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { DEFAULT_SEO, SITE_URL } from "@/lib/seo-config";
import { AuthProvider } from "@/lib/auth-context"
import { EditableProvider } from "@/lib/editable-context"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  fallback: ["system-ui", "arial"]
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["monospace"]
})
export const metadata: Metadata = {
  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${DEFAULT_SEO.openGraph.siteName}`,
  },
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,
  metadataBase: new URL(SITE_URL),
  authors: DEFAULT_SEO.authors,

  openGraph: {
    ...DEFAULT_SEO.openGraph,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    url: SITE_URL,
  },
  twitter: {
    ...DEFAULT_SEO.twitter,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: DEFAULT_SEO.openGraph.images,
  },
  icons: DEFAULT_SEO.icons,
  verification: {
    google: "SM1h4jU_nI-Z-wSfALsiVmvB6zV0AS7jZFruE0f2MYo", //id google<meta name="google-site-verification" content="SM1h4jU_nI-Z-wSfALsiVmvB6zV0AS7jZFruE0f2MYo" />
  },
};

export const viewport: Viewport = {
  themeColor: "#2d6a4f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <AuthProvider>
          <EditableProvider>{children}</EditableProvider>
        </AuthProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
