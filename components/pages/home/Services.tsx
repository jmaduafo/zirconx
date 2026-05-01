import ServicesCard from '@/components/cards/ServicesCard'
import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import {services} from '@/utils/data'
import React, {Fragment} from 'react'

function Services() {
  return (
    <div>
      <GridDisplay url="/images/home/services/service.jpeg">
        <div className="h-full flex flex-col">
          <Header4 text="Our Services" />
          <div className="grid gap-4 mt-auto">
            <Paragraph text="We specialize in corporate events, dinner galas, brand activations, private celebrations, and intimate gatherings—each thoughtfully designed and expertly executed." />
            <Paragraph text="Since 2019, we have helped clients bring their ideas to life through venue sourcing, vendor management, event design, budget planning, and full-service coordination." />
          </div>
        </div>
      </GridDisplay>
      <section className='py-[12vh]'>
        <div className=" w-[80%] mx-auto flex flex-wrap justify-center gap-x-7 gap-y-7">
          {services.map((service) => {
            return (
              <Fragment key={service.title}>
                <ServicesCard item={service} />
              </Fragment>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Services
