import BlurText from '@/components/animations/BlurText'
import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import SmallParagraph from '@/components/headings/SmallParagraph'
import { ParagraphsQueryResult } from '@/sanity.types'
import React from 'react'

function EventInfo({ paragraphs }: { readonly paragraphs: ParagraphsQueryResult}) {
  return (
    <InfoContainer>
        <div className='w-[90%] mx-auto'>
            <Header2 className='italic'>
              <BlurText text={paragraphs?.events?.mainTitle ?? ""}/>
            </Header2>
            <div className='flex justify-end items-start flex-wrap gap-x-6 gap-y-3 mt-5'>
                <SmallParagraph className="max-w-xs" text={paragraphs?.events?.paragraph1?.[0]?.children?.[0]?.text ?? ''}/>
                <SmallParagraph className="max-w-xs" text={paragraphs?.events?.paragraph2?.[0]?.children?.[0]?.text ?? ''}/>
            </div>
        </div>
    </InfoContainer>
  )
}

export default EventInfo