import './globals.css'
import {Inter as FontSans} from 'next/font/google'
import {cn} from '@/lib/utils'
import {ThemeProvider} from '@/components/theme-provider'
import {Navbar} from '@/components/navbar'
import {Footer} from '@/components/footer'
import {Toaster} from '@/components/ui/toaster'
import {Analytics} from '@vercel/analytics/react'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  metadataBase: new URL('https://www.egxworld.net/'),
  title: 'EG | World',
  description: 'Full Stack Developer. Digital Product Designer.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer',
  ],
  creator: {name: 'Ethan Garrison', url: 'https://github.com/egarrisxn'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'egxworld.net',
    title: 'EG | World',
    description: 'Full Stack Developer. Digital Product Designer.',
    url: 'https://www.egxworld.net/',
    locale: 'en_US',
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@eg_xo_',
    site: '@eg_xo_',
    title: 'EG | World',
    description: 'Full Stack Developer. Digital Product Designer.',
  },
}

export default function RootLayout({children}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'grid min-h-[100dvh] grid-rows-[auto_1fr_auto] bg-background font-sans text-foreground antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
