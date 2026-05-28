import SingleSummary from '@/components/containers/SingleSummary'
import Header3 from '@/components/headings/Header3'
import {ParagraphsQueryResult} from '@/sanity.types'
import React from 'react'

function TeamSummary({paragraphs}: {readonly paragraphs: ParagraphsQueryResult}) {
  return (
    <SingleSummary>
      <Header3
        className="text-center"
        text={paragraphs?.about?.teamSummary?.[0]?.children?.[0]?.text ?? ''}
      />
    </SingleSummary>
  )
}

export default TeamSummary
