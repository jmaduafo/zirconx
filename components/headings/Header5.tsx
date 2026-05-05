import {cn} from '@/lib/utils'
import React from 'react'

function Header5({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h5
      className={cn(
        'leading-none text-2xl sm:text-3xl xl:text-4xl font-serif',
        className,
      )}
    >
      {text}
    </h5>
  )
}

export default Header5
