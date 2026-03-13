import { useId, useMemo, useState } from 'react'

type Billing = 'monthly' | 'annual'

type Plan = {
  name: string
  badge?: string
  highlight?: boolean
  monthlyUsd: number
  annualUsd?: number
  blurb: string
  features: string[]
}

function formatUsdLabel(amount: number) {
  if (amount === 0) return 'USD 0'
  return `USD ${amount.toFixed(2)}`
}

function CheckIcon() {
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
      <path d="m20 6-11 11-5-5" />
    </svg>
  )
}

function BillingToggle({
  value,
  onChange,
}: {
  value: Billing
  onChange: (next: Billing) => void
}) {
  const id = useId()
  const checked = value === 'annual'

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-sm font-medium text-slate-200">Monthly</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        onClick={() => onChange(checked ? 'monthly' : 'annual')}
        className="relative inline-flex h-8 w-14 items-center rounded-full border border-white/10 bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <span
          className={[
            'inline-block h-6 w-6 rounded-full bg-purple-400 shadow-sm shadow-purple-500/25 transition-transform',
            checked ? 'translate-x-7' : 'translate-x-1',
          ].join(' ')}
        />
      </button>
      <span id={`${id}-label`} className="text-sm font-medium text-slate-200">
        Annual <span className="text-purple-200">(Save 20%)</span>
      </span>
    </div>
  )
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    monthlyUsd: 0,
    blurb: 'Start simple and stay organized.',
    features: ['5 bookings per month', 'Basic calendar', 'Standard support'],
  },
  {
    name: 'Growth',
    monthlyUsd: 25.99,
    annualUsd: 259.9,
    blurb: 'For consistent momentum and a polished brand.',
    features: ['30 bookings per month', 'Custom purple themes', 'Priority support'],
  },
  {
    name: 'Pro',
    badge: 'Most Popular',
    highlight: true,
    monthlyUsd: 49.99,
    annualUsd: 499.9,
    blurb: 'Maximum confidence for serious operators.',
    features: [
      'Unlimited bookings',
      'Securely collect client deposits via Stripe',
      'Dedicated account manager',
    ],
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')

  const displayPlans = useMemo(() => {
    return PLANS.map((p) => {
      const isAnnual = billing === 'annual'
      const price = isAnnual && p.annualUsd != null ? p.annualUsd : p.monthlyUsd
      const isFree = p.monthlyUsd === 0
      const unit = isFree ? '' : isAnnual ? '/yr' : '/mo'
      const note = isFree
        ? 'Billed monthly for flexibility.'
        : isAnnual
          ? 'Billed annually to save 20%.'
          : 'Billed monthly for flexibility.'
      const features =
        !isFree && isAnnual ? [...p.features, 'Includes 2 months free'] : [...p.features]
      return { ...p, price, unit, note, isAnnual, isFree, features }
    })
  }, [billing])

  return (
    <section id="pricing" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple Pricing for Every Stage
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Choose the plan that fits your ambition. Save 20% with annual billing.
          </p>

          <div className="mt-8">
            <BillingToggle value={billing} onChange={setBilling} />
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {displayPlans.map((p) => {
            const cardBase =
              'relative rounded-3xl border bg-slate-900/35 p-6 shadow-xl shadow-black/25 transition-all duration-300 ease-out hover:-translate-y-1'
            const cardBorder = p.highlight
              ? 'border-purple-400/50 shadow-purple-500/10 hover:border-purple-300/70 hover:shadow-purple-500/20'
              : 'border-purple-500/20 hover:border-purple-400/45'
            const cardBg = p.highlight ? 'bg-slate-900/45' : 'bg-slate-900/35 hover:bg-slate-900/50'

            return (
              <div key={p.name} className={[cardBase, cardBg, cardBorder].join(' ')}>
                {p.badge ? (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center rounded-full border border-purple-400/40 bg-purple-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-purple-200">
                      {p.badge}
                    </span>
                  </div>
                ) : null}

                {p.highlight ? (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-purple-500/20"
                    aria-hidden="true"
                  />
                ) : null}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-200">{p.blurb}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    {formatUsdLabel(p.price)}
                  </span>
                  {p.unit ? (
                    <span className="text-sm font-semibold text-slate-200">{p.unit}</span>
                  ) : null}
                </div>
                <p
                  key={p.isFree ? 'static' : billing}
                  className={['mt-2 text-xs text-slate-400', p.isFree ? '' : 'fade-in'].join(' ')}
                >
                  {p.note}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-0.5 text-purple-200">
                        <CheckIcon />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#get-started"
                    className={[
                      'inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                      p.highlight
                        ? 'bg-purple-500 text-white shadow-sm shadow-purple-500/25 hover:bg-purple-400 hover:shadow-purple-400/30'
                        : 'border border-purple-400/60 bg-transparent text-purple-100 hover:border-purple-300 hover:bg-purple-400/10',
                    ].join(' ')}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

