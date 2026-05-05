import ImageTransition from '@/components/pages/about/ImageTransition'
import MeetOwner from '@/components/pages/about/MeetOwner'
import Motive from '@/components/pages/about/Motive'
import Opening from '@/components/pages/about/Opening'
import TeamSummary from '@/components/pages/about/TeamSummary'
import React from 'react'

function page() {
  return (
    <>
      <Opening />
      <MeetOwner/>
      <TeamSummary/>
      <ImageTransition/>
      <Motive/>
    </>
  )
}

export default page
