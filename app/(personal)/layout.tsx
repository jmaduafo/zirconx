import '@/styles/index.css'
import Footer from '@/components/Footer'
import {Navbar} from '@/components/Navbar'
import {sanityFetch} from '@/sanity/lib/live'
import {eventsQuery, paragraphsQuery, settingsQuery} from '@/sanity/lib/queries'
import type {Viewport} from 'next'
import React from 'react'
import {Toaster} from 'sonner'

export const viewport: Viewport = {
  themeColor: '#b1d4df',
}

export default async function IndexRoute({children}: {readonly children: React.ReactNode}) {
  const {data: settings} = await sanityFetch({query: settingsQuery})
  const {data: events} = await sanityFetch({query: eventsQuery})
  const {data: paragraphs} = await sanityFetch({query: paragraphsQuery})
 

  return (
    <div className="font-montrealBook bg-background text-foreground">
      <Navbar settings={settings} events={events} />
      <main className="min-h-screen">{children}</main>
      <Footer events={events} data={settings} paragraphs={paragraphs}/>
      <Toaster />
    </div>
  )
}
