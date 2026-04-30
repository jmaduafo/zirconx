'use client'

import Header1 from '@/components/headings/Header1'
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import {hero} from '@/utils/data'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

function Hero() {
  return (
    <div className="h-screen relative">
      <div className="py-[8vh] font-serif text-background absolute w-full h-full inset-0 bg-foreground/50 z-20 flex justify-center items-center">
        <Header1 className='uppercase text-center w-[90%]' text="The Zircon Xperience"/>
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
          {hero.map((image) => {
            return (
              <CarouselItem key={image} className="h-screen">
                <div
                  className="w-full h-full object-cover object-bottom bg-cover bg-no-repeat bg-center"
                  style={{backgroundImage: `url(${image})`}}
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
