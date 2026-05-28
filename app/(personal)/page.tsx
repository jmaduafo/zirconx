import About from '@/components/pages/home/About'
import ClientMarquee from '@/components/pages/home/ClientMarquee'
import Events from '@/components/pages/home/Events'
import Faq from '@/components/pages/home/Faq'
import Gallery from '@/components/pages/home/Gallery'
import Hero from '@/components/pages/home/Hero'
import ImageTransition1 from '@/components/pages/home/ImageTransition1'
import ImageTransition2 from '@/components/pages/home/ImageTransition2'
import ImageTransition3 from '@/components/pages/home/ImageTransition3'
import Services from '@/components/pages/home/Services'
import Statistics from '@/components/pages/home/Statistics'
import Testimonials from '@/components/pages/home/Testimonials'
import TextTransition from '@/components/pages/home/TextTransition'
import {sanityFetch} from '@/sanity/lib/live'
import {eventsQuery, paragraphsQuery, settingsQuery} from '@/sanity/lib/queries'

export default async function IndexRoute() {
  const {data: settings} = await sanityFetch({query: settingsQuery})
  const {data: events} = await sanityFetch({query: eventsQuery})
  const {data: paragraphs} = await sanityFetch({query: paragraphsQuery})

  return (
    <>
      <Hero data={settings} />
      <About paragraphs={paragraphs}/>
      <Services data={settings} paragraphs={paragraphs}/>
      <Statistics data={settings} />
      <ImageTransition1 data={settings} />
      <TextTransition paragraphs={paragraphs}/>
      <Events eventData={events} settingData={settings} paragraphs={paragraphs}/>
      <Gallery data={settings} paragraphs={paragraphs}/>
      <ClientMarquee data={settings} />
      <ImageTransition2 data={settings} />
      <Testimonials data={settings} />
      <ImageTransition3 data={settings} />
      <Faq data={settings} paragraphs={paragraphs}/>
    </>
  )
}
