import {cn} from '@/lib/utils'
import React from 'react'

function Header6({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h1
      className={cn(
        'leading-none text-lg sm:text-xl md:text-2xl xl:text-3xl font-serif italic',
        className,
      )}
    >
      {text}
    </h1>
  )
}

export default Header6
