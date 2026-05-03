import About from '@/components/pages/home/About'
import Events from '@/components/pages/home/Events'
import Faq from '@/components/pages/home/Faq'
import Gallery from '@/components/pages/home/Gallery'
import Hero from '@/components/pages/home/Hero'
import ImageTransition1 from '@/components/pages/home/ImageTransition1'
import ImageTransition3 from '@/components/pages/home/ImageTransition3'
import Services from '@/components/pages/home/Services'
import Statistics from '@/components/pages/home/Statistics'
import Testimonials from '@/components/pages/home/Testimonials'
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
      <Gallery data={data}/>
      <Testimonials data={data}/>
      <ImageTransition3/>
      <Faq data={data}/>
    </>
  )
}
