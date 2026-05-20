'use client'

import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel'
import {SettingsQueryResult} from '@/sanity.types'
import { EmblaOptionsType } from 'embla-carousel'
import React from 'react'

function Testimonials({data}: {readonly data: SettingsQueryResult}) {


  const OPTIONS: EmblaOptionsType = { loop: true };

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
        <MotionCarousel slides={data?.testimonials ?? []} options={OPTIONS} />
      </div>
    </section>
  )
}

export default Testimonials
