'use client'

import {motion} from 'framer-motion'
import React from 'react'

function ZoomImage({url}: {readonly url: string}) {
  const imageVariant = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.05,
    },
  }
  return (
    <div className="overflow-hidden h-[60vh] lg:h-full w-full">
      <motion.div
        variants={imageVariant}
        initial="initial"
        whileInView="animate"
        transition={{delay: 0.3}}
        viewport={{once: true}}
        className="h-full w-full bg-cover bg-no-repeat bg-center"
        style={{backgroundImage: `url(${url})`}}
      ></motion.div>
    </div>
  )
}

export default ZoomImage
