import './globals.css'
import {montrealBook, montrealMedium} from '@/font/fonts'
import {cn} from '@/lib/utils'
import {Cormorant_Garamond, Geist} from 'next/font/google'

const geist = Geist({subsets: ['latin'], variable: '--font-sans'})

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

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
      <body>{children}</body>
    </html>
  )
}
