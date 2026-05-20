import heroImage from '../assets/image-placeholder3.png'
import memberImage from '../assets/image-placeholder2.png'

const questions = [
  'Am I investing in the right mutual funds for my goals?',
  'How do I transfer or claim financial assets after a family member passes away?',
  'Am I paying unnecessary tax or missing deductions?',
  'Do I really have the right insurance coverage for my family?',
  'Should I close this credit card, increase my limit, or restructure my debt?',
  'Does investing in NPS actually make sense for my retirement planning?',
]

const team = [
  { name: 'Amey Kanekar', role: 'Founder' },
  { name: 'Ashirwad Tomar', role: 'Sr. Manager - Prod. & Strategy' },
  { name: 'Ketan Das', role: 'Manager - Ops & Strategy' },
]

const advisors = [
  { name: 'Manish Shah', role: 'Chief Digital Officer', company: 'AU Small Finance Bank', type: 'Investor' },
  { name: 'Miten Sampat', role: 'Head of strategy and M&A', company: 'CRED', type: 'Investor' },
  { name: 'Akash Shah', role: 'Product Head', company: 'Amazon', type: 'Advisor' },
]

function AboutPage() {
  return (
    <>
      <section className="bg-[#EBF4F6] py-14">
        <div className="mx-auto w-[92vw] max-w-[1120px] text-slate-800">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-700 md:text-lg">
            <p>Personal Finance decisions shape some of the most important moments in life.</p>
            <p>
              Yet when people face financial questions about investments, taxes, insurance, provident fund withdrawals, inheritance, or global
              diversification they are often left navigating a fragmented system filled with conflicting advice, product sales, and confusing
              information.
            </p>
            <p className="font-semibold text-slate-900">nadalEPF was founded to change that.</p>
            <p>
              We believe that every individual deserves on-demand, clear, unbiased guidance and hands-on assistance when dealing with their money.
              Not product pushing. Not generic internet gyan. But legit expertise that helps people solve real financial problems and make confident
              decisions.
            </p>
            <p>
              nadalEPF is building the infrastructure and ecosystem for a new kind of financial experience in India, one where individuals always have
              access to trusted help whenever they need it.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg text-slate-800 md:text-xl">People are constantly dealing with questions like:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base italic leading-7 text-slate-700 md:text-lg">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-700 md:text-lg">
            <p>Some of these questions arise during major life events. Many others show up quietly in everyday financial decisions.</p>
            <p>
              To bring this vision to life, we created <span className="font-semibold text-slate-900">TheFynprint.</span>
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">TheFynprint is a personal finance concierge platform.</h2>
            <p>It is designed for individuals who want clarity in a financial world that often feels complex and overwhelming.</p>
            <p>
              Through TheFynprint, people can seek unbiased guidance and hands-on assistance on complex personal finance matters from evaluating
              investments and planning global diversification to understanding insurance, resolving provident fund issues, navigating taxes, or making
              long-term financial decisions for their families.
            </p>
            <p>
              Our approach combines deep research, expert advisory, structured financial frameworks, and technology to simplify complex financial
              decisions.
            </p>
            <p>
              But more importantly, it creates something that has long been missing in personal finance: a trusted place to turn when you need
              financial clarity.
            </p>
            <p>With TheFynprint, we are building a future where every financial decision is supported by trusted guidance.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Philosophy</h2>
            <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
              Personal finance should feel calm, not confusing. We earn trust by being independent, transparent about potential conflicts, and relentlessly
              clear in how we explain options.
            </p>
            <p className="mt-6 text-base text-slate-700 md:text-lg">
              For any questions or feedback, feel free to reach out at{' '}
              <a href="mailto:support@nadalbusiness.com" className="text-[#088395] underline">
                support@nadalbusiness.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-10">
        <div className="mx-auto w-[92vw] max-w-[1120px]">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">Meet Our Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <img src={memberImage} alt="" className="h-14 w-14 rounded-full object-cover" />
                <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
                <p className="mt-2 text-slate-600">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EBF4F6] py-10">
        <div className="mx-auto w-[92vw] max-w-[1120px]">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">Backed by the Best</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {advisors.map((m) => (
              <article key={m.name} className="rounded-xl border border-[#7AB2B2] bg-white p-5 shadow-sm">
                <p className="text-right text-xs text-slate-500">{m.type}</p>
                <img src={heroImage} alt="" className="mt-2 h-14 w-14 rounded-full object-cover" />
                <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
                <p className="mt-2 text-slate-700">{m.role}</p>
                <p className="mt-3 text-slate-600">{m.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
