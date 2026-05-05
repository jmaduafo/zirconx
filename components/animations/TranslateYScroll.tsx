'use client'

import {motion, useScroll, useTransform} from 'framer-motion'
import React, {useRef} from 'react'

function TranslateYScroll({children}: {readonly children: React.ReactNode}) {
  const containerRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const yScroll = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <div ref={containerRef}>
      <motion.div style={{y: yScroll}}>{children}</motion.div>
    </div>
  )
}

export default TranslateYScroll
