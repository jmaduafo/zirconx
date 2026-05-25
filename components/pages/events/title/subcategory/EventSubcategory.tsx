'use client'

import {Tilt, TiltContent} from '@/components/animate-ui/primitives/effects/tilt'
import TextGenerateEffect from '@/components/animations/TextGenerateEffect'
import EventCard from '@/components/cards/EventCard'
import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import {Button} from '@/components/ui/button'
import {HoverCard, HoverCardContent, HoverCardTrigger} from '@/components/ui/hover-card'
import {EventsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {MoveLeft, MoveRight} from 'lucide-react'
import Image from 'next/image'
import {useParams, useRouter} from 'next/navigation'
import React, {Fragment} from 'react'

function EventSubcategory({
  data,
  subcategory,
}: {
  readonly data: EventsQueryResult
  readonly subcategory: string
}) {
  const {title} = useParams()
  const router = useRouter()

  const category = data?.categories?.find((item) =>
    item.title?.toLowerCase().includes((title as string)?.split('-')[0]),
  )

  const currentEvent = category?.subcategories?.find(
    (sub) => sub.subcategory?.toLowerCase() === subcategory.split('%20').join(' '),
  )

  const currentIndex = category?.subcategories?.findIndex(
    (sub) => sub.subcategory?.toLowerCase() === subcategory.split('%20').join(' '),
  )

  const prevEvent =
    typeof currentIndex === 'number' && category?.subcategories
      ? category?.subcategories[
          (category.subcategories.length + (currentIndex - 1)) % category.subcategories.length
        ]
      : null

  const nextEvent =
    typeof currentIndex === 'number' && category?.subcategories
      ? category?.subcategories[(currentIndex + 1) % category.subcategories.length]
      : null

  return currentEvent ? (
    <>
      <InfoContainer isMarginTop>
        <div className="">
          <Header2 className="text-center italic">
            <TextGenerateEffect words={currentEvent?.subcategory ?? ''} />
          </Header2>
        </div>
        <div className="z-50 fixed transform -translate-x-1/2 -translate-y-1/2 top-[50vh] left-1/2 w-[90%] flex items-center justify-between">
          <HoverCard>
            <HoverCardTrigger>
              <Button
                onClick={() =>
                  router.push(`/events/${title}/${prevEvent?.subcategory?.toLowerCase()}`)
                }
                className=""
                size={'icon-sm'}
                variant={'outline'}
              >
                <MoveLeft strokeWidth={1} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit text-center">
              <span className="uppercase opacity-70">Prev</span> <br />{' '}
              {prevEvent ? prevEvent.subcategory : ''}
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Button
                onClick={() =>
                  router.push(`/events/${title}/${nextEvent?.subcategory?.toLowerCase()}`)
                }
                className=""
                size={'icon-sm'}
                variant={'outline'}
              >
                <MoveRight strokeWidth={1} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit text-center">
              <span className="uppercase opacity-70">Next</span> <br />{' '}
              {nextEvent ? nextEvent.subcategory : ''}
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="w-[70%] mx-auto flex flex-col gap-6 mt-5">
          {currentEvent.images?.map((img) => {
            return (
              <Tilt key={img?.asset?._ref} maxTilt={5}>
                <TiltContent>
                  <div className="w-full">
                    <Image
                      src={urlForImage(img)?.url() ?? ''}
                      alt={`${img.asset?._ref}`}
                      width={1920}
                      height={1500}
                      className="object-cover object-center w-full h-auto"
                    />
                  </div>
                </TiltContent>
              </Tilt>
            )
          })}
        </div>
      </InfoContainer>
      <div className="grid sm:grid-cols-2 gap-4 px-4 mb-5">
        {data?.categories?.map((event, i) => {
            return (
              <Fragment key={event.title}>
                <EventCard
                  title={event.title ?? ""}
                  image={urlForImage(event?.img)?.width(1920).height(1200).url() ?? ''}
                  index={i}
                  events={
                    data?.categories?.filter((item) => title && !item.slug?.includes(title as string)) ?? []
                  }
                  link={event.slug ?? ""}
                  height="h-[40vh]"
                />
              </Fragment>
            )
          })}
      </div>
    </>
  ) : null
}

export default EventSubcategory
