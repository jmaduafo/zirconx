import InfoContainer from '@/components/containers/InfoContainer'
import MainHeader from '@/components/MainHeader'
import {EventsQueryResult} from '@/sanity.types'
import React from 'react'

function EventDetail({data, title}: {readonly data: EventsQueryResult; readonly title: string}) {
  const event = data?.categories?.find((event) =>
    event.title?.toLowerCase().includes(title.toLowerCase()),
  )

  return (
    <InfoContainer isMarginTop className="flex">
      <div className="flex-1">
        <MainHeader title={event?.title ?? ''} subtitle={event?.description ?? ''} />
      </div>
      <div className="flex-[3] grid grid-cols-2 gap-4"></div>
    </InfoContainer>
  )
}

export default EventDetail
