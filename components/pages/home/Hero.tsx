'use client'

import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import {hero} from '@/utils/data'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="h-screen relative">
        <div className='py-[8vh] font-serif text-background absolute w-full h-full inset-0 bg-foreground/50 z-20 flex justify-center items-center'>
            <p className='text-[9vw] text-center leading-[.8] uppercase w-[70vw]'>The Zircon Xperience</p>
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
          {hero.map((item) => {
            return (
              <CarouselItem key={item} className="h-screen object-cover object-bottom">
                <Image
                  src={item}
                  alt={item}
                  className="w-full h-full"
                  width={1920}
                  height={1080}
                  loading="eager"
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero
