'use client'

import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import {ArrowUpRight} from 'lucide-react'
import React from 'react'
import Header6 from '../headings/Header6'
import { useRouter } from 'next/navigation'

type Event = {
  title: string
  image?: string
  index: number
  events: any[]
  link: string
}

function EventCard({title, image, index, events, link}: Readonly<Event>) {
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
      onClick={() => router.push(`/${link}`)}
      className={cn(
        'relative h-[35vh] overflow-hidden w-full flex flex-col border-l border-b border-b-foreground md:border-b-0',
        index !== events.length - 1 && 'border-l-foreground',
        title.toLowerCase().includes('social') && "sm:col-span-2 md:col-span-1 sm:border-b sm:border-b-foreground md:border-b-0"
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
        <ArrowUpRight strokeWidth={0.5} className="size-[4em]" />
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
