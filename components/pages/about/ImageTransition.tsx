import Parallax from '@/components/animations/Parallax'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function ImageTransition({data}: {readonly data: SettingsQueryResult}) {
  return (
    <Parallax
      scale="scale-150 md:scale-110"
      image={urlForImage(data?.aboutTransition)?.width(1920).height(1200).url() ?? ''}
      height="h-auto md:h-[80vh]"
    />
  )
}

export default ImageTransition
