import Parallax from '@/components/animations/Parallax'
import {SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import React from 'react'

function ImageTransition1({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section>
      <Parallax
        image={urlForImage(data?.transition1)?.width(1920).height(1200).url() ?? ''}
        scale="scale-150"
      />
    </section>
  )
}

export default ImageTransition1
