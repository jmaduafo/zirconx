import {cn} from '@/lib/utils'
import React from 'react'

function Header3({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h3
      className={cn(
        'text-4xl sm:text-5xl xl:text-6xl font-serif leading-none',
        className,
      )}
    >
      {text}
    </h3>
  )
}

export default Header3
