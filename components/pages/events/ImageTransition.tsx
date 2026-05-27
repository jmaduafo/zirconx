import Parallax from '@/components/animations/Parallax'
import {SettingsQueryResult} from '@/sanity.types'
import { urlForImage } from '@/sanity/lib/utils'
import React from 'react'

function ImageTransition({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section>
      <Parallax
        scale="scale-110"
        image={urlForImage(data?.events?.opening)?.width(1920).height(1200).url() ?? ''}
        height="lg:h-[50vh]"
      />
    </section>
  )
}

export default ImageTransition
