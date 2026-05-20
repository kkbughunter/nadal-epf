import { useState } from 'react'
import logo from './assets/NadalEPF-logo.png'
import HomePage from './pages/HomePage'
import PFReportPage from './pages/PFReportPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'

const navItems = ['Blogs', 'EPFO Locator']

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="bg-[#f4f6f8] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1f2342]">
        <div className="mx-auto flex h-12 w-[96vw] max-w-[1120px] items-center justify-between">
          <img src={logo} alt="Nadla EPF logo" className="h-6 w-auto" />
          <nav className="hidden items-center gap-4 text-[11px] text-white lg:flex">
            <button onClick={() => setPage('home')} className={page === 'home' ? 'text-cyan-300' : 'hover:text-indigo-200'}>
              Home
            </button>
            <button onClick={() => setPage('pf-report')} className={page === 'pf-report' ? 'text-cyan-300' : 'hover:text-indigo-200'}>
              PF Report
            </button>
            <button onClick={() => setPage('pricing')} className={page === 'pricing' ? 'text-cyan-300' : 'hover:text-indigo-200'}>
              Pricing
            </button>
            <button onClick={() => setPage('about')} className={page === 'about' ? 'text-cyan-300' : 'hover:text-indigo-200'}>
              About Us
            </button>
            <button onClick={() => setPage('contact')} className={page === 'contact' ? 'text-cyan-300' : 'hover:text-indigo-200'}>
              Contact Us
            </button>
            <button onClick={() => setPage('faq')} className={page === 'faq' ? 'text-cyan-300' : 'hover:text-indigo-200'}>
              FAQ
            </button>
            {navItems.map((item) => (
              <a key={item} href="#0" className="hover:text-indigo-200">
                {item}
              </a>
            ))}
            <button className="rounded border border-indigo-200/40 px-2 py-1 text-[10px]">ThelyPrime v</button>
          </nav>
        </div>
      </header>

      <main className="pt-12">
        {page === 'pf-report' ? (
          <PFReportPage />
        ) : page === 'pricing' ? (
          <PricingPage />
        ) : page === 'about' ? (
          <AboutPage />
        ) : page === 'contact' ? (
          <ContactPage />
        ) : page === 'faq' ? (
          <FAQPage />
        ) : (
          <HomePage />
        )}
      </main>

      <footer className="bg-[#1f2342] py-14 text-indigo-100">
        <div className="mx-auto grid w-[96vw] max-w-[1120px] gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="mt-4 space-y-4 text-sm text-indigo-200/90">
              <div>
                <p className="font-semibold text-white">Registered Office</p>
                <p className="mt-1">16/2, Mainroad, Tisaiyanvillai, Tirunelveli, Tamil Nadu - 627657, India</p>
              </div>
              <div>
                <p className="font-semibold text-white">Chennai Office</p>
                <p className="mt-1">4/222, First Floor, East Coast Rd,</p>
                <p>Palavakkam, Chennai, Tamil Nadu - 600 041, India</p>
              </div>
              <p className="font-semibold text-cyan-300">bgv@nadalbusiness.com</p>
              <p className="font-semibold text-white">(+91) 63858 71009</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-1 text-sm text-indigo-200/90">
              <li>Home</li>
              <li>About Us</li>
              <li>Aadhaar Verification</li>
              <li>PAN Card Verification</li>
              <li>Driving License Verification</li>
              <li>Voter ID Verification</li>
              <li>Passport Verification</li>
              <li>Address Verification</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-1 text-sm text-indigo-200/90">
              <li>Education Verification</li>
              <li>Employment Verification</li>
              <li>UAN Verification</li>
              <li>Criminal Records Verification</li>
              <li>Reference Check</li>
              <li>Global database Verification</li>
              <li>Social Media Verification</li>
              <li>DIN Verification</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 w-[96vw] max-w-[1120px] border-t border-indigo-300/20 pt-4 text-sm text-indigo-200/80">
          © 2026 NADAL Business Services Private Limited. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
