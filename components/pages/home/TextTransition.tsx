import SingleSummary from '@/components/containers/SingleSummary'
import Header3 from '@/components/headings/Header3'
import { ParagraphsQueryResult } from '@/sanity.types'
import React from 'react'

function TextTransition({paragraphs}: { readonly paragraphs: ParagraphsQueryResult}) {
  return (
    <SingleSummary>
      <Header3
        className="text-center"
        text="With our ideas, attention to detail, and creativity, we bring your dream event to life because we take fun seriously."
      />
    </SingleSummary>
  )
}

export default TextTransition
