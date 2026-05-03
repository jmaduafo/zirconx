import PrimaryButton from '@/components/buttons/PrimaryButton'
import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {navigation} from '@/utils/data'
import React from 'react'

function EventsCarousel() {
  return (
    <section>
      <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full">
        <CarouselContent>
          {navigation
            .find((item) => item.title.toLowerCase().includes('event'))
            ?.dropdown?.map((item, index) => (
              <CarouselItem key={item.title}>
                <GridDisplay url={item.image}>
                  <div className='h-full flex flex-col justify-center items-center gap-4'>
                    <Header4 className='capitalize' text={`${item.title}${item.title.toLowerCase().includes("wedding") ? "" : " Events"}`}/>
                    <PrimaryButton text="View more" href={`/${item.link}`}/>
                  </div>
                </GridDisplay>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default EventsCarousel
