import Image from 'next/image'

// hero
import Hero from '@/components/maincomponents/hero/Hero';
import About from '@/components/maincomponents/about/About';
import Services from '@/components/maincomponents/services/Services'
import Work from '@/components/maincomponents/work/Work'



export default function Home() {
  return (
    <main className="">

      {/* hero */}
      <Hero />
      
      {/* about */}
      <About />

      {/* Services */}
      <Services />

      {/* Work */}
      <Work />
      
    </main>
  )
}
