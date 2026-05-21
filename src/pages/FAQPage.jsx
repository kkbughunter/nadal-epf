import { useMemo, useState } from 'react'


const faqData = [
  {
    q: 'How to check PF balance without UAN?',
    a: 'You can retrieve your UAN using your registered mobile number and KYC details, and then access your EPF passbook, PF balance and online services.',
  },
  {
    q: 'How to merge multiple PF accounts?',
    a: 'Transfer your old PF accounts to your current UAN and check that your service history is properly linked.',
  },
  {
    q: 'How can I raise a claim for PF withdrawal online?',
    a: 'Log in to the EPFO portal, complete KYC, choose the claim type, and submit Form 19 or 10C.',
  },
  {
    q: 'What is Form 13 in PF transfer?',
    a: 'Form 13 is used to transfer the PF balance from a previous employment account to the current UAN-linked account.',
  },
  {
    q: 'How to check PF withdrawal status online?',
    a: 'Use the EPFO claim status section on the member portal or the UMANG app with your UAN details.',
  },
  {
    q: 'Can I withdraw PF while still employed?',
    a: 'EPFO allows partial PF withdrawal for reasons like medical needs, education, or home loans.',
  },
  {
    q: 'What documents are required for PF withdrawal?',
    a: 'You generally need Aadhaar, PAN, bank details, and correct service/exit information in EPFO records.',
  },
  {
    q: 'What is the waiting period for PF withdrawal after resignation?',
    a: 'PF final settlement is usually allowed after 2 months of unemployment, subject to EPFO conditions.',
  },
  {
    q: 'Do I need employer approval for online PF withdrawal?',
    a: 'In many cases, no manual approval is required; however, employer records and exit details must be correctly updated.',
  },
  {
    q: 'How long does it take to receive PF withdrawal after applying?',
    a: 'Simple claims are usually processed in a few days, but delays can happen if there are mismatches.',
  },
  {
    q: 'Can I withdraw 100% of my PF amount?',
    a: 'Yes, PF can usually be withdrawn after retirement or 2 months of unemployment, as per EPFO rules.',
  },
  {
    q: 'What is Form 121?',
    a: 'Form 121 is optional and is used only for tax (TDS) purposes. It is a declaration form used to claim exemption from TDS deduction.',
  },
  {
    q: 'Which bank account should NRIs use for PF withdrawal?',
    a: 'Use a valid bank account mapped in EPFO records and ensure that KYC details match exactly to avoid rejection.',
  },
  {
    q: 'Are PF withdrawals taxable for NRIs?',
    a: 'Taxation depends on the length of service, applicable tax treaty rules, and withdrawal conditions. Professional advice is recommended.',
  },
  {
    q: 'Can NRIs withdraw their PF amount online?',
    a: 'Yes, NRIs can apply, subject to correct KYC details, valid bank information, and compliance with tax and regulatory requirements.',
  },
]

function FAQPage() {
  const [query, setQuery] = useState('')

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const queryOk = item.q.toLowerCase().includes(query.toLowerCase())
      return queryOk
    })
  }, [query])

  return (
    <section className="bg-[#EBF4F6] py-14">
      <br />
      <br />
      <div className="mx-auto w-[92vw] max-w-[1120px]">
        <h1 className="text-center text-3xl font-bold text-[#09637E] md:text-4xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-center text-base text-slate-500 md:text-lg">
          Find answers to common questions about PF withdrawal, transfers, and more.
        </p>

        <div className="mx-auto mt-8 max-w-[920px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-sm outline-none md:text-base"
          />
        </div>

      <br />

          <div className="space-y-3">
            {filteredFaqs.map((item) => (
              <details key={item.q} className="rounded-xl border border-[#7AB2B2] bg-white px-5 py-4">
                <summary className="cursor-pointer text-base font-semibold text-[#09637E] md:text-lg">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p>
              </details>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="rounded-xl border border-[#7AB2B2] bg-white px-5 py-6 text-sm text-slate-500 md:text-base">
                No questions found for this search/category.
              </div>
            )}
          </div>
        </div>
    </section>
  )
}

export default FAQPage
