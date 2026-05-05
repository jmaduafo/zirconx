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
  isLight,
  type
}: {
  readonly text: string
  readonly className?: string
  readonly href?: string
  readonly type?: "button" | "submit" | "reset"
  readonly isLight?: boolean
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
    initial: {color: isLight ? '#FFFCF6' : '#2A1B04'},
    hover: {color: isLight ? '#2A1B04' : '#FFFCF6'},
  }

  const iconVariant = {
    initial: {
      color: isLight ? '#2A1B04' : '#FFFCF6',
      backgroundColor: isLight ? '#FFFCF6' : '#2A1B04',
    },
    hover: {
      color: isLight ? '#FFFCF6' : '#2A1B04',
      backgroundColor: isLight ? '#2A1B04' : '#FFFCF6',
    },
  }

  const iconMoveVariant = {
    initial: {x: '0%'},
    hover: {x: '100%'},
  }

  return (
    <Link href={href ?? ""} className='w-fit'>
      <motion.div
        variants={containerVariants}
        animate="initial"
        whileHover="hover"
        className={cn(
          'overflow-hidden w-fit relative py-1.5 px-2 font-montrealBook outline-none rounded-full border-[1.5px] flex items-center',
          className,
          isLight ? "border-background" : "border-foreground"
        )}
      >
        <motion.div
          className={cn(
            'rounded-full absolute top-0 left-0 h-full w-full',
            isLight ? 'bg-background' : 'bg-foreground',
          )}
          variants={bgVariant}
        ></motion.div>
        <div className="z-[2] flex items-center">
          <motion.button type={type ?? "button"} variants={textVariant} className={'pl-3 pr-4 capitalize'}>
            {text}
          </motion.button>
          <motion.div
            variants={iconVariant}
            className={cn(
              ' overflow-hidden relative size-5 flex justify-end rounded-full',
              isLight ? 'bg-background text-foreground' : 'bg-foreground text-background',
            )}
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
