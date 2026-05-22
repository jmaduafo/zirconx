// import Parallax from '@/components/animations/Parallax'
import Image from 'next/image'
import React from 'react'

function ImageTransition2() {
  return (
    <section className='w-full'>
      <Image
        src="/images/home/transition.JPG"
        alt="zircon event"
        width={1920}
        height={1080}
        className={'w-full h-full'}
        loading="eager"
      />
    </section>
  )
}

export default ImageTransition2
