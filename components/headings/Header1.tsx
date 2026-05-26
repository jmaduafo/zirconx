import {cn} from '@/lib/utils'
import React from 'react'
import BlurText from '../animations/BlurText';

function Header1({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h1
      className={cn(
        'text-[14vw] md:text-[10vw] 2xl:text-[9vw] font-serif tracking-tighter leading-[0.9]',
        className,
      )}
    >
      <BlurText text={text} className='justify-center'/>
    </h1>
  )
}

export default Header1
