'use client'

import InfoContainer from '@/components/containers/InfoContainer'
import Header6 from '@/components/headings/Header6'
import MainHeader from '@/components/MainHeader'
import {EventsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {navigation} from '@/utils/data'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'

function EventDetail({data, title}: {readonly data: EventsQueryResult; readonly title: string}) {
  const pathname = usePathname()

  const event = data?.categories?.find((event) =>
    event.title?.toLowerCase().includes(title.split('-')[0].toLowerCase()),
  )

  const link = navigation
    .find((nav) => nav.title === 'events')
    ?.dropdown?.find((event) => pathname.includes(event.link))

  return (
    <InfoContainer isMarginTop className="relative flex flex-col md:flex-row gap-5">
      <div className="self-start sticky top-28 flex-1 bg-background">
        <MainHeader
          title={event?.title ?? ''}
          subtitle={event?.description ? event.description.split('.')[0] + '.' : ''}
        />
      </div>
      <div className="flex-[2] grid grid-cols-2 gap-5">
        {event?.subcategories?.map((item) => {
          return (
            <Link href={`/${link?.link}/${item.subcategory?.toLowerCase()}`} key={item.subcategory}>
              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{borderRadius: '0%'}}
                  whileHover={{borderRadius: '50%'}}
                  className="cursor-pointer w-full h-[65vh] overflow-hidden"
                >
                  {item?.images && (
                    <Image
                      src={urlForImage(item.images[0])?.width(800).height(1000).url() ?? ''}
                      alt={`${item.subcategory} image`}
                      width={800}
                      height={1000}
                      className="object-cover object-center"
                    />
                  )}
                </motion.div>
                <Header6 text={item.subcategory ?? ''} />
              </div>
            </Link>
          )
        })}
      </div>
    </InfoContainer>
  )
}

export default EventDetail
