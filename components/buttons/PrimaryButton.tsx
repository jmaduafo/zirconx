'use client'

import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function PrimaryButton({
  text,
  className,
  href,
}: {
  readonly text: string
  readonly className?: string
  readonly href: string
}) {
  const containerVariants = {
    initial: {y: 0},
    hover: {y: 0}, // Parent animation
  }

  const bgVariant = {
    initial: {
      clipPath: 'inset(0 100% 0 0)',
      width: '0%',
    },
    hover: {
      clipPath: 'inset(0 0 0 0)',
      width: '100%',
    },
  }
  const textVariant = {
    initial: {color: '#2A1B04'},
    hover: {color: '#FFFCF6'},
  }

  const iconVariant = {
    initial: {color: '#FFFCF6', backgroundColor: '#2A1B04'},
    hover: {color: '#2A1B04', backgroundColor: '#FFFCF6'},
  }

  const iconMoveVariant = {
    initial: {x: '0%'},
    hover: {x: '100%'},
  }

  return (
    <Link href={href}>
      <motion.div
        variants={containerVariants}
        animate="initial"
        whileHover="hover"
        className={cn(
          'overflow-hidden relative py-1.5 px-2 font-montrealBook outline-none rounded-full border-[1.5px] border-foreground flex items-center',
          className,
        )}
      >
        <motion.div
          className="rounded-full absolute top-0 left-0 h-full w-full bg-foreground"
          variants={bgVariant}
        ></motion.div>
        <div className="z-[2] flex items-center">
          <motion.button variants={textVariant} className={'pl-3 pr-4 capitalize'}>
            {text}
          </motion.button>
          <motion.div
            variants={iconVariant}
            className=" overflow-hidden relative size-5 flex justify-end rounded-full bg-foreground text-background"
          >
            <motion.div
              variants={iconMoveVariant}
              className="flex-none size-5 flex justify-center items-center"
            >
              <ArrowRight className="size-4" />
            </motion.div>
            <motion.div
              variants={iconMoveVariant}
              className="flex-none size-5 flex justify-center items-center"
            >
              <ArrowRight className="size-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PrimaryButton
