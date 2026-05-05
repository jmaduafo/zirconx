import Parallax from '@/components/animations/Parallax'
import React from 'react'

function ImageTransition() {
  return (
    <Parallax scale='scale-150 md:scale-110' image='/images/about/transition.JPG' height='h-auto md:h-[80vh]'/>
  )
}

export default ImageTransition