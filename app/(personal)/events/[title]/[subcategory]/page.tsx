import EventSubcategory from '@/components/pages/events/title/subcategory/EventSubcategory'
import {sanityFetch} from '@/sanity/lib/live'
import {eventsQuery} from '@/sanity/lib/queries'
import React from 'react'

async function page({params}: {params: {subcategory: string}}) {
  const {subcategory} = await params

  const {data} = await sanityFetch({query: eventsQuery})

  return <EventSubcategory data={data} subcategory={subcategory} />
}

export default page
