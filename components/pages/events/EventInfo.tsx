import InfoContainer from '@/components/containers/InfoContainer'
import Header2 from '@/components/headings/Header2'
import SmallParagraph from '@/components/headings/SmallParagraph'
import React from 'react'

function EventInfo() {
  return (
    <InfoContainer>
        <div className='w-[90%] mx-auto'>
            <Header2 className='italic' text='Our Events'/>
            <div className='flex justify-end items-start flex-wrap gap-x-6 gap-y-3 mt-5'>
                <SmallParagraph className="max-w-xs" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci nulla, tincidunt non quam eu, suscipit facilisis dolor. Vivamus egestas est orci, nec mollis velit lacinia at. Cras volutpat, urna sed elementum laoreet, turpis mauris faucibus felis."/>
                <SmallParagraph className="max-w-xs" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci nulla, tincidunt non quam eu, suscipit facilisis dolor. Vivamus egestas est orci, nec mollis velit lacinia at. "/>
            </div>
        </div>
    </InfoContainer>
  )
}

export default EventInfo