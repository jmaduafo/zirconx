'use client'

import Header1 from '@/components/headings/Header1'
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {hero} from '@/utils/data'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

function Hero({data}: {readonly data: SettingsQueryResult}) {
  return (
    <div className="h-screen relative">
      <div className="py-[8vh] font-serif text-background absolute w-full h-full inset-0 bg-foreground/50 z-20 flex justify-center items-center">
        <Header1 className="uppercase text-center w-[90%]" text="The Zircon Xperience" />
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className="gap-0">
          {data?.hero?.map((image, i) => {
            return (
              <CarouselItem key={`hero_carousel${i + 1}`} className="h-screen">
                <div
                  className="w-full h-full object-cover object-bottom bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${urlForImage(image)?.width(1920).height(1200).url() ?? ''})`,
                  }}
                >
                  {/* <Image
                  src={item}
                  alt={item}
                  className="w-full h-full"
                  width={1920}
                  height={1080}
                  loading="eager"
                  /> */}
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero
