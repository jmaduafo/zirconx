import {cn} from '@/lib/utils'
import React from 'react'
import Appear from '../animations/Appear'

function Paragraph({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <Appear>
      <p className={cn('text-sm sm:text-base md:text-lg !leading-snug tracking-tight', className)}>
        {text}
      </p>
    </Appear>
  )
}

export default Paragraph
