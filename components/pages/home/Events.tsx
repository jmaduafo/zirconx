import Appear from '@/components/animations/Appear'
import PopUp from '@/components/animations/PopUp'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import EventCard from '@/components/cards/EventCard'
import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import {navigation} from '@/utils/data'
import React, {Fragment} from 'react'

function Events() {
  return (
    <div>
      <GridDisplay url="/images/home/events/event_opening.png" isTextRight>
        <div className="flex flex-col gap-6 justify-center h-full">
          <PopUp>
            <Header4 text="Our Events" />
          </PopUp>
          <Appear>
            <div className="grid gap-4">
              <Paragraph text="From intimate gatherings to large-scale celebrations, every event we plan is thoughtfully designed to reflect your vision and leave a lasting impression. We believe that no detail is too small when it comes to creating meaningful experiences." />
              <PrimaryButton text="Discover more" href="/events" />
            </div>
          </Appear>
        </div>
      </GridDisplay>
      <section className="border-t sm:border-b border-t-foreground sm:border-b-foreground">
        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          {navigation
            .find((item) => item.title.toLowerCase().includes('event'))
            ?.dropdown?.map((event, i) => {
              return (
                <Fragment key={event.title}>
                  <EventCard
                    events={
                      navigation.find((item) => item.title.toLowerCase().includes('event'))
                        ?.dropdown ?? []
                    }
                    title={event.title}
                    index={i}
                    image={event.image}
                  />
                </Fragment>
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default Events
