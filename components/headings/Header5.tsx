import {cn} from '@/lib/utils'
import React from 'react'

function Header5({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h1
      className={cn(
        'leading-none text-xl sm:text-2xl md:text-3xl xl:text-4xl font-serif',
        className,
      )}
    >
      {text}
    </h1>
  )
}

export default Header5
