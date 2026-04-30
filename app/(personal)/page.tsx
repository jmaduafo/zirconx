import About from '@/components/pages/home/About'
import Hero from '@/components/pages/home/Hero'
import Services from '@/components/pages/home/Services'

export default async function IndexRoute() {

  return (
    <>
      <Hero />
      <About/>
      <Services/>
    </>
  )
}
