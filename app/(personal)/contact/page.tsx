import ContactForm from '@/components/pages/contact/ContactForm'
import { sanityFetch } from '@/sanity/lib/live'
import { settingsQuery } from '@/sanity/lib/queries'
import React from 'react'

async function page() {
  const {data} = await sanityFetch({query: settingsQuery})
  
  return (
    <ContactForm data={data}/>
  )
}

export default page