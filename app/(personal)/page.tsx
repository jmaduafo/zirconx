// import {HomePage} from '@/components/HomePage'
// import {studioUrl} from '@/sanity/lib/api'
// import {sanityFetch} from '@/sanity/lib/live'
// import {homePageQuery} from '@/sanity/lib/queries'
// import Link from 'next/link'

import About from '@/components/pages/home/About'
import Hero from '@/components/pages/home/Hero'

export default async function IndexRoute() {
  // const {data} = await sanityFetch({query: homePageQuery})

  return (
    <>
      <Hero />
      <About/>
    </>
  )
}
