import type React from 'react'

type Feature = {
  title: string
  description: string
  icon: React.ReactNode
}

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-purple-500/20 bg-slate-950/60 text-purple-200 transition-colors duration-300 group-hover:border-purple-400/40 group-hover:text-purple-100">
      {children}
    </div>
  )
}

function CalendarCheckIcon() {
  return (
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
      <path d="M8 3v2M16 3v2" />
      <path d="M4 8h16" />
      <path d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="m9 15 2 2 4-5" />
    </svg>
  )
}

function HomeIcon() {
  return (
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
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
      <path d="M9.5 22v-7h5v7" />
    </svg>
  )
}

function TrendUpIcon() {
  return (
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
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  )
}

const FEATURES: Feature[] = [
  {
    title: 'Seamless Certainty',
    description: 'Eliminate the guesswork. Know exactly when you’re working and who is coming.',
    icon: (
      <IconWrap>
        <CalendarCheckIcon />
      </IconWrap>
    ),
  },
  {
    title: 'Your Digital Home',
    description: 'A professional, live schedule that reflects the quality of your work.',
    icon: (
      <IconWrap>
        <HomeIcon />
      </IconWrap>
    ),
  },
  {
    title: 'Growth Without the Stress',
    description: 'Scale your passion with a system that works as hard as you do.',
    icon: (
      <IconWrap>
        <TrendUpIcon />
      </IconWrap>
    ),
  },
]

export function Features() {
  return (
    <section id="features" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="border-t border-white/10 pt-12">
          <p className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-purple-200">
            FEATURES
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for Your Ambition
          </h2>

          <p className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">
            Respect Your Time. Protect Your Craft.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            The platform built for those who turn passion into profession. Manage your schedule and
            secure your future with Hope.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-purple-500/20 bg-slate-900/35 p-6 shadow-xl shadow-black/25 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/45 hover:bg-slate-900/50"
            >
              <div className="flex items-start gap-4">
                {f.icon}
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

