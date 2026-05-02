import About from '@/components/pages/home/About'
import Events from '@/components/pages/home/Events'
import Hero from '@/components/pages/home/Hero'
import ImageTransition1 from '@/components/pages/home/ImageTransition1'
import Services from '@/components/pages/home/Services'
import Statistics from '@/components/pages/home/Statistics'
import TextTransition from '@/components/pages/home/TextTransition'
import { sanityFetch } from '@/sanity/lib/live'
import { settingsQuery } from '@/sanity/lib/queries'

export default async function IndexRoute() {
  const {data} = await sanityFetch({query: settingsQuery})

  return (
    <>
      <Hero />
      <About/>
      <Services/>
      <Statistics data={data}/>
      <ImageTransition1/>
      <TextTransition/>
      <Events/>
    </>
  )
}
