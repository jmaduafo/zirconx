'use client'

import Appear from '@/components/animations/Appear'
import PopUp from '@/components/animations/PopUp'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import EventCard from '@/components/cards/EventCard'
import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import { cn } from '@/lib/utils'
import Decor from '@/public/images/decor.png'
import {EventsQueryResult, ParagraphsQueryResult, SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {motion} from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Events({
  eventData,
  settingData,
  paragraphs
}: {
  readonly eventData: EventsQueryResult
  readonly settingData: SettingsQueryResult
  readonly paragraphs: ParagraphsQueryResult
}) {
  return (
    <div className="">
      <GridDisplay
        url={urlForImage(settingData?.home?.events)?.width(1920).height(1920).url() ?? ''}
        isTextRight
      >
        <div className="flex flex-col gap-6 justify-center h-full">
          <PopUp>
            <Header4 text={paragraphs?.home?.eventsTitle ?? ""} />
          </PopUp>
          <Appear>
            <div className="grid gap-4">
              <Paragraph text={paragraphs?.home?.eventsParagraph?.[0].children?.[0].text ?? ""} />
              <PrimaryButton text={paragraphs?.home?.eventButton ?? ""} href="/events" />
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
        {/* flex flex-wrap justify-center */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {eventData?.categories?.map((event, i) => {
              return (
                <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1, transition: {delay: i * 0.2}}}
                  viewport={{once: true}}
                  key={event.title}
                  className={cn(event?.title?.toLowerCase().includes('social') && "sm:col-span-2 md:col-span-1")}
                >
                  <EventCard
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
