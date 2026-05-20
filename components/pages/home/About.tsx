import Appear from '@/components/animations/Appear'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SingleSummary from '@/components/containers/SingleSummary'
import Header3 from '@/components/headings/Header3'
import Decor from '@/public/images/decor.png'
import Image from 'next/image'
import React from 'react'

function About() {
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
            text="The Zircon Xperience is a full-service event planning company based in Lagos, dedicated to creating refined and unforgettable experiences."
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
