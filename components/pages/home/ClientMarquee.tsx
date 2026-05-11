import { cn } from '@/lib/utils'
import {clientsImages} from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function ClientMarquee() {
  return (
    <section className="bg-accent">
      <div className="relative w-[60%] mx-auto">
        <div className='z-[2] w-full h-full absolute inset-0 bg-gradient-to-r from-accent via-accent/0 to-accent'></div>
        <Marquee>
          {clientsImages.map((client) => {
            return (
              <div key={client.image} className={"object-cover object-bottom mr-8"} style={{ height: client.height}}>
                <Image
                  src={client.image}
                  alt={client.image.split('/').pop() ?? client.image}
                  width={1920}
                  height={1680}
                  className="w-full h-full"
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
