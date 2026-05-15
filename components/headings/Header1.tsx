'use client'

import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import React from 'react'

function Header1({text, className}: {readonly text: string; readonly className?: string}) {
  return (
    <h1
      className={cn(
        'text-[14vw] md:text-[10vw] font-serif tracking-tighter leading-[0.9]',
        className,
      )}
    >
      {text.split('').map((letter, i) => {
        return (
          <span className="overflow-hidden" key={`${letter} ${i + 1}`}>
            {letter === ' ' ? (
              <span className="invisible">E</span>
            ) : (
              <motion.span
                initial={{y: '100%'}}
                animate={{y: '0%', transition: {delay: 0.1 * i, ease: 'easeIn'}}}
              >
                {letter}
              </motion.span>
            )}
          </span>
        )
      })}
    </h1>
  )
}

export default Header1
