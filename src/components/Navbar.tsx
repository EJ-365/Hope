export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-lg font-extrabold tracking-tight text-purple-400 transition-colors hover:text-purple-300"
          aria-label="Hope home"
        >
          Hope
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            Testimonials
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-xl bg-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-purple-500/20 transition-all hover:bg-purple-400 hover:shadow-purple-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
}

