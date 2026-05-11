import InfoContainer from '@/components/containers/InfoContainer'
import Header3 from '@/components/headings/Header3'
import { SettingsQueryResult } from '@/sanity.types'
import React from 'react'

function Gallery({ data }: { readonly data: SettingsQueryResult}) {

  return (
    <div>
      <InfoContainer>
        <Header3
          className="max-w-2xl"
          text="No matter the occasion, we design experiences that leave a lasting impression."
        />
      </InfoContainer>
      <section>
        <div>

        </div>
      </section>
    </div>
  )
}

export default Gallery
