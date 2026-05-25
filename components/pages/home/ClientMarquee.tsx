import Paragraph from '@/components/headings/Paragraph'
import {cn} from '@/lib/utils'
import {SettingsQueryResult} from '@/sanity.types'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function ClientMarquee({data}: {readonly data: SettingsQueryResult}) {
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
        <div className="z-[2] w-full h-full absolute inset-0 bg-gradient-to-r from-accent via-accent/0 to-accent"></div>
        <div className="z-[3] absolute top-0 w-full flex justify-center">
          {/* <Header6 text="Brands we've served:" className='capitalize'/> */}
          <Paragraph text="Brands we've served:" className="capitalize font-montrealMedium" />
        </div>
        <Marquee className="">
          {data?.clients?.map((client, i) => {
            return (
              <div
                key={client?.asset?._ref ?? i + 1}
                className={cn(
                  'mr-6 lg:mr-8 w-[210px] h-[180px] flex justify-center items-center shrink-0',
                )}
              >
                <Image
                  src={urlForImage(client)?.width(1920).height(1680).url() ?? ''}
                  alt={`client_${i + 1}`}
                  width={1920}
                  height={1680}
                  className="max-w-[80%] max-h-[70%] object-contain grayscale-[100%]"
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
