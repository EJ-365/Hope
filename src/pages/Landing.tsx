import { Features } from '../components/Features.tsx'
import { Footer } from '../components/Footer.tsx'
import { Hero } from '../components/Hero.tsx'
import { Navbar } from '../components/Navbar.tsx'
import { Pricing } from '../components/Pricing.tsx'
import { Testimonials } from '../components/Testimonials.tsx'

export function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

