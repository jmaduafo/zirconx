import ZoomIn from '@/components/animations/ZoomIn'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import Image from 'next/image'
import React from 'react'

function Motive() {
  return (
    <section className="px-[6vw] mt-[8vh] mb-[15vh]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-x-5 gap-y-[10vh]">
        <div className="flex-1 relative">
          <ZoomIn>
            <div className="w-full">
              <Image
                src="/images/about/motive1.JPG"
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
            <div className="flex flex-col gap-2">
              <Paragraph
                className="max-w-sm"
                text="We specialize in corporate events, dinner galas, brand activations, private celebrations, and intimate gatherings—each thoughtfully designed and expertly executed."
              />
              <Paragraph
                className="max-w-sm"
                text="Since 2019, we have helped clients bring their ideas to life through venue sourcing, vendor management, event design, budget planning, and full-service coordination."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motive
