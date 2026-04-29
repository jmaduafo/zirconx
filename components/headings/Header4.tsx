import {cn} from '@/lib/utils'
import React from 'react'

function Header4({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h1
      className={cn(
        'leading-none text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif italic',
        className,
      )}
    >
      {text}
    </h1>
  )
}

export default Header4
