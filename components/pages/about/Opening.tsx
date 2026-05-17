import BlurText from '@/components/animations/BlurText'
import Parallax from '@/components/animations/Parallax'
import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import Header3 from '@/components/headings/Header3'
import SmallParagraph from '@/components/headings/SmallParagraph'
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
          text="We specialize incorporate events, dinner galas, brand openings, picnic parties, birthday celebrations and other intimate events."
        />
        <SmallParagraph
          className="max-w-xs"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        />
      </div>
    </InfoContainer>
  )
}

export default Opening
