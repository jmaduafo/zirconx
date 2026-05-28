import BlurText from '@/components/animations/BlurText'
import Parallax from '@/components/animations/Parallax'
import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import Header3 from '@/components/headings/Header3'
import SmallParagraph from '@/components/headings/SmallParagraph'
import {ParagraphsQueryResult, SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function Opening({
  data,
  paragraphs,
}: {
  readonly data: SettingsQueryResult
  readonly paragraphs: ParagraphsQueryResult
}) {
  return (
    <InfoContainer isMarginTop>
      <div className="mb-5">
        <Header2 className="capitalize italic">
          <BlurText text={paragraphs?.about?.mainTitle ?? ""} />
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
          text={paragraphs?.about?.introSummary ?? ''}
        />
        <div className="flex justify-end flex-wrap flex-row items-start gap-4 2xl:gap-6">
          <SmallParagraph
            className="max-w-xs"
            text={paragraphs?.about?.introParagraph1?.[0]?.children?.[0]?.text ?? ''}
          />
          <SmallParagraph
            className="max-w-xs"
            text={paragraphs?.about?.introParagraph2?.[0]?.children?.[0]?.text ?? ''}
          />
        </div>
      </div>
    </InfoContainer>
  )
}

export default Opening
