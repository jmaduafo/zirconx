import EventDetail from '@/components/pages/events/title/EventDetail'
import React from 'react'

async function page({ params }: { params: { title: string }}) {

  const { title } = await params

  return (
    <EventDetail title={title}/>
  )
}

export default page