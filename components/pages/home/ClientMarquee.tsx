import Paragraph from '@/components/headings/Paragraph'
import {ParagraphsQueryResult, SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function ClientMarquee({
  data,
  paragraphs,
}: {
  readonly data: SettingsQueryResult
  readonly paragraphs: ParagraphsQueryResult
}) {
  return (
    <section className="relative bg-accent pt-7 pb-2 2xl:pb-5">
      <div className="z-[3] absolute top-[20%] w-full flex justify-center">
        <Paragraph text={paragraphs?.client?.marqueeHeader ?? ""} className="capitalize font-montrealMedium" />
      </div>
      <div className="relative w-full md:w-[60%] mx-auto">
        <div className="z-[2] w-full h-full absolute inset-0 bg-gradient-to-r from-accent via-accent/0 to-accent"></div>
        {/* <Header6 text="Brands we've served:" className='capitalize'/> */}
        <Marquee className="mt-2">
          {data?.clients?.map((client, i) => {
            return (
              <div
                key={client?.asset?._ref ?? i + 1}
                className="mr-6 lg:mr-8 h-[120px] flex items-center justify-center"
              >
                <Image
                  src={urlForImage(client)?.width(400).url() ?? ''}
                  alt={client?.asset?._ref ?? ''}
                  width={400}
                  height={120}
                  className="h-[70px] sm:h-[85px] lg:h-[95px] w-auto object-contain grayscale"
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
