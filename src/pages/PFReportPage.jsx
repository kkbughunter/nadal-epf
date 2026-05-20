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
      {/* HERO SECTION */}
      <section className="bg-white py-14">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] items-center gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              India's First AI Agent for tracking Provident Fund
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] text-slate-900 md:text-6xl">
              Check if your{' '}
              <span className="text-[#088395]">PF balance is stuck</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              1.3 Crore Indians could not withdraw their PF money in 2024.
              Detect hidden PF issues before your withdrawal gets rejected.
            </p>

            <div className="mt-8">
              <LeadForm light onBookConsultation={onBookConsultation} />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[34px] border-[6px] border-slate-800 bg-white p-2 shadow-2xl">
              <img
                src={skyImage}
                alt="PF tracking app screen"
                className="h-[400px] w-[200px] rounded-[26px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <LogoMarquee />

      {/* REPORT SECTION */}
      <section className="bg-[#EBF4F6] py-16">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#088395]">
              PF Health Report
            </p>

            <h2 className="mt-3 text-5xl font-bold leading-tight text-slate-900">
              Get your own Provident Fund check-up report
            </h2>

            <p className="mt-5 text-slate-600">
              Our AI-powered PF analysis detects hidden issues that may prevent
              your PF withdrawal in the future.
            </p>

            <ul className="mt-6 space-y-4">
              {reportPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="mt-1 text-[#088395]">✔</span>
                  <span className="text-sm text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <LeadForm light onBookConsultation={onBookConsultation} />
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHECK */}
      <section className="bg-white py-16">
        <div className="mx-auto w-[96vw] max-w-[1120px]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#088395]">
              Eligibility Check
            </p>

            <h2 className="mt-3 text-5xl font-bold leading-tight text-slate-900">
              Who should check their PF?
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Your PF amount may not be withdrawable if your profile matches
              these conditions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {checkCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#088395]">
                  {card.tag}
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {card.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <LeadForm light onBookConsultation={onBookConsultation} />
          </div>
        </div>
      </section>

      {/* WHY PF GETS STUCK */}
      <section className="bg-[#09637E] py-16 text-white">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-6 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg">
            <h3 className="text-3xl font-bold leading-tight">
              Why check your PF account?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              PF is one of the biggest retirement savings assets for employees,
              yet many people face withdrawal rejection because of hidden account
              issues.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg">
            <h3 className="text-3xl font-bold leading-tight">
              Why your PF can get stuck?
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>❌ Incorrect employer contributions</li>
              <li>❌ Delayed PF deposits</li>
              <li>❌ Salary mismatch reporting</li>
              <li>❌ Unmerged UAN accounts</li>
              <li>❌ Inactive PF accounts</li>
            </ul>
          </article>

          <div className="flex items-center justify-center lg:justify-end">
            <LeadForm onBookConsultation={onBookConsultation} />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#EBF4F6] py-16">
        <div className="mx-auto w-[96vw] max-w-[900px]">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#088395]">
              FAQs
            </p>

            <h2 className="mt-3 text-5xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((q) => (
              <details
                key={q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-800">
                  <div className="flex items-center justify-between gap-4">
                    {q}
                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Our expert PF analysis report checks your account-specific
                  risk signals, identifies possible withdrawal issues, and
                  recommends the next steps to resolve them.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-100 p-10 text-center">
            <p className="text-2xl italic leading-10 text-slate-700">
              "Your PF could be stuck, and you wouldn't even know. Get your PF
              account checked early and avoid future withdrawal hassles."
            </p>

            <div className="mt-8">
              <p className="text-lg font-bold text-slate-900">
                Amey Kanekar
              </p>

              <p className="text-slate-600">Co-Founder, NadlaEPF</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <LeadForm light onBookConsultation={onBookConsultation} />
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-[#088395] py-16 text-white">
        <div className="mx-auto flex w-[96vw] max-w-[900px] flex-col items-center text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Don’t wait until your PF withdrawal gets rejected
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#EBF4F6]">
            Get a detailed PF health check report and identify hidden issues
            before it’s too late.
          </p>

          <div className="mt-10 w-full max-w-md">
            <LeadForm onBookConsultation={onBookConsultation} />
          </div>
        </div>
      </section>
    </>
  )
}

export default PFReportPage
