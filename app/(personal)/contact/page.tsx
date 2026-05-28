import ContactForm from '@/components/pages/contact/ContactForm'
import { sanityFetch } from '@/sanity/lib/live'
import { paragraphsQuery, settingsQuery } from '@/sanity/lib/queries'
import React from 'react'

async function page() {
  const {data} = await sanityFetch({query: settingsQuery})
  const {data: paragraphs} = await sanityFetch({query: paragraphsQuery})
  
  return (
    <ContactForm data={data} paragraphs={paragraphs}/>
  )
}

export default page