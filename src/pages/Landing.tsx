import { Features } from '../components/Features.tsx'
import { Hero } from '../components/Hero.tsx'
import { Navbar } from '../components/Navbar.tsx'

export function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="pricing" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Pricing</h2>
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
        >
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Testimonials</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

