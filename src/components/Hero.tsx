const heroImage =
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80'

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
            Built for barbers, tutors, trainers & more
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn bookings into{' '}
            <span className="text-purple-300">paid commitments.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            The all-in-one booking and deposit platform for solo hustlers. Manage your business
            with zero stress.
          </p>

          <div id="get-started" className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-purple-500/25 transition-all hover:bg-purple-400 hover:shadow-purple-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Start for Free
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-purple-400/60 bg-transparent px-5 py-3 text-sm font-semibold text-purple-100 transition-colors hover:border-purple-300 hover:bg-purple-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Watch Demo
            </a>
          </div>
        </div>

        <div className="lg:pl-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
            <img
              src={heroImage}
              alt="Professional using a mobile device"
              className="h-72 w-full object-cover sm:h-96 lg:h-[520px]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-slate-950/35 via-transparent to-purple-500/10" />
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Placeholder image from Unsplash (will replace with final brand visuals).
          </p>
        </div>
      </div>
    </section>
  )
}

