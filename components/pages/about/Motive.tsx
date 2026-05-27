import ZoomIn from '@/components/animations/ZoomIn'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import {SettingsQueryResult} from '@/sanity.types'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import React from 'react'

function Motive({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section className="px-[6vw] mt-[8vh] mb-[15vh]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-x-5 gap-y-[10vh] 2xl:gap-y-[6vh]">
        <div className="flex-1 relative">
          <ZoomIn>
            <div className="w-full">
              <Image
                src={urlForImage(data?.about?.closing)?.width(1920).height(1200).url() ?? ''}
                width={1920}
                height={1080}
                alt="ceramic bowls display"
                className="object-cover scale-110 w-full h-full"
              />
            </div>
          </ZoomIn>
          {/* <TranslateYScroll>
            <div className="absolute max-w-40 top-full left-3/4 transform -translate-x-1/2 -translate-y-1/2 object-cover object-bottom">
              <Image
                src="/images/about/motive2.JPG"
                width={1920}
                height={1080}
                alt="ceramic bowls display"
                className="w-full h-full"
              />
            </div>
          </TranslateYScroll> */}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <Header4 text="Our Motive" />
            <div className="flex flex-col gap-2 max-w-sm 2xl:max-w-lg">
              <Paragraph
                className=""
                text="At Zircon, our goal is to become a world-leading event planning company known for delivering exceptional and high-quality experiences."
              />
              <Paragraph
                className=""
                text="We are passionate about creating unforgettable moments by combining creativity, professionalism, and attention to detail in every event we organize and believe every event should reflect the personality and desires of the people it is created for."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motive
