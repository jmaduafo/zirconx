import {cn} from '@/lib/utils'
import React from 'react'
import PopUp from '../animations/PopUp'

function Header4({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <PopUp>
      <h4
        className={cn('leading-none text-3xl sm:text-4xl xl:text-5xl font-serif italic', className)}
      >
        {text}
      </h4>
    </PopUp>
  )
}

export default Header4
