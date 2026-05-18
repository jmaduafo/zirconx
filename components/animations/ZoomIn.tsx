'use client'

import {cn} from '@/lib/utils'
import {motion, useScroll, useTransform} from 'framer-motion'
import React, {useRef} from 'react'

function ZoomIn({children}: {readonly children: React.ReactNode}) {
  const containerRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scaleScroll = useTransform(scrollYProgress, [0, 1], ['30%', '-5%'])

  return (
    <motion.div ref={containerRef} style={{y: scaleScroll}} className={cn('overflow-hidden')}>
      {children}
      {/* <motion.div style={{scale: scaleScroll}}>{children}</motion.div> */}
    </motion.div>
  )
}

export default ZoomIn
