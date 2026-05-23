import {cn} from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function ClientMarquee() {
  const clientsImages = [
    {
      height: 'h-[120px] lg:h-[200px]',
      image: '/images/clients/bono.png',
    },
    {
      height: 'h-[90px] lg:h-[120px]',
      image: '/images/clients/busha.png',
    },
    {
      height: 'h-[160px] lg:h-[230px]',
      image: '/images/clients/interswitch.png',
    },
    {
      height: 'h-[60px] lg:h-[100px]',
      image: '/images/clients/lafarge.png',
    },
    {
      height: 'h-[50px] lg:h-[90px]',
      image: '/images/clients/netflix.png',
    },
  ]

  return (
    <section className="bg-accent">
      <div className="relative w-full md:w-[60%] mx-auto">
        <div className="z-[2] w-full h-full absolute inset-0 bg-gradient-to-r from-accent via-accent/0 to-accent"></div>
        <Marquee>
          {clientsImages.map((client) => {
            return (
              <div
                key={client.image}
                className={cn('mr-6 lg:mr-8', client.height)}
              >
                <Image
                  src={client.image}
                  alt={client.image.split('/').pop() ?? client.image}
                  width={1920}
                  height={1680}
                  className="w-auto h-full"
                />
              </div>
            )
          })}
        </Marquee>
      </div>
    </section>
  )
}

export default ClientMarquee
