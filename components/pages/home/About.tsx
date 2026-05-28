import Appear from '@/components/animations/Appear'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SingleSummary from '@/components/containers/SingleSummary'
import Header3 from '@/components/headings/Header3'
import Decor from '@/public/images/decor.png'
import { ParagraphsQueryResult } from '@/sanity.types'
import Image from 'next/image'
import React from 'react'

function About({ paragraphs }: { readonly paragraphs: ParagraphsQueryResult}) {
  return (
    <SingleSummary>
      <div className="flex items-center flex-col gap-6">
        <div className="flex items-center flex-col gap-5">
          <Appear>
            <div className="w-[10em] object-cover object-bottom">
              <Image src={Decor} className="w-full h-full" alt="floral design" />
            </div>
          </Appear>
          <Header3
            className="text-center"
            text={paragraphs?.home?.aboutSummary?.[0].children?.[0].text ?? ""}
          />
        </div>
        <div>
          <PrimaryButton text="Discover more" href="/about" id="services" />
        </div>
      </div>
    </SingleSummary>
  )
}

export default About
