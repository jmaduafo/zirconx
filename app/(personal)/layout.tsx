import '@/styles/index.css'
import Footer from '@/components/Footer'
import {Navbar} from '@/components/Navbar'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {homePageQuery, settingsQuery} from '@/sanity/lib/queries'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata, Viewport} from 'next'
import {toPlainText, type PortableTextBlock} from 'next-sanity'
import {Suspense} from 'react'
import {Toaster} from 'sonner'
import {handleError} from './client-functions'
import { Settings } from '@/types'

// export async function generateMetadata(): Promise<Metadata> {
//   const [{data: settings}, {data: homePage}] = await Promise.all([
//     sanityFetch({query: settingsQuery, stega: false}),
//     sanityFetch({query: homePageQuery, stega: false}),
//   ])

//   @ts-ignore the image type sometimes fails
//   const ogImage = urlForOpenGraphImage(settings?.ogImage)
//   return {
//     title: homePage?.title
//       ? {
//           template: `%s | ${homePage.title}`,
//           default: homePage.title || 'Personal website',
//         }
//       : undefined,
//     description: homePage?.overview ? toPlainText(homePage.overview) : undefined,
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   }
// }

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({children}: {readonly children: React.ReactNode}) {
  const {data} = await sanityFetch({query: settingsQuery})

  return (
    <div className="min-h-screen font-montrealBook bg-background text-foreground">
      <Navbar />
      <main className="">{children}</main>
      <Footer data={data}/>
      <Toaster />
    </div>
  )
}
