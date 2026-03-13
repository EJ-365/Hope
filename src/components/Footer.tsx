export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050b]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-3xl font-extrabold tracking-tight text-purple-400 sm:text-4xl">
              Hope
            </div>
            <p className="mt-3 max-w-md text-sm text-slate-300 sm:text-base">
              Respect Your Time. Protect Your Craft.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Premium booking, deposits, and client-ready scheduling for solo professionals who take
              their time seriously.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            <div>
              <div className="text-sm font-semibold tracking-wide text-white">Product</div>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-wide text-white">Company</div>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-wide text-white">Legal</div>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-sm font-semibold tracking-wide text-white">Join the Hustle</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Get product updates, templates, and growth tips for solo pros.
            </p>

            <form className="mt-5 flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@domain.com"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/40"
              />
              <button
                type="submit"
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-purple-500 px-4 text-sm font-semibold text-white shadow-sm shadow-purple-500/20 transition-all hover:bg-purple-400 hover:shadow-purple-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05050b]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-slate-400">© 2026 Hope. Designed for the ambitious.</div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-300 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.76 1.26A4 4 0 0 1 16 11.37Z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>

              <a
                href="#"
                className="text-slate-300 transition-colors hover:text-white"
                aria-label="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4l16 16" />
                  <path d="M20 4 4 20" />
                </svg>
              </a>

              <a
                href="#"
                className="text-slate-300 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3Z" />
                  <path d="M2 9h4v12H2z" />
                  <path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

