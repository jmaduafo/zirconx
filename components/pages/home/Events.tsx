'use client'

import Appear from '@/components/animations/Appear'
import PopUp from '@/components/animations/PopUp'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import EventCard from '@/components/cards/EventCard'
import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import Decor from '@/public/images/decor.png'
import {EventsQueryResult, SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {navigation} from '@/utils/data'
import {motion} from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Events({
  eventData,
  settingData,
}: {
  readonly eventData: EventsQueryResult
  readonly settingData: SettingsQueryResult
}) {
  return (
    <div className="">
      <GridDisplay
        url={urlForImage(settingData?.homeEvents)?.width(1920).height(1920).url() ?? ''}
        isTextRight
      >
        <div className="flex flex-col gap-6 justify-center h-full">
          <PopUp>
            <Header4 text="Our Events" />
          </PopUp>
          <Appear>
            <div className="grid gap-4">
              <Paragraph text="From intimate gatherings to large-scale celebrations, every event we plan is thoughtfully designed to reflect your vision and leave a lasting impression. We believe that no detail is too small when it comes to creating meaningful experiences." />
              <PrimaryButton text="Discover more" href="/events" />
            </div>
          </Appear>
        </div>
      </GridDisplay>
      {/* border-t sm:border-b border-t-foreground sm:border-b-foreground  */}
      <section className="px-4">
        <div className="flex justify-center py-5">
          <Appear>
            <div className="w-[10em]">
              <Image src={Decor} className="w-full h-full" alt="floral design" />
            </div>
          </Appear>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {eventData?.categories?.map((event, i) => {
              return (
                <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1, transition: {delay: i * 0.2}}}
                  viewport={{once: true}}
                  key={event.title}
                >
                  <EventCard
                    events={
                      navigation.find((item) => item.title.toLowerCase().includes('event'))
                        ?.dropdown ?? []
                    }
                    isHome
                    title={event.title ?? ""}
                    index={i}
                    image={urlForImage(event?.img)?.width(1920).height(1920).url() ?? ''}
                    link={event.slug ?? ""}
                  />
                </motion.div>
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default Events
