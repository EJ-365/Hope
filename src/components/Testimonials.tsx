import { useMemo, useState } from 'react'

type Testimonial = {
  name: string
  handle: string
  role: string
  quote: string
  avatarUrl: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marcus Houston',
    handle: '@cutz_houston',
    role: 'Barber',
    quote:
      'Hope changed the game. No more no-shows, and my clients love the professional booking link.',
    avatarUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Aisha Lane',
    handle: '@ace_exams',
    role: 'Tutor',
    quote: 'Getting deposits upfront used to be awkward. Now, Hope handles it for me automatically.',
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Diego Park',
    handle: '@lens_vibes',
    role: 'Photographer',
    quote:
      'The purple theme is fire, and the mobile interface is so fast. I manage everything from my shoots.',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Jade Kim',
    handle: '@nails_by_jade',
    role: 'Nail Tech',
    quote:
      'My clients take appointments more seriously now. Deposits made my calendar predictable overnight.',
    avatarUrl:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Ryan Cole',
    handle: '@shiny_rides',
    role: 'Mobile Detailer',
    quote:
      'I book jobs while I’m on the road. Hope keeps everything clean, fast, and professional for clients.',
    avatarUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Nia Brooks',
    handle: '@paws_palace',
    role: 'Pet Groomer',
    quote:
      'No more back-and-forth messages. Clients pick a time, pay the deposit, and I’m ready when they arrive.',
    avatarUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Maya Rivera',
    handle: '@flow_with_me',
    role: 'Yoga Instructor',
    quote:
      'Classes fill smoother and cancellations are way down. It feels like my studio finally runs itself.',
    avatarUrl:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Ezra Stone',
    handle: '@ink_hope',
    role: 'Tattoo Artist',
    quote:
      'The booking link looks premium and the deposit flow is effortless. My clients show up prepared.',
    avatarUrl:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=80',
  },
]

function VerifiedIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.75l2.26 2.12 3.06-.2 1.03 2.88 2.79 1.17-1.17 2.79 1.17 2.79-2.79 1.17-1.03 2.88-3.06-.2L12 21.25l-2.26-2.12-3.06.2-1.03-2.88-2.79-1.17 1.17-2.79-1.17-2.79L5.65 7.55l1.03-2.88 3.06.2L12 2.75z" />
      <path
        d="M10.2 12.4l1.2 1.2 2.9-3"
        fill="none"
        stroke="#05050b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HopeMark() {
  return (
    <div
      className="grid h-7 w-7 place-items-center rounded-full border border-purple-500/25 bg-purple-500/10 text-[11px] font-extrabold tracking-tight text-purple-200"
      aria-label="Hope review"
      title="Hope review"
    >
      H
    </div>
  )
}

export function Testimonials() {
  const [paused, setPaused] = useState(false)
  const items = useMemo(() => [...TESTIMONIALS, ...TESTIMONIALS], [])

  return (
    <section id="testimonials" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Trusted by Professionals
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            See how Hope is helping solo pros reclaim their time and respect.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <div className="marquee mt-2">
            <div className="marquee-track py-2" style={{ animationPlayState: paused ? 'paused' : 'running' }}>
              <article
                aria-hidden="true"
                className="w-[18.5rem] shrink-0 rounded-3xl border border-transparent bg-transparent"
              />
              {items.map((t, idx) => (
                <article
                  key={`${t.handle}-${idx}`}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  className="group relative w-[18.5rem] shrink-0 overflow-hidden rounded-3xl border border-purple-500/20 bg-slate-900/35 p-6 shadow-xl shadow-black/25 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-purple-400/55 hover:bg-slate-900/50 hover:shadow-purple-500/15"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute -inset-10 bg-linear-to-tr from-purple-500/0 via-purple-500/10 to-purple-500/0 blur-2xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatarUrl}
                      alt={`${t.name} avatar`}
                      className="h-11 w-11 rounded-full border border-white/10 object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-sm font-semibold text-white">{t.name}</div>
                        <span className="text-purple-300" aria-label="Verified">
                          <VerifiedIcon />
                        </span>
                      </div>
                      <div className="truncate text-xs text-slate-400">{t.handle}</div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <HopeMark />
                  </div>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-slate-100">
                  <span className="text-purple-200">“</span>
                  {t.quote}
                  <span className="text-purple-200">”</span>
                </p>

                <div className="relative mt-6 flex items-center justify-between text-xs text-slate-400">
                  <span>{t.role}</span>
                  <span className="text-purple-200/80">Hope review</span>
                </div>
              </article>
              ))}
              <article
                aria-hidden="true"
                className="w-[18.5rem] shrink-0 rounded-3xl border border-transparent bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

