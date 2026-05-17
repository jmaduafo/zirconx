import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import SmallParagraph from '@/components/headings/SmallParagraph'
import React from 'react'

function EventInfo() {
  return (
    <InfoContainer>
        <div className='w-[90%] mx-auto'>
            <Header2 className='italic'>
              <span>Our Events</span>
            </Header2>
            <div className='flex justify-end items-start flex-wrap gap-x-6 gap-y-3 mt-5'>
                <SmallParagraph className="max-w-xs" text="At The Zircon Xperience, we create thoughtfully curated events designed to leave lasting impressions. From intimate celebrations to large-scale experiences, we blend creativity, elegance, and seamless execution to bring every vision to life."/>
                <SmallParagraph className="max-w-xs" text=" Each event is tailored with intention, ensuring every detail feels like you or your brand, refined, and unforgettable."/>
            </div>
        </div>
    </InfoContainer>
  )
}

export default EventInfo