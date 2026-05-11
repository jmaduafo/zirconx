'use client'

import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import {ArrowUpRight} from 'lucide-react'
import React from 'react'
import Header6 from '../headings/Header6'

type Event = {
  title: string
  image?: string
  index: number
  events: any[]
}

function EventCard({title, image, index, events}: Readonly<Event>) {
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
      opacity: 0,
    },
    hover: {
      scale: 1.05,
      opacity: 1,
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
      opacity: 1,
    },
    hover: {
      opacity: 0,
    },
  }

  return (
    <motion.button
      variants={containerVariant}
      initial="initial"
      whileHover="hover"
      className={cn(
        'relative h-[35vh] overflow-hidden w-full flex flex-col border-l',
        index !== events.length - 1 && 'border-l-foreground',
      )}
    >
      <div className="absolute inset-0 overflow-hidden h-full w-full">
        <motion.div
          variants={imageVariant}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${image})`}}
        ></motion.div>
      </div>
      <motion.div
        variants={iconVariant}
        transition={{ease: 'easeOut'}}
        className="flex justify-end"
      >
        <ArrowUpRight strokeWidth={0.5} className="size-[4.5em]" />
      </motion.div>

      <div className="p-4 mt-auto ">
        <div className="overflow-hidden h-fit flex justify-start">
          <motion.div variants={titleVariant} transition={{ease: 'easeOut'}}>
            <Header6
              className="capitalize"
              text={title.toLowerCase().includes('wedding') ? title : `${title} events`}
            />
          </motion.div>
        </div>
      </div>
    </motion.button>
  )
}

export default EventCard
