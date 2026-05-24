import Header6 from '@/components/headings/Header6'
import Paragraph from '@/components/headings/Paragraph'
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
    <section className="bg-accent pt-6">
      <div className="relative w-full md:w-[60%] mx-auto">
        <div className="z-[2] w-full h-full absolute inset-0 bg-gradient-to-r from-accent via-accent/0 to-accent">
        </div>
        <div className='z-[3] absolute top-0 w-full flex justify-center'>
          {/* <Header6 text="Brands we've served:" className='capitalize'/> */}
          <Paragraph text="Brands we've served:" className='capitalize font-montrealMedium'/>
        </div>
        <Marquee className='h-fit'>
          {clientsImages.map((client) => {
            return (
              <div
                key={client.image}
                className={cn('mr-6 lg:mr-8 w-[200px] h-[200px] flex justify-center items-center shrink-0', client.height)}
              >
                <Image
                  src={client.image}
                  alt={client.image.split('/').pop() ?? client.image}
                  width={1920}
                  height={1680}
                  className="max-w-full max-h-[90%] object-contain"
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
