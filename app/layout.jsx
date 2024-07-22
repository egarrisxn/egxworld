import './globals.css'
import {GeistSans} from 'geist/font/sans'
import {GeistMono} from 'geist/font/mono'
import {ThemeProvider} from '@/components/ThemeProvider'
import {Analytics} from '@vercel/analytics/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth antialiased`}
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
