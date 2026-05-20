import { useState } from 'react'
import logo from './assets/NadalEPF-logo.png'
import HomePage from './pages/HomePage'
import PFReportPage from './pages/PFReportPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import FormModal from './components/FormModal'
import { colors, cn } from './config/colors'
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaLinkedinIn,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
} from 'react-icons/fa';

function App() {
  const [page, setPage] = useState('home')
  const [showFormModal, setShowFormModal] = useState(false)

  const handlePageChange = (newPage) => {
    setPage(newPage)
    window.scrollTo(0, 0)
  }

  return (
    <div className={cn(colors.bg.page, colors.text.primary)}>
      <header className={cn('fixed inset-x-0 top-0 z-50 border-b border-white/10', colors.header.bg)}>
        <div className="mx-auto flex h-12 w-[96vw] max-w-[1120px] items-center justify-between">
          <button onClick={() => handlePageChange('home')} className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="nadal EPF logo" className="h-6 w-auto" />
          </button>
          <nav className={cn('hidden items-center gap-6 text-sm lg:flex', colors.header.text)}>
            <button onClick={() => handlePageChange('home')} className={page === 'home' ? colors.header.activeLink : colors.header.hoverLink}>
              Home
            </button>
            <button onClick={() => handlePageChange('pf-report')} className={page === 'pf-report' ? colors.header.activeLink : colors.header.hoverLink}>
              PF Report
            </button>
            <button onClick={() => handlePageChange('pricing')} className={page === 'pricing' ? colors.header.activeLink : colors.header.hoverLink}>
              Pricing
            </button>
            <button onClick={() => handlePageChange('about')} className={page === 'about' ? colors.header.activeLink : colors.header.hoverLink}>
              About Us
            </button>
            <button onClick={() => handlePageChange('contact')} className={page === 'contact' ? colors.header.activeLink : colors.header.hoverLink}>
              Contact Us
            </button>
            <button onClick={() => handlePageChange('faq')} className={page === 'faq' ? colors.header.activeLink : colors.header.hoverLink}>
              FAQ
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-12">
        {page === 'pf-report' ? (
          <PFReportPage onBookConsultation={() => setShowFormModal(true)} />
        ) : page === 'pricing' ? (
          <PricingPage />
        ) : page === 'about' ? (
          <AboutPage />
        ) : page === 'contact' ? (
          <ContactPage onConnectClick={() => setShowFormModal(true)} />
        ) : page === 'faq' ? (
          <FAQPage />
        ) : (
          <HomePage onConnectClick={() => setShowFormModal(true)} />
        )}
      </main>

      <FormModal isOpen={showFormModal} onClose={() => setShowFormModal(false)} />

      <footer id="contact" className="bg-[#EBF4F6] text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-5">
              <div>
                <h5 className="text-lg font-semibold mb-3">Registered Office</h5>
                <div className="flex items-start gap-3 text-sm leading-7">
                  <FaMapMarkerAlt className="mt-1 text-[#088395]" />
                  <div>
                    <p>16/2, Mainroad, Tisaiyanvillai,</p>
                    <p>Tirunelveli, Tamil Nadu - 627 657, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-3">Chennai Office</h5>
                <div className="flex items-start gap-3 text-sm leading-7">
                  <FaMapMarkerAlt className="mt-1 text-[#088395]" />
                  <div>
                    <p>4/222, First Floor, East Coast Rd,</p>
                    <p>Palavakkam, Chennai, Tamil Nadu - 600 041</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-3">Contact Info</h5>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#088395]" />
                    <span>(+91) 63858 71009</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#088395]" />
                    <span>info@nadalbusiness.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-3">Working Hours</h5>
                <div className="flex items-center gap-3 text-sm">
                  <FaClock className="text-[#088395]" />
                  <span>9.30 AM IST - 6.30 PM IST (Mon-Sat)</span>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                <div className="flex items-center gap-4">
                  <a
                    href="https://web.whatsapp.com/send?phone=916385871009"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#088395] text-white transition flex items-center justify-center hover:bg-[#09637E]"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nadal-business-services/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#088395] text-white transition flex items-center justify-center hover:bg-[#09637E]"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.facebook.com/Nadalbusiness"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#088395] text-white transition flex items-center justify-center hover:bg-[#09637E]"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com/Nadalbusiness"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full text-white bg-[#088395] transition flex items-center justify-center hover:bg-[#09637E]"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/nadal_tisaiyanvillai_nellai/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full text-white bg-[#088395] transition flex items-center justify-center hover:bg-[#09637E]"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 mt-8 lg:mt-0">
              <h5 className="text-lg font-semibold mb-5">Our Locations</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.8367954040477!2d77.8618526927172!3d8.335194499579375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b047f35b8142947%3A0x84633c63b3b3be0b!2sNadal%20Business%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1605001695756!5m2!1sen!2sin"
                  className="w-full h-[400px] rounded-xl border border-white/10"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.3955842449121!2d80.25534911847747!3d12.958373006552259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de65a30cf19%3A0x2a6193a75fb1b610!2sWOCO%20Spaces!5e0!3m2!1sen!2sin!4v1752404854905!5m2!1sen!2sin"
                  className="w-full h-[400px] rounded-xl border border-white/10"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-600">© 2026 NADAL Business Services Private Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
