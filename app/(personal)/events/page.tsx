import EventInfo from '@/components/pages/events/EventInfo'
import EventsCarousel from '@/components/pages/events/EventsCarousel'
import ImageTransition from '@/components/pages/events/ImageTransition'
import TextMarquee from '@/components/pages/events/TextMarquee'
import React from 'react'

function page() {
  return (
    <>
      <ImageTransition />
      <EventInfo/>
      <TextMarquee/>
      <EventsCarousel/>
    </>
  )
}

export default page
