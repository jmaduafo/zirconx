import './globals.css'
import {montrealBook, montrealMedium} from '@/font/fonts'
import {cn} from '@/lib/utils'
import {SanityLive} from '@/sanity/lib/live'
import {Metadata, Viewport} from 'next'
import {Cormorant_Garamond, Geist} from 'next/font/google'

const geist = Geist({subsets: ['latin'], variable: '--font-sans'})

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  themeColor: '#b1d4df',
}

export const metadata: Metadata = {
  title: 'The Zircon Xperience',
  description:
    'The Zircon Xperience is a Lagos-based luxury event planning company specializing in unforgettable social celebrations, corporate events, weddings, and curated experiences with a touch of class.',
  openGraph: {
    title: 'The Zircon Xperience',
    description: 'Luxury event planning and curated experiences with a touch of class.',
    images: [
      {
        url: 'https://zirconxperience.com',
        width: 1200,
        height: 630,
        alt: 'website preview',
      },
    ],
  },
  // appleWebApp: {
  //   title: 'Zircon Xperience', // This name shows under Safari suggestions
  //   statusBarStyle: 'black-translucent',
  //   capable: true,
  // },
  // icons: {
  //   icon: '/icon.png',
  //   apple: '/apple-icon.png',
  // },
}

export default async function RootLayout({children}: {readonly children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={cn(
        serif.variable,
        montrealBook.variable,
        montrealMedium.variable,
        'font-sans',
        geist.variable,
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
