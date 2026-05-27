import Parallax from '@/components/animations/Parallax'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function ImageTransition3({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section>
      <Parallax
        image={urlForImage(data?.home?.transition3)?.width(1920).height(1200).url() ?? ''}
        scale="scale-110"
      />
    </section>
  )
}

export default ImageTransition3
