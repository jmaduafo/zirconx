import InfoContainer from '@/components/containers/InfoContainer'
import Header4 from '@/components/headings/Header4'
import React from 'react'

function EventDetail({title}: {readonly title: string}) {
  return (
    <InfoContainer isMarginTop className="flex">
      <div className="flex-1">
        <Header4
          className="capitalize max-w-40"
          text={title.toLowerCase().includes('wedding') ? '' : `${title} events`}
        />
      </div>
      <div className="flex-[3] grid grid-cols-2 gap-4">
        
      </div>
    </InfoContainer>
  )
}

export default EventDetail
