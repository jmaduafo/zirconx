import EventInfo from '@/components/pages/events/EventInfo'
import EventsCarousel from '@/components/pages/events/EventsCarousel'
import ImageTransition from '@/components/pages/events/ImageTransition'
import TextMarquee from '@/components/pages/events/TextMarquee'
import { sanityFetch } from '@/sanity/lib/live'
import { eventsQuery, paragraphsQuery, settingsQuery } from '@/sanity/lib/queries'
import React from 'react'

async function page() {
  const {data: settings} = await sanityFetch({query: settingsQuery})
  const {data: events} = await sanityFetch({query: eventsQuery})
  const {data: paragraphs} = await sanityFetch({query: paragraphsQuery})

  return (
    <>
      <ImageTransition data={settings} />
      <EventInfo paragraphs={paragraphs}/>
      <TextMarquee data={paragraphs}/>
      <EventsCarousel data={events} paragraphs={paragraphs}/>
    </>
  )
}

export default page
