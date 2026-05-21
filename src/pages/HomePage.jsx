import { useEffect, useState } from 'react'
import heroImage from '../assets/image-placeholder3.png'
import skyImage from '../assets/image-placeholder2.png'
import sunsetImage from '../assets/image-placeholder1.png'
import LogoMarquee from '../components/LogoMarquee'
import { FaUserShield, FaBolt, FaWallet } from 'react-icons/fa'

import comp1 from '../assets/company-logos/comp1.png'
import comp2 from '../assets/company-logos/comp2.png'
import comp3 from '../assets/company-logos/comp3.png'
import comp4 from '../assets/company-logos/comp4.png'
import comp5 from '../assets/company-logos/comp5.png'
import comp6 from '../assets/company-logos/comp6.png'
import comp7 from '../assets/company-logos/comp7.png'
import comp8 from '../assets/company-logos/comp8.png'
import comp9 from '../assets/company-logos/comp9.png'
import comp10 from '../assets/company-logos/comp10.png'
import comp11 from '../assets/company-logos/comp11.png'
import comp12 from '../assets/company-logos/comp12.png'
import comp13 from '../assets/company-logos/comp13.png'
import comp14 from '../assets/company-logos/comp14.png'

const partners = [
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
  comp8,
  comp9,
  comp10,
  comp11,
  comp12,
  comp13,
  comp14,
]

const statCards = [
  { value: 5588, suffix: '', label: 'Cases solved' },
  { value: 160, suffix: '+', label: 'Experts on board' },
  { value: 2874, suffix: '', label: 'Users assisted' },
  { value: 16, suffix: ' L', label: 'Amount recovered' },
]
const issueCards = [
  'Rejected Withdrawal',
  'Delays due to employer',
  'KYC mismatch',
  'Closed old account issues',
  'Incorrect service history',
  'Exit not marked by company',
]
import {
  FaFileInvoiceDollar,
  FaExchangeAlt,
  FaUserCheck,
  FaGlobe,
  FaCheckCircle,
} from 'react-icons/fa'

const solutionCards = [
  {
    title: 'PF Withdrawal Assistance',
    icon: <FaFileInvoiceDollar className="text-2xl text-[#09637E]" />,
    desc:
      'From filing to settlement, we handle your entire PF withdrawal — rejections included.',
    points: [
      'Full & partial withdrawal',
      'Rejected claim resubmission',
      'Maximum PF withdrawal',
    ],
  },
  {
    title: 'PF Transfer & Merger',
    icon: <FaExchangeAlt className="text-2xl text-[#09637E]" />,
    desc:
      'We trace, merge, and consolidate all your PF accounts across employers. One account. Zero hassle.',
    points: [
      'Multi-UAN consolidation',
      'Old account tracing',
      'Inter-employer transfers',
    ],
  },
  {
    title: 'KYC & Record Correction',
    icon: <FaUserCheck className="text-2xl text-[#09637E]" />,
    desc:
      'Resolve KYC issues, joint declarations, and e-nominations. Name, DOB, Aadhaar — we fix it all.',
    points: [
      'Name & DOB correction',
      'Aadhaar-UAN linking',
      'EPS record correction',
    ],
  },
  {
    title: 'NRI PF Withdrawal',
    icon: <FaGlobe className="text-2xl text-[#09637E]" />,
    desc:
      "Living abroad and can't visit India? We handle your entire PF withdrawal remotely — no India visit required.",
    points: [
      'Fully remote process',
      'International bank transfer',
      'Tax guidance (TDS)',
    ],
  },
]

function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let rafId = 0
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor(target * progress))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration])

  return value
}

function StatNumber({ value, suffix }) {
  const animated = useCountUp(value)
  return (
    <h3 className="text-2xl font-semibold">
      {animated.toLocaleString()}
      {suffix}
    </h3>
  )
}

function HomePage({ onConnectClick }) {
  return (
    <>
      <section className="flex min-h-[calc(90vh-3rem)] items-center bg-[linear-gradient(160deg,#09637E,#088395)] py-14 text-white">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-xs text-[#EBF4F6]">Intelligent PF Issue Resolution & Pan India Support</p>
            <h1 className="mt-2 font-serif text-5xl leading-tight md:text-6xl">
              Withdraw Your EPF
              <span className="block italic text-[#EBF4F6]">Money Easily.</span>
            </h1>
            <div className="mt-6 flex max-w-lg items-center gap-6 text-[#EBF4F6]">
              <div className="flex items-center gap-2">
                <FaUserShield className="text-sm text-white" />
                <span className="text-[11px] font-medium">
                  Lead by Trusted Experts
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaBolt className="text-sm text-white" />
                <span className="text-[11px] font-medium">
                  Quick TAT
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaWallet className="text-sm text-white" />
                <span className="text-[11px] font-medium">
                  Maximum PF Gains
                </span>
              </div>
            </div>
            <button onClick={onConnectClick} className="mt-6 rounded-md bg-white px-5 py-2 text-xs font-bold text-[#09637E] hover:bg-[#EBF4F6] cursor-pointer">Consult now</button>
            <p className="mt-2 text-xs text-[#EBF4F6]">Rs4,00,000+ Claim Resolved</p>
          </div>
          <aside className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-3 backdrop-blur-md shadow-2xl shadow-black/30">
            {/* Mobile */}
            <div className="mx-auto h-[580px] w-full max-w-[360px] rounded-[42px] border-[10px] border-slate-900 bg-white shadow-2xl">
              {/* Mobile Notch */}
              <div className="mx-auto mt-2 h-5 w-28 rounded-full bg-slate-900" />
              {/* inner content wrapper */}
              <div className="flex h-full flex-col px-5 pb-6 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#088395]">
                  Consult Now
                </p>

                <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">
                  Detects issues such as:
                </h3>
                {/* scrolling area */}
                <div className="relative mt-4 mb-2 flex-1 overflow-hidden">
                  <div className="animate-scroll-y space-y-3">
                    {[
                      'Withdrawal Eligibility',
                      'Claim Rejected without Error',
                      'Stuck since 6+ months?',
                      'Claim Status not moving',
                      'UAN Discrepancies',
                      'Transfer Failures',
                      'Incorrect Contributions',
                      'KYC Mismatches',
                      'Inactive Accounts',
                      'Service Overlaps',
                      'Employer Error',
                    ]
                      .concat([
                        'Withdrawal Eligibility',
                        'Claim Rejected without Error',
                        'Stuck since 6+ months?',
                        'Claim Status not moving',
                        'UAN Discrepancies',
                        'Transfer Failures',
                      ])
                      .map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 shadow-sm"
                        >
                          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#EBF4F6]">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#088395]" />
                          </div>

                          <p className="text-sm font-medium text-slate-700">
                            {item}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto w-[96vw] ">
          <p className="text-center text-[10px] tracking-[0.16em] text-slate-500">PREFERRED BY PROFESSIONALS WORKING AT</p>
          <div className="mt-4">
            <LogoMarquee />
          </div>
          <div className="mx-auto w-[96vw] max-w-[1120px]">

            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {statCards.map((stat) => (
                <article key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <StatNumber value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
          <div>
            <h2 className="font-serif text-5xl leading-tight">
              Your PF might be stuck.<span className="block italic text-[#088395]">Know why.</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              We identify hidden blockers and resolve KYC, service history, and transfer mapping issues before filing claims.
            </p>
            <div className="mt-4 flex gap-8 text-sm">
              <div>
                <strong className="block text-xl">Rs54,000+</strong>
                <span className="text-slate-500">Recovered</span>
              </div>
              <div>
                <strong className="block text-xl">3 min</strong>
                <span className="text-slate-500">Quick check</span>
              </div>
              <div>
                <strong className="block text-xl">Free</strong>
                <span className="text-slate-500">Initial support</span>
              </div>
            </div>
            <button onClick={onConnectClick} className="rounded-md bg-[#09637E] px-5 py-2 text-xs font-semibold text-white hover:bg-[#088395] cursor-pointer">Check My PF Now -&gt;</button>
          </div>
          <div className="rounded-[24px] border-8 border-slate-700 bg-white p-2">
            <img src={skyImage} alt="PF screen" className="h-[360px] w-full rounded-[16px] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center font-serif text-5xl">Is this for you?</h2>
          <p className="mt-2 text-center text-sm text-slate-500">We can help if your profile has these signs.</p>
          <div className="mx-auto mt-6 grid max-w-[860px] gap-3 md:grid-cols-3">
            {issueCards.map((x) => (
              <div key={x} className="rounded-md border border-[#7AB2B2] bg-[#EBF4F6] px-4 py-3 text-xs text-[#09637E]">
                {x}
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button onClick={onConnectClick} className="rounded-md bg-[#09637E] px-5 py-2 text-xs font-semibold text-white hover:bg-[#088395] cursor-pointer">Consult now</button>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <div className="text-center">
            <h2 className="font-serif text-4xl text-[#09637E] md:text-5xl">
              Every PF Problem One Expert Solution.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              End-to-end EPF support for withdrawals, transfers,
              KYC corrections, rejected claims, and NRI settlements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#7AB2B2] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF4F6]">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold leading-snug text-[#09637E]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 rounded-lg bg-[#F8FBFB] px-3 py-2"
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-[#088395]" />

                      <span className="text-xs font-medium leading-5 text-slate-700">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center font-serif text-5xl">From Stuck to Settled in 5 Simple Steps</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {['Share details', 'Expert checks', 'Action plan', 'Document fixes', 'Settlement'].map((x, i) => (
              <article key={x} className="rounded-lg border border-slate-200 bg-white p-3 text-center">
                <div className="mx-auto mb-2 grid h-6 w-6 place-items-center rounded-full bg-[#EBF4F6] text-[10px] font-bold text-[#09637E]">{i + 1}</div>
                <h3 className="text-xs font-semibold">{x}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center font-serif text-5xl text-[#09637E]">Why choose us?</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {['End-to-end case handling', 'Transparent fixed pricing', 'Compliance team expertise'].map((x) => (
              <article key={x} className="rounded-lg border border-[#7AB2B2] bg-[#EBF4F6] p-4">
                <h3 className="text-sm font-semibold text-[#09637E]">{x}</h3>
                <p className="mt-2 text-xs text-[#088395]">Built for users facing complex PF delays and repeated claim rejection.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center font-serif text-5xl">9,000+ People Trust Nadal EPF</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <article key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <strong className="text-sm">User {i + 1}</strong>
                  <span className="text-xs text-amber-500">*****</span>
                </div>
                <p className="mt-2 text-xs text-slate-600">Claim support was very clear and professional. Got faster resolution than expected.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs text-[#088395] font-semibold">REAL CASE STORY</p>
            <h2 className="mt-2 font-serif text-5xl text-[#09637E]">
              From 3 Rejections to <span className="italic text-[#088395]">Full Settlement</span>
            </h2>
            <p className="mt-3 text-sm text-slate-600">Case diagnosed, documents corrected, and final payout received with guided escalation support.</p>
          </div>
          <img src={sunsetImage} alt="Case story" className="h-64 w-full rounded-xl object-cover" />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center font-serif text-5xl text-[#09637E]">Nadal EPF In The News</h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-7">
            {partners.map((logo, idx) => (
              <div
                key={idx}
                className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white  shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={logo}
                  alt={`Company ${idx + 1}`}
                  className="max-h-10 w-auto object-contain opacity-80 transition hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}

export default HomePage
