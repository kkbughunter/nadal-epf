import mapImage from '../assets/image-placeholder3.png'
import LogoMarquee from '../components/LogoMarquee'

const compareRows = [
  '1:1 PF Audit',
  'Transparent Upfront Pricing',
  'Guarantee of Settlement',
  'No Hidden/Mid-way Charges',
  'Provided written Plan of Action',
  'EPFO Follow-ups Included',
  'Employer Liaison Included',
  'Dedicated Point of contact',
  'Paperwork/Form handling',
  'Pan-India Coverage',
]

const steps = [
  'Free PF assessment & report',
  'Transparent pricing & action plan',
  'Dedicated expert assigned',
  'Execution, follow-ups & settlement',
  'Final confirmation & payment completion',
]

const pricingFaqs = [
  'How much does nadalEPF charge as a PF consultant for withdrawal and transfer?',
  'In how many days can nadalEPF resolve my PF withdrawal or transfer issue?',
  'What does nadalEPF 100% PF claim guarantee imply?',
  'Will nadalEPF handle my PF work fully online, or do I have to visit the EPFO office?',
  'Do I need to visit a branch to pay any fee or only in Mumbai?',
  'Can I mitigate PF withdrawal delays if I do not know my UAN or PF account details?',
  'What if my PF case gets delayed after I start with nadalEPF?',
  'Does nadalEPF ever ask for extra payment to speed up my PF claim with EPFO?',
]

function PricingPage() {
  return (
    <>
      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              PF issues solved.
              <span className="block text-[#088395]">Or you get your money back.</span>
            </h1>
            <p className="mt-4 text-slate-600">Get your PF withdrawn smoothly, and enjoy complete peace of mind.</p>
            <p className="mt-5 inline-block rounded-full bg-[#7AB2B2]/25 px-3 py-1 text-xs text-[#09637E]">20+ consultations booked in the last hour</p>
          </div>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
            <h3 className="text-center text-xl font-semibold">Our Commitment to You</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li><span className="font-semibold text-[#088395]">✓</span> Claim settlement guarantee or 100% refund</li>
              <li><span className="font-semibold text-[#088395]">✓</span> Full transparent pricing shared upfront</li>
              <li><span className="font-semibold text-[#088395]">✓</span> No extra fees charged in the middle of your case</li>
              <li><span className="font-semibold text-[#088395]">✓</span> Dedicated point of contact assigned to your case</li>
              <li><span className="font-semibold text-[#088395]">✓</span> Full process handled end-to-end by nadalEPF</li>
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-4 border-t pt-4 text-center">
              <div>
                <p className="text-3xl font-bold text-slate-900">15,000+</p>
                <p className="text-xs text-slate-500">customers serviced</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">300+ Cr</p>
                <p className="text-xs text-slate-500">successfully settled</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <LogoMarquee />

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center text-4xl font-bold">What You&apos;re Really Paying For</h2>
          <p className="mt-2 text-center text-slate-500">Transparent, comprehensive PF resolution with guarantees at every step.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
              <div>Basis</div><div className="text-center text-[#088395]">nadalEPF</div><div className="text-center">Other PF Consultants</div>
            </div>
            {compareRows.map((row) => (
              <div key={row} className="grid grid-cols-[2fr_1fr_1fr] border-t border-slate-100 px-4 py-3 text-sm">
                <div>{row}</div>
                <div className="text-center text-[#088395]">✓</div>
                <div className="text-center text-rose-500">✕</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center text-4xl font-bold">How the Process Works</h2>
          <p className="mt-2 text-center text-slate-500">From assessment to settlement - a clear path to resolving your PF issues.</p>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {steps.map((step, idx) => (
              <article key={step} className="rounded-lg border border-slate-200 bg-white p-3 text-center">
                <div className="mx-auto mb-2 grid h-7 w-7 place-items-center rounded-full bg-[#EBF4F6] text-xs font-bold text-[#09637E]">{idx + 1}</div>
                <p className="text-xs font-semibold">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#088395]">PAN-INDIA PF COVERAGE</p>
            <h2 className="mt-2 text-4xl font-bold">PF solutions for every corner of India.</h2>
            <p className="mt-3 text-slate-600">From metros to critical EPFO branches, nadalEPF supports end-to-end claim resolution across locations.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
            <img src={mapImage} alt="All India Network coverage map" className="h-[320px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center text-4xl font-bold">Trusted by Professionals Across India</h2>
          <p className="mt-2 text-center text-slate-500">Employees from 3,500+ companies have trusted us.</p>
          <div className="mt-6">
            <LogoMarquee />
          </div>
          <article className="mx-auto mt-8 max-w-[760px] rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-slate-700">"My PF was stuck for 2 years due to KYC mismatch. nadalEPF resolved it in just 45 days!"</p>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span>Tanayjira</span>
              <span className="font-semibold text-[#088395]">Recovered Rs 3,59,000</span>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px] rounded-xl border border-[#7AB2B2] bg-white p-8 text-center">
          <h2 className="text-3xl font-bold">Want to know the exact fee?</h2>
          <p className="mt-2 text-slate-600">Book a free consultation call and get a detailed PF audit powered by expert AI.</p>
          <button className="mt-5 rounded bg-[#088395] px-4 py-2 text-sm font-semibold text-white hover:bg-[#09637E]">Book Free Consultation</button>
          <p className="mt-2 text-xs text-[#088395]">Expert slots available today</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-center text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-center text-slate-500">Everything you need to know about our pricing</p>
          <div className="mx-auto mt-6 max-w-[920px] space-y-2">
            {pricingFaqs.map((q) => (
              <details key={q} className="rounded border border-slate-200 bg-white px-4 py-3">
                <summary className="cursor-pointer text-sm font-medium text-slate-800">{q}</summary>
                <p className="mt-2 text-sm text-slate-600">Our team shares exact pricing after your PF case assessment.</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingPage
