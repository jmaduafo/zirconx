import {cn} from '@/lib/utils'
import React from 'react'

function SmallParagraph({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <p className={cn('text-sm md:text-base !leading-snug tracking-tight', className)}>{text}</p>
  )
}

export default SmallParagraph
