'use client'

import {cn} from '@/lib/utils'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from 'next/image'
import React, {useRef} from 'react'

function Parallax({
  height,
  image,
  scale,
}: {
  readonly height?: string
  readonly image: string
  readonly scale: string
}) {
  const containerRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const yScroll = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <div ref={containerRef} className={cn('overflow-hidden w-full h-auto lg:h-screen', height)}>
      <motion.div style={{y: yScroll}} className={cn('w-full object-cover object-center', scale)}>
        <Image
          src={image}
          alt={image}
          width={1920}
          height={1080}
          className="w-full h-full scale-125"
          loading="eager"
        />
      </motion.div>
    </div>
  )
}

export default Parallax
