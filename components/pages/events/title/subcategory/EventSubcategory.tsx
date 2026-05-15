'use client'

import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import {EventsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import Image from 'next/image'
import {useParams} from 'next/navigation'
import React from 'react'

function EventSubcategory({
  data,
  subcategory,
}: {
  readonly data: EventsQueryResult
  readonly subcategory: string
}) {
  const {title} = useParams()

  const category = data?.categories?.find((item) =>
    item.title?.toLowerCase().includes((title as string)?.split('-')[0]),
  )

  const event = category?.subcategories?.find(
    (sub) => sub.subcategory?.toLowerCase() === subcategory.split('%20').join(' '),
  )

  return event ? (
    <InfoContainer isMarginTop>
      <div className=''>
        <Header2 className="text-center italic">
          <span>{event.subcategory}</span>
        </Header2>
      </div>
      <div className="flex flex-col items-center gap-6 mt-5">
        {event.images?.map((img) => {
          return (
            <div key={img?.asset?._ref} className="w-[70%]">
              <Image
                src={urlForImage(img)?.url() ?? ''}
                alt={`${img.asset?._ref}`}
                width={1920}
                height={1500}
                className="object-cover object-center w-auto h-auto"
              />
            </div>
          )
        })}
      </div>
    </InfoContainer>
  ) : null
}

export default EventSubcategory
