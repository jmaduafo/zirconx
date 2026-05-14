import React from 'react'
import Header4 from './headings/Header4'
import SmallParagraph from './headings/SmallParagraph'

function MainHeader({title, subtitle}: {readonly title: string; readonly subtitle: string}) {
  return (
    <div className="flex flex-col gap-3">
      <Header4 className="capitalize" text={title} />
      <SmallParagraph className="max-w-[13em]" text={subtitle} />
    </div>
  )
}

export default MainHeader
