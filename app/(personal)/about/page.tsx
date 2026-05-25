import Gallery from '@/components/pages/about/Gallery'
import ImageTransition from '@/components/pages/about/ImageTransition'
import MeetOwner from '@/components/pages/about/MeetOwner'
import Motive from '@/components/pages/about/Motive'
import Opening from '@/components/pages/about/Opening'
import TeamSummary from '@/components/pages/about/TeamSummary'
import ClientMarquee from '@/components/pages/home/ClientMarquee'
import { sanityFetch } from '@/sanity/lib/live'
import { settingsQuery } from '@/sanity/lib/queries'
import React from 'react'

async function page() {
  const {data} = await sanityFetch({query: settingsQuery})
  return (
    <>
      <Opening data={data} />
      <MeetOwner data={data}/>
      <TeamSummary/>
      <ImageTransition data={data}/>
      <ClientMarquee/>
      <Motive data={data}/>
      <Gallery data={data}/>
    </>
  )
}

export default page
