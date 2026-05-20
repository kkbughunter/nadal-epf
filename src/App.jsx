import { useState } from 'react'
import logo from './assets/NadalEPF-logo.png'
import heroImage from './assets/image-placeholder3.png'
import skyImage from './assets/image-placeholder2.png'
import sunsetImage from './assets/image-placeholder1.png'

const navItems = ['Pricing', 'About Us', 'Contact Us', 'Blogs', 'FAQ', 'EPFO Locator']

function LeadForm({ light }) {
  const buttonStyle = light ? 'bg-[#031f6a] text-white' : 'bg-white text-[#031f6a]'
  const secondaryStyle = light
    ? 'border border-slate-300 bg-white text-slate-900'
    : 'border border-white/40 bg-white text-[#031f6a]'

  return (
    <div className="w-full max-w-[360px]">
      <p className={`mb-2 text-[11px] ${light ? 'text-slate-500' : 'text-slate-200'}`}>
        Get your report within minutes!
      </p>
      <div className="flex overflow-hidden rounded-md border border-slate-200 bg-white">
        <span className="px-3 py-2 text-xs text-slate-500">+91</span>
        <input
          className="w-full border-0 px-3 py-2 text-xs text-slate-800 outline-none"
          placeholder="Enter your UAN linked mobile"
        />
      </div>
      <p className={`mt-2 text-[10px] ${light ? 'text-slate-400' : 'text-slate-300'}`}>
        Please enter WhatsApp linked mobile number
      </p>
      <button className={`mt-3 w-full rounded-full py-3 text-xs font-bold ${buttonStyle}`}>
        GET STARTED →
      </button>
      <p className={`mt-3 text-center text-[11px] ${light ? 'text-slate-500' : 'text-slate-200'}`}>
        Already have an account?
      </p>
      <button className={`mt-2 w-full rounded-full py-3 text-xs font-semibold ${secondaryStyle}`}>
        LOGIN TO YOUR ACCOUNT
      </button>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="bg-[linear-gradient(160deg,#1f2342,#252a4f)] pb-20 pt-20 text-white">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-emerald-200">
              Trusted PF resolution service
            </p>
            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
              EPF Withdrawal<span className="italic text-emerald-300"> Made Simple.</span>
            </h1>
            <p className="mt-4 max-w-xl text-indigo-100/85">
              We resolve stuck claims, documentation issues, and transfer gaps with clear expert
              guidance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-gradient-to-r from-teal-500 to-teal-700 px-5 py-3 text-sm font-bold text-white">
                Check My EPF Now
              </button>
            </div>
          </div>
          <aside className="rounded-2xl bg-white p-4 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900">Case #264189</strong>
              <span className="text-xs font-bold text-teal-600">Live update</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              "Had 3 failed claims before this. With support, KYC mismatch and service gap were
              fixed and claim settled."
            </p>
            <img
              src={heroImage}
              alt="Customer story visual"
              className="mt-3 h-44 w-full rounded-xl object-cover"
            />
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/80 py-20">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-10 lg:grid-cols-[1fr_390px] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-slate-900 md:text-5xl">
              Your PF might be stuck.<span className="italic text-emerald-600"> Know why.</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Most claims fail due to small profile issues. We identify blockers, fix data
              mismatches, and guide you to successful settlement.
            </p>
            <button className="mt-6 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 px-5 py-3 text-sm font-bold text-white">
              Check My EPF Now
            </button>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border-[12px] border-slate-800 shadow-xl">
            <img src={skyImage} alt="EPF app style dashboard" className="h-[500px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#1f2342] py-14 text-indigo-100">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Nadal EPF logo" className="w-[118px]" />
            <p className="mt-3 text-sm text-indigo-200/80">
              Expert-led support for EPF withdrawal, correction, and transfer success.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Product</h4>
          </div>
          <div>
            <h4 className="font-semibold text-white">Company</h4>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
          </div>
        </div>
      </section>
    </>
  )
}

function PFReportPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 py-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs text-slate-500">✨ India's First AI Agent for tracking Provident Fund</p>
            <h1 className="mt-2 text-5xl font-bold leading-[1.1]">
              Check if your <span className="text-blue-600">PF balance is stuck?</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-slate-700">
              1.3 Crore Indians could not withdraw their PF money in 2024
            </p>
            <div className="mt-6">
              <LeadForm light />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-[32px] border-4 border-slate-700 bg-white p-2 shadow-lg">
              <img
                src={skyImage}
                alt="PF tracking app screen"
                className="h-[360px] w-[180px] rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dbeaf4] py-12">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-bold leading-tight">Get your own Provident Fund check-up report</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>✅ Available and blocked amount for withdrawal</li>
              <li>✅ Amount available to withdraw within 30 days</li>
              <li>✅ Potential rejection reasons with free expert consultation</li>
            </ul>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <LeadForm light />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-5xl font-bold">Who should check their PF?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {['EPF MEMBERSHIP', 'FREQUENT JOB SWITCHES', 'INACTIVE EPFO ACCOUNT', 'INTERNATIONAL WORKER'].map(
              (x) => (
                <article key={x} className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-bold tracking-wide text-blue-700">{x}</p>
                  <p className="mt-3 text-sm text-slate-600">
                    Profile conditions in this category may increase withdrawal risk. Check now.
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2342] py-14 text-indigo-100">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Nadal EPF logo" className="w-[118px]" />
            <p className="mt-3 text-sm text-indigo-200/80">
              One stop destination for all your financial queries and troubles.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Pages</h4>
          </div>
          <div>
            <h4 className="font-semibold text-white">Useful Links</h4>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="bg-[#f4f6f8] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1f2342]">
        <div className="mx-auto flex h-12 w-[96vw] max-w-[1120px] items-center justify-between">
          <img src={logo} alt="Finright logo" className="h-6 w-auto" />
          <nav className="hidden items-center gap-4 text-[11px] text-white lg:flex">
            <button
              onClick={() => setPage('home')}
              className={`hover:text-indigo-200 ${page === 'home' ? 'text-cyan-300' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => setPage('pf-report')}
              className={`hover:text-indigo-200 ${page === 'pf-report' ? 'text-cyan-300' : ''}`}
            >
              PF Report
            </button>
            {navItems.map((item) => (
              <a key={item} href="#0" className="hover:text-indigo-200">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-12">{page === 'pf-report' ? <PFReportPage /> : <HomePage />}</main>
    </div>
  )
}

export default App
