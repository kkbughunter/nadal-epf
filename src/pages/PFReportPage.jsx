import skyImage from '../assets/image-placeholder2.png'
import LeadForm from '../components/LeadForm'
import LogoMarquee from '../components/LogoMarquee'

const reportPoints = [
  'Available and blocked amount for withdrawal',
  'Amount available to withdraw within 30 days',
  'Potential rejection reasons with free expert consultation',
]

const checkCards = [
  {
    tag: 'EPS MEMBERSHIP',
    title: 'Only Rs1800/month deducted from salary?',
    text: 'If your basic salary exceeds Rs15,000/month but EPF deduction is around Rs1800, you may be incorrectly mapped as EPS member and lose withdrawal eligibility.',
  },
  {
    tag: 'FREQUENT JOB SWITCHES',
    title: 'Switched more than 3 jobs?',
    text: 'Multiple switches can leave UANs unmerged and transfer process incomplete, increasing claim rejection risk.',
  },
  {
    tag: 'INACTIVE EPFO ACCOUNT',
    title: "Haven't logged in EPF portal for a long time?",
    text: 'Inactive accounts often have KYC mismatch, missing credits, and unresolved employer contribution records.',
  },
  {
    tag: 'INTERNATIONAL WORKER',
    title: 'Planning to move overseas? or an NRI?',
    text: 'NRIs and overseas employees require additional compliance for EPF withdrawal and transfer filing.',
  },
]

const faqs = [
  'Why is it important to check my PF regularly?',
  'Who should check their PF?',
  'Is there any charge for generating the report?',
  'What should I do if there are issues in my PF account?',
  'What do I need to check my PF account?',
  'Is it safe to log in using my UAN and password?',
  'Why should I believe this report?',
  "I don't want report, I just want to withdraw my PF amount!",
  'Why should I worry about issues in my PF account now?',
]

function PFReportPage({ onBookConsultation }) {
  return (
    <>
      <section className="bg-white py-12">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs text-slate-500">India's First AI Agent for tracking Provident Fund</p>
            <h1 className="mt-2 text-5xl font-bold leading-[1.1] md:text-6xl">
              Check if your <span className="text-blue-600">PF balance is stuck?</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-slate-700">1.3 Crore Indians could not withdraw their PF money in 2024</p>
            <div className="mt-6">
              <LeadForm light onBookConsultation={onBookConsultation} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-[32px] border-4 border-slate-700 bg-white p-2 shadow-lg">
              <img src={skyImage} alt="PF tracking app screen" className="h-[370px] w-[185px] rounded-[24px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="bg-[#dcebf5] py-12">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-bold leading-tight">Get your own Provident Fund check-up report</h2>
            <p className="mt-4 text-sm font-semibold text-slate-700">What will you get in the report:</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {reportPoints.map((point) => (
                <li key={point}>✅ {point}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <LeadForm light onBookConsultation={onBookConsultation} />
          </div>
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-5xl font-bold">Who should check their PF?</h2>
          <p className="mt-3 text-slate-600">Your PF amount may not be withdrawable if your profile matches these conditions</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {checkCards.map((card) => (
              <article key={card.title} className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[10px] font-bold tracking-wide text-blue-700">{card.tag}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <LeadForm light onBookConsultation={onBookConsultation} />
          </div>
        </div>
      </section>

      <section className="bg-purple-900 py-12 text-white">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-5 lg:grid-cols-3">
          <article className="rounded-md bg-white p-5 text-purple-900">
            <h3 className="text-3xl font-bold">Why check your PF account?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              PF is a major retirement fund, yet many employees face difficulties in withdrawal due to hidden issues.
            </p>
          </article>
          <article className="rounded-md bg-white p-5 text-purple-900">
            <h3 className="text-3xl font-bold">Why your PF can get stuck?</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>❌ Incorrect employer contributions</li>
              <li>❌ Delayed PF deposit</li>
              <li>❌ Mismatch in salary reporting</li>
              <li>❌ Inactive PF accounts</li>
            </ul>
          </article>
          <div className="flex items-center justify-center lg:justify-end">
            <LeadForm onBookConsultation={onBookConsultation} />
          </div>
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <h2 className="text-5xl font-bold text-purple-900">Frequently asked questions</h2>
          <div className="mt-6 space-y-2">
            {faqs.map((q) => (
              <details key={q} className="rounded border border-slate-300 bg-white px-4 py-3">
                <summary className="cursor-pointer text-sm font-medium text-slate-800">{q}</summary>
                <p className="mt-2 text-sm text-slate-600">
                  Our expert report checks this with your account-specific risk signals and recommended next actions.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 lg:grid-cols-2">
          <div className="flex items-center justify-center text-center">
            <div>
              <p className="italic text-slate-700">
                "Your PF could be stuck, and you wouldn't even know. Get your PF account checked and avoid the hassle later."
              </p>
              <p className="mt-6 font-semibold">Amey Kanekar</p>
              <p className="text-slate-600">Co-Founder, NadlaEPF</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <LeadForm light onBookConsultation={onBookConsultation} />
          </div>
