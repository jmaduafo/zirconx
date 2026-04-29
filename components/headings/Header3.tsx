import {cn} from '@/lib/utils'
import React from 'react'

function Header3({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h1
      className={cn(
        'leading-none text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif',
        className,
      )}
    >
      {text}
    </h1>
  )
}

export default Header3
