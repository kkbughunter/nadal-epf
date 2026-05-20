import { useMemo, useState } from 'react'

const categories = [
  'All',
  'EPF withdrawal',
  'EPF Transfer',
  'Joint Declaration and KYC',
  'EPFO Rules',
  'Finright PF Consultant',
]

const faqData = [
  {
    q: 'How can I raise a claim for PF withdrawal online?',
    a: 'Log in to the EPFO member portal, complete KYC, select claim type, and submit Form 19/10C as applicable.',
    cat: 'EPF withdrawal',
  },
  {
    q: 'Can I withdraw 100% of my PF amount?',
    a: 'Yes, usually after retirement or 2 months of unemployment, subject to EPFO rules and account status.',
    cat: 'EPF withdrawal',
  },
  {
    q: 'How long does it take to receive PF withdrawal after applying?',
    a: 'Most clean claims are processed within a few working days, but mismatches may extend timelines.',
    cat: 'EPFO Rules',
  },
  {
    q: 'Do I need employer approval for online PF withdrawal?',
    a: 'In many cases no manual approval is needed, but employer records and exit details must be correct.',
    cat: 'EPFO Rules',
  },
  {
    q: 'What documents are required for PF withdrawal?',
    a: 'Typically Aadhaar, PAN, bank account details, and accurate service/exit details in EPFO records.',
    cat: 'Joint Declaration and KYC',
  },
  {
    q: 'What is the waiting period for PF withdrawal after resignation?',
    a: 'Final settlement often requires around 2 months of unemployment, depending on claim type and EPFO policy.',
    cat: 'EPFO Rules',
  },
  {
    q: 'Can I withdraw PF while still employed?',
    a: 'Partial withdrawal may be allowed for specific reasons like medical, home loan, or education under EPFO rules.',
    cat: 'EPF withdrawal',
  },
  {
    q: 'How to check PF withdrawal status online?',
    a: 'Use the EPFO claim status section on the member portal or UMANG app with your UAN credentials.',
    cat: 'EPFO Rules',
  },
  {
    q: 'Can NRIs withdraw their PF amount online?',
    a: 'Yes, NRIs can apply subject to KYC correctness, bank details, and tax/compliance requirements.',
    cat: 'EPF withdrawal',
  },
  {
    q: 'Are PF withdrawals taxable for NRIs?',
    a: 'Taxation depends on service period, treaty rules, and withdrawal conditions. Professional advice is recommended.',
    cat: 'EPFO Rules',
  },
  {
    q: 'Which bank account should NRIs use for PF withdrawal?',
    a: 'Use a valid account mapped in EPFO records and ensure KYC details match exactly to avoid rejection.',
    cat: 'Joint Declaration and KYC',
  },
  {
    q: 'What is Form 13 in PF transfer?',
    a: 'Form 13 is used to transfer PF balance from previous employment account to current UAN-linked account.',
    cat: 'EPF Transfer',
  },
  {
    q: 'How to merge multiple PF accounts?',
    a: 'Initiate transfer requests for old member IDs to your current UAN and verify service history mapping.',
    cat: 'EPF Transfer',
  },
  {
    q: 'How to check PF balance without UAN?',
    a: 'You can recover UAN first using registered mobile and KYC details, then access passbook and claim services.',
    cat: 'Finright PF Consultant',
  },
]

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const categoryOk = activeCategory === 'All' || item.cat === activeCategory
      const queryOk = item.q.toLowerCase().includes(query.toLowerCase())
      return categoryOk && queryOk
    })
  }, [activeCategory, query])

  return (
    <section className="bg-[#f4f6f8] py-14">
      <div className="mx-auto w-[92vw] max-w-[1120px]">
        <h1 className="text-center text-6xl font-bold text-slate-700">Frequently Asked Questions</h1>
        <p className="mt-4 text-center text-[28px] text-slate-500">
          Find answers to common questions about PF withdrawal, transfers, and more.
        </p>

        <div className="mx-auto mt-8 max-w-[920px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-[26px] outline-none"
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-xl border border-slate-300 bg-white p-4">
            <h2 className="text-5xl font-semibold text-slate-700">Categories</h2>
            <div className="mt-4 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full rounded-md px-3 py-2 text-left text-[28px] ${
                    activeCategory === cat ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-3">
            {filteredFaqs.map((item) => (
              <details key={item.q} className="rounded-xl border border-slate-300 bg-white px-5 py-4">
                <summary className="cursor-pointer text-[36px] font-semibold text-slate-700">{item.q}</summary>
                <p className="mt-3 text-[24px] leading-9 text-slate-600">{item.a}</p>
              </details>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="rounded-xl border border-slate-300 bg-white px-5 py-6 text-[24px] text-slate-500">
                No questions found for this search/category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQPage
