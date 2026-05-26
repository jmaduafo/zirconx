'use client'

import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import {ArrowUpRight} from 'lucide-react'
import {useRouter} from 'next/navigation'
import React from 'react'
import PopUp from '../animations/PopUp'
import Header6 from '../headings/Header6'

type Event = {
  title: string
  image?: string
  index: number
  // events: any[]
  link: string
  height?: string
  isHome?: boolean
}

function EventCard({title, image, index, link, isHome, height}: Readonly<Event>) {
  const router = useRouter()

  const containerVariant = {
    initial: {
      x: 0,
    },
    hover: {
      x: 0,
    },
  }

  const imageVariant = {
    initial: {
      scale: 1,
      // filter: "grayscale(100%)"
    },
    hover: {
      scale: 1.05,
      // filter: "grayscale(0%)"
    },
  }

  const titleVariant = {
    initial: {
      y: '0%',
    },
    hover: {
      y: '100%',
    },
  }

  const iconVariant = {
    initial: {
      x: 0,
    },
    hover: {
      x: 5,
    },
  }

  return (
    <motion.button
      variants={containerVariant}
      initial="initial"
      whileHover="hover"
      onClick={() => router.push(`/events/${link}`)}
      className={cn(
        'relative overflow-hidden w-full flex flex-col border-foreground',
        // index !== events.length - 1 && 'border-l-foreground',
        // height,
      )}
    >
      <div className="overflow-hidden h-[35vh] md:h-[25vw] w-full">
        <motion.div
          variants={imageVariant}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${image})`}}
          transition={{duration: 0.3}}
        ></motion.div>
      </div>
      {/* <motion.div
        variants={iconVariant}
        transition={{ease: 'easeOut'}}
        className="flex justify-end"
        >
        <ArrowUpRight strokeWidth={0.5} className="size-[4em]" />
      </motion.div> */}

      <div className="py-2">
        <div className="overflow-hidden">
          <motion.div className='flex justify-between items-center'>
            <PopUp>
              <Header6
                className="capitalize !leading-tight"
                text={title}
              />
            </PopUp>
            <motion.div variants={iconVariant} transition={{ duration: .4 }}>
              <ArrowUpRight strokeWidth={0.5} className="size-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.button>
  )
}

export default EventCard
