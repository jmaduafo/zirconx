import Gallery from '@/components/pages/about/Gallery'
import ImageTransition from '@/components/pages/about/ImageTransition'
import MeetOwner from '@/components/pages/about/MeetOwner'
import Motive from '@/components/pages/about/Motive'
import Opening from '@/components/pages/about/Opening'
import TeamSummary from '@/components/pages/about/TeamSummary'
import ClientMarquee from '@/components/pages/home/ClientMarquee'
import { sanityFetch } from '@/sanity/lib/live'
import { paragraphsQuery, settingsQuery } from '@/sanity/lib/queries'
import React from 'react'

async function page() {
  const {data: settings} = await sanityFetch({query: settingsQuery})
  const {data: paragraphs} = await sanityFetch({query: paragraphsQuery})
  return (
    <>
      <Opening data={settings} paragraphs={paragraphs}/>
      <MeetOwner data={settings} paragraphs={paragraphs}/>
      <TeamSummary paragraphs={paragraphs}/>
      <ImageTransition data={settings}/>
      <ClientMarquee data={settings} paragraphs={paragraphs}/>
      <Motive data={settings} paragraphs={paragraphs}/>
      <Gallery data={settings} paragraphs={paragraphs}/>
    </>
  )
}

export default page
