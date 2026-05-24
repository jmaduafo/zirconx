import {cn} from '@/lib/utils'
import React from 'react'

function Header6({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h6
      className={cn(
        '!leading-none tracking-tighter text-xl sm:text-2xl xl:text-3xl font-serif font-normal italic',
        className,
      )}
    >
      {text}
    </h6>
  )
}

export default Header6
