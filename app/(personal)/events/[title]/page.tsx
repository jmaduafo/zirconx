import EventDetail from '@/components/pages/events/title/EventDetail'
import {sanityFetch} from '@/sanity/lib/live'
import {eventsQuery} from '@/sanity/lib/queries'
import React from 'react'

async function page({params}: {params: {title: string}}) {
  const {title} = await params

  const {data} = await sanityFetch({query: eventsQuery})

  return <EventDetail data={data} title={decodeURIComponent(title)} />
}

export default page
