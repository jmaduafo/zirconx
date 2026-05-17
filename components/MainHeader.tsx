import {cn} from '@/lib/utils'
import React from 'react'
import Header4 from './headings/Header4'
import SmallParagraph from './headings/SmallParagraph'

function MainHeader({
  title,
  subtitle,
  titleClassname,
  subtitleClassname,
}: {
  readonly title: string
  readonly subtitle: string
  readonly subtitleClassname?: string
  readonly titleClassname?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <Header4 className={cn('capitalize max-w-xs', titleClassname)} text={title} />
      <SmallParagraph className={cn('max-w-[13em]', subtitleClassname)} text={subtitle} />
    </div>
  )
}

export default MainHeader
