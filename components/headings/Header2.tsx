import {cn} from '@/lib/utils'
import React from 'react'

function Header2({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h2
      className={cn(
        'leading-none text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif',
        className,
      )}
    >
      {text}
    </h2>
  )
}

export default Header2
