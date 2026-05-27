import SmallParagraph from '@/components/headings/SmallParagraph'
import Decor from '@/public/images/decor.png'
import { ParagraphsQueryResult } from '@/sanity.types'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function TextMarquee({ data }: { readonly data: ParagraphsQueryResult}) {
  return (
    <Marquee className="border-t border-b border-t-foreground border-b-foreground">
      {data?.events?.marquee?.map((text) => {
        return (
          <div key={text} className="h-full mx-[6vw] flex items-center gap-5">
            <div className='h-full'>
              <SmallParagraph className="uppercase" text={text} />
            </div>
            <div className="ml-[6vw] w-7 object-cover object-bottom ">
              <Image src={Decor} alt="floral design" className="w-full h-full" />
            </div>
          </div>
        )
      })}
    </Marquee>
  )
}

export default TextMarquee
