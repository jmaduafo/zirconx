import { Settings } from '@/types'
import React from 'react'

type Contacts = {
  data: Settings
}

function Footer({ data }: Readonly<Contacts>) {
  return (
    <div>Footer</div>
  )
}

export default Footer