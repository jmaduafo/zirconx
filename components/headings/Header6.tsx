import {cn} from '@/lib/utils'
import React from 'react'

function Header6({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h6
      className={cn(
        'leading-[0.4] text-base xs:text-lg sm:text-xl md:text-2xl xl:text-3xl font-serif italic',
        className,
      )}
    >
      {text}
    </h6>
  )
}

export default Header6
