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
import {EventsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function EventsCarousel({data}: {readonly data: EventsQueryResult}) {
  return (
    <section>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {data?.categories?.map((item, index) => (
            <CarouselItem key={item.title}>
              <GridDisplay
                url={urlForImage(item?.img)?.width(1900).height(1900).url() ?? ''}
                orderLast
              >
                <div className="h-full flex flex-col justify-center items-center gap-4">
                  <Header4 className="capitalize" text={`${item.title}`} />
                  <PrimaryButton text="View more" href={`/events/${item.slug}`} />
                </div>
              </GridDisplay>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent text-background border-transparent left-0 lg:text-foreground lg:bg-background/70 lg:border-foreground lg:hover:bg-background" />
        <CarouselNext className="bg-transparent text-background border-transparent right-0 lg:text-foreground lg:bg-background/70 lg:border-foreground lg:hover:bg-background" />
      </Carousel>
    </section>
  )
}

export default EventsCarousel
