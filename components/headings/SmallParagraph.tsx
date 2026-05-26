import {cn} from '@/lib/utils'
import React from 'react'
import Appear from '../animations/Appear'

function SmallParagraph({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <Appear>
      <p className={cn('text-sm md:text-base 2xl:text-xl !leading-snug tracking-tight 2xl:tracking-normal', className)}>{text}</p>
    </Appear>
  )
}

export default SmallParagraph
