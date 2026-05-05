import GridDisplay from '@/components/containers/GridDisplay'
import Header4 from '@/components/headings/Header4'
import Paragraph from '@/components/headings/Paragraph'
import React from 'react'

function MeetOwner() {
  return (
    <GridDisplay url="/images/home/services/service.jpeg">
        <div className='h-full flex flex-col'>
            <Header4 text='Meet the Owner'/>
            <div className='flex flex-col gap-3 mt-auto'>
                <Paragraph text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'/>
                <Paragraph text='Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.'/>
            </div>
        </div>
    </GridDisplay>
  )
}

export default MeetOwner