import {cn} from '@/lib/utils'
import React from 'react'

function Header4({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h4
      className={cn(
        'leading-none text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif italic',
        className,
      )}
    >
      {text}
    </h4>
  )
}

export default Header4
