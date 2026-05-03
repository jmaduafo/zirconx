import {cn} from '@/lib/utils'
import React from 'react'

function Header4({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h4
      className={cn(
        'leading-none text-4xl xl:text-5xl font-serif italic',
        className,
      )}
    >
      {text}
    </h4>
  )
}

export default Header4
