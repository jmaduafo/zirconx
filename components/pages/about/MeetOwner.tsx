import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import {ParagraphsQueryResult, SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function MeetOwner({
  data,
  paragraphs,
}: {
  readonly data: SettingsQueryResult
  readonly paragraphs: ParagraphsQueryResult
}) {
  return (
    <GridDisplay url={urlForImage(data?.owner)?.width(1920).height(1920).url() ?? ''} orderLast>
      <div className="h-full flex flex-col justify-center gap-6">
        <Header4 text={paragraphs?.about?.meetOwnerTitle ?? ""} />
        <div className="flex flex-col gap-3">
          <Paragraph
            text={paragraphs?.about?.ownerParagraph1?.[0]?.children?.[0]?.text ?? ""}
          />
          <Paragraph text={paragraphs?.about?.ownerParagraph2?.[0]?.children?.[0]?.text ?? ""} />
        </div>
      </div>
    </GridDisplay>
  )
}

export default MeetOwner
