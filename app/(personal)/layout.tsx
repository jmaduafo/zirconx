import '@/styles/index.css'
import Footer from '@/components/Footer'
import {Navbar} from '@/components/Navbar'
import {sanityFetch} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import type {Viewport} from 'next'
import {Suspense} from 'react'
import {Toaster} from 'sonner'

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
