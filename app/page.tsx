import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
import Stats from '@/components/home/Stats'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Services />
      <CTA />
    </>
  )
}
