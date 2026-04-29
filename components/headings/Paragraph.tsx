import {cn} from '@/lib/utils'
import React from 'react'

function Paragraph({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h1 className={cn('leading-none text-sm sm:text-base md:text-lg xl:text-xl', className)}>
      {text}
    </h1>
  )
}

export default Paragraph
