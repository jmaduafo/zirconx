import BlurText from '@/components/animations/BlurText'
import Parallax from '@/components/animations/Parallax'
import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import Header3 from '@/components/headings/Header3'
import SmallParagraph from '@/components/headings/SmallParagraph'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function Opening({data}: {readonly data: SettingsQueryResult}) {
  return (
    <InfoContainer isMarginTop>
      <div className="mb-5">
        <Header2 className="capitalize italic">
          <BlurText text="About us" />
        </Header2>
      </div>
      <Parallax
        image={urlForImage(data?.about?.opening)?.width(1920).height(1200).url() ?? ''}
        height="lg:h-[80vh]"
        scale="scale-110"
      />
      <div className="flex flex-col gap-6 items-end mt-6">
        <Header3
          className="max-w-3xl xl:max-w-4xl 2xl:max-w-7xl"
          text="The Zircon Xperience is a full service professional event planning
company located in Lagos."
        />
        <div className="flex justify-end flex-wrap flex-row items-start gap-4 2xl:gap-6">
          <SmallParagraph
            className="max-w-xs"
            text="At The Zircon Xperience, we are a full-service event planning company based in Lagos, creating intimate celebrations, corporate galas, brand openings, birthday parties, and memorable experiences tailored to each client."
          />
          <SmallParagraph
            className="max-w-xs"
            text="From planning and styling to vendor coordination, production, and event management, we handle every detail in one place to make the process smooth and stress-free. Our goal is simple; to take the pressure off you while bringing your vision to life beautifully and professionally."
          />
        </div>
      </div>
    </InfoContainer>
  )
}

export default Opening
