import {cn} from '@/lib/utils'
import React from 'react'

function Paragraph({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <p className={cn('text-sm sm:text-base md:text-lg !leading-snug tracking-tight', className)}>
      {text}
    </p>
  )
}

export default Paragraph
