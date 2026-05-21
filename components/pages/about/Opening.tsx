import BlurText from '@/components/animations/BlurText'
import Parallax from '@/components/animations/Parallax'
import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import Header3 from '@/components/headings/Header3'
import React from 'react'

function Opening() {
  return (
    <InfoContainer isMarginTop>
      <div className="mb-5">
        <Header2 className="capitalize italic">
          <BlurText text='About us'/>
        </Header2>
      </div>
      <Parallax image="/images/about/opening.JPG" height="md:h-[70vh]" scale="scale-110" />
      <div className="flex flex-col gap-4 items-end mt-6">
        <Header3
          className="max-w-4xl"
          text="The Zircon Xperience is a full service professional event planning
company located in Lagos, specializing in corporate events, dinner galas, brand openings, birthday celebrations, and other intimate events."
        />
      </div>
    </InfoContainer>
  )
}

export default Opening
