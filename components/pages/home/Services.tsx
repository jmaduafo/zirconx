'use client'

import ServicesCard from '@/components/cards/ServicesCard'
import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {services} from '@/utils/data'
import {motion} from 'framer-motion'
import React from 'react'

function Services({data}: {readonly data: SettingsQueryResult}) {
  return (
    <div>
      <GridDisplay
        url={urlForImage(data?.home?.services)?.width(1920).height(1920).url() ?? ''}
        orderLast
      >
        <div className="h-full flex flex-col justify-center gap-6">
          <Header4 text="Our Services" />
          <div className="grid gap-4">
            <Paragraph text="We specialize in corporate events, dinner galas, brand activations, private celebrations, and intimate gatherings—each thoughtfully designed and expertly executed." />
            <Paragraph text="Since 2019, we have helped clients bring their ideas to life through venue sourcing, vendor management, event design, budget planning, and full-service coordination." />
          </div>
        </div>
      </GridDisplay>
      <section className="py-[12vh]">
        <div className="w-full sm:w-[85%] xl:w-[80%] 2xl:[50%] mx-auto flex flex-wrap justify-center gap-x-7 gap-y-7">
          {data?.services?.map((service, i) => {
            return (
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {delay: i * 0.2, ease: 'easeIn'}}}
                viewport={{once: true}}
                key={service.title}
              >
                <ServicesCard item={service} />
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Services
