import './globals.css'
import {montrealBook, montrealMedium} from '@/font/fonts'
import {cn} from '@/lib/utils'
import {Cormorant_Garamond, Geist} from 'next/font/google'
import { Metadata } from 'next';

const geist = Geist({subsets: ['latin'], variable: '--font-sans'})

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

// export const metadata: Metadata = {
//   title: 'Zircon Xperience',
//   description: 'The official Next.js Course Dashboard, built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

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
