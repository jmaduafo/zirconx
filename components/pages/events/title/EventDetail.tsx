'use client'

import PopUp from '@/components/animations/PopUp'
import InfoContainer from '@/components/containers/InfoContainer'
import Header6 from '@/components/headings/Header6'
import MainHeader from '@/components/MainHeader'
import {EventsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EventDetail({data, title}: {readonly data: EventsQueryResult; readonly title: string}) {
  const event = data?.categories?.find((event) =>
    event.title?.toLowerCase().includes(title.split('-')[0].toLowerCase()),
  )

  return (
    <InfoContainer isMarginTop className="relative flex flex-col items-center md:items-baseline md:flex-row gap-5">
      <div className="md:self-start md:sticky md:top-28 2xl:top-40 flex-1 bg-background">
        <MainHeader
          title={event?.title ?? ''}
          titleClassname='text-center md:text-left max-w-full md:max-w-xs 2xl:max-w-md'
          subtitleClassname='text-center md:text-left max-w-sm md:max-w-xs'
          subtitle={event?.description ? event.description.split('.')[0] + '.' : ''}
        />
      </div>
      <div className="flex-[2] grid grid-cols-2 gap-3 gap-y-5 md:gap-5">
        {event?.subcategories?.map((item) => {
          return (
            <Link href={`/events/${title}/${item.subcategory?.toLowerCase()}`} key={item.subcategory}>
              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{borderRadius: '0%'}}
                  whileHover={{borderRadius: '50%'}}
                  className="cursor-pointer w-full max-h-[65vh] overflow-hidden"
                >
                  {item?.images && (
                    <Image
                      src={urlForImage(item.images[0])?.width(800).height(1000).url() ?? ''}
                      alt={`${item.subcategory} image`}
                      width={1200}
                      height={1600}
                      className="object-cover object-center w-full h-auto"
                    />
                  )}
                </motion.div>
                <PopUp>
                  <Header6 text={item.subcategory ?? ''} />
                </PopUp>
              </div>
            </Link>
          )
        })}
      </div>
    </InfoContainer>
  )
}

export default EventDetail
