'use client'

import InfoContainer from '@/components/containers/InfoContainer'
import Header3 from '@/components/headings/Header3'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/gallery'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import React from 'react'

function Gallery({data}: {readonly data: SettingsQueryResult}) {
  return (
    <div>
      <InfoContainer>
        <Header3
          className="max-w-2xl"
          text="No matter the occasion, we design experiences that leave a lasting impression."
        />
      </InfoContainer>
      <section className="overflow-hidden">
        <div className="">
          <Carousel
            className="w-full md:w-[85%] lg:max-w-[70%] ml-auto"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className='mb-5 '>
              {data?.gallery?.map((image, i) => (
                <CarouselItem key={image.asset?._ref ?? i} className="basis-1/3 max-h-[60vh]">
                  <Image
                    key={i + 1}
                    src={
                      urlForImage(image)
                        ?.width(800)
                        .height(1000)
                        .url() ?? ''
                    }
                    alt={`Gallery image ${i + 1}`}
                    width={800}
                    height={1000}
                    className="object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default Gallery
