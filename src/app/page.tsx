import Image from 'next/image'

// hero
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Services from '@/components/services/Services'



export default function Home() {
  return (
    <main className="">

      {/* hero */}
      <Hero />
      
      {/* about */}
      <About />

      {/* Services */}
      <Services />
      
    </main>
  )
}
