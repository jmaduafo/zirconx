// import Parallax from '@/components/animations/Parallax'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import Image from 'next/image'
import React from 'react'

function ImageTransition2({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section className="w-full">
      <Image
        src={urlForImage(data?.home?.transition2)?.width(1920).height(1200).url() ?? ''}
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
