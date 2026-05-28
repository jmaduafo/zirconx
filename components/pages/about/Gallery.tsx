import PrimaryButton from '@/components/buttons/PrimaryButton'
import {ParagraphsQueryResult, SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function Gallery({
  data,
  paragraphs,
}: {
  readonly data: SettingsQueryResult
  readonly paragraphs: ParagraphsQueryResult
}) {
  return (
    <section className="py-20">
      <Marquee>
        {data?.gallery?.map((image, i) => (
          <div key={image.asset?._ref ?? i + 1} className="w-[40vw] md:w-[25vw] max-h-[60vh] mr-4">
            <Image
              src={urlForImage(image)?.width(800).height(1000).url() ?? ''}
              alt={`Gallery image ${i + 1}`}
              width={800}
              height={1000}
              className="object-cover"
            />
          </div>
        ))}
      </Marquee>
      <div className="flex justify-center mt-5">
        <PrimaryButton text="Our events" href="/events" />
      </div>
    </section>
  )
}

export default Gallery
