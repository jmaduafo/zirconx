'use client'

import TestimonialCard from '@/components/cards/TestimonialCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import {SettingsQueryResult} from '@/sanity.types'
import React, {useEffect, useState} from 'react'

function Testimonials({data}: {readonly data: SettingsQueryResult}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    data?.testimonials && setCount(data.testimonials.length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="my-6">
      <div className="flex items-center justify-center gap-1">
        {Array.from({length: 5}).map((_, i) => {
          return (
            // STAR ICON
            <svg
              key={`star_${i + 1}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2A1B04"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          )
        })}
      </div>
      <div className="relative w-full overflow-hidden flex justify-center mt-6">
        <Carousel
          setApi={setApi}
          className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] static"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="overflow-x-visible">
            {data
              ? data.testimonials?.map((testimonial) => {
                  return (
                    <CarouselItem className="" key={testimonial.client}>
                      <TestimonialCard testimonial={testimonial} />
                    </CarouselItem>
                  )
                })
              : null}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mt-4">
        <p className="text-center">
          {current} / {count}
        </p>
      </div>
    </section>
  )
}

export default Testimonials
