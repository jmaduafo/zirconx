import PrimaryButton from '@/components/buttons/PrimaryButton'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import {Image as SanityImage} from 'sanity'

function Gallery({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section className='py-20'>
      <Marquee>
        {data?.gallery?.map((image, i) => (
          <div key={image.asset?._ref ?? i} className="w-[25vw] max-h-[60vh] mr-4">
            <Image
              key={i + 1}
              src={
                urlForImage(image as unknown as SanityImage)
                  ?.width(800)
                  .height(1000)
                  .url() ?? ''
              }
              alt={`Gallery image ${i + 1}`}
              width={800}
              height={1000}
              className="object-cover"
            />
          </div>
        ))}
      </Marquee>
      <div className='flex justify-center mt-5'>
        <PrimaryButton text='Our events' href="/events"/>
      </div>
    </section>
  )
}

export default Gallery
