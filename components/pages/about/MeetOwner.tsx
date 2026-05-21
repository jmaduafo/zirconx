import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function MeetOwner({data}: {readonly data: SettingsQueryResult}) {
  return (
    <GridDisplay
      url={
        urlForImage(data?.owner)
          ?.width(1920)
          .height(1920)
          .url() ?? ''
      }
      orderLast
    >
      <div className="h-full flex flex-col justify-center gap-6">
        <Header4 text="Meet the Owner" />
        <div className="flex flex-col gap-3">
          <Paragraph text="Meet Seun Olawale, the creative force behind The Zircon Xperience.
With over 8 years of experience and more than 200 successful events executed, Seun is known for creating luxurious, detail-oriented experiences that feel both personal and unforgettable." />
          <Paragraph text="Her approach to event planning is centered on one thing; ensuring every client is fully present to enjoy their special moment without the stress of coordination behind the scenes." />
        </div>
      </div>
    </GridDisplay>
  )
}

export default MeetOwner
