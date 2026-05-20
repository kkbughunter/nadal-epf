import { colors, cn } from '../config/colors'

function ContactPage({ onConnectClick }) {
  return (
    <section className={cn('py-14', colors.bg.page)}>
      <div className={cn('mx-auto w-[92vw] max-w-[1120px]', colors.text.secondary)}>
        <h1 className={cn('text-5xl font-bold', colors.primary.text)}>Contact Us</h1>
        <p className="mt-6 text-[18px] leading-8">
          If you ever face any issue with our services or want to share a feedback you can reach out to us at:
        </p>

        <div className="mt-6 space-y-6 text-[18px] leading-8">
          <div>
            <h2 className="text-3xl font-semibold">Address</h2>
            <p className="mt-2">302, Orion business park,</p>
            <p>Himat Mansion CHS ltd.,</p>
            <p>Corner of shimpoli signal and Natakwala lane, S.V road,</p>
            <p>Borivali (West), Mumbai 400092</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Email</h2>
            <p className="mt-2">support@nadalbusiness.com</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">New Enquiry:</h2>
            <button onClick={onConnectClick} className={cn('mt-3 rounded-md px-5 py-2 text-sm font-semibold text-white', colors.accent.main, colors.accent.hover)}>
              Connect Now
            </button>
          </div>

          <div>
            <h2 className="text-5xl font-bold">Escalations</h2>
            <p className="mt-3">
              We&apos;re listening! Your concerns are of paramount importance to us. To make this process swift and seamless, we have designed a 3-level
              query resolution and grievance redressal process to help resolve your queries efficiently.
            </p>
            <a href="#0" className="mt-3 inline-block text-[#088395]">
              Raise Escalation
            </a>
          </div>

          <div>
            <p className="font-semibold">Escalation Matrix:</p>
            <p className="mt-2"><span className="font-semibold">L1 :</span> Bhavna Patil</p>
            <p>support@nadalbusiness.com</p>
            <p className="mt-2"><span className="font-semibold">L2 :</span> Poonam Upadhyay</p>
            <p>poonam.upadhyay@nadalbusiness.com</p>
            <p className="mt-2"><span className="font-semibold">L3 :</span> Ketan Das</p>
            <p>ketan.das@nadalbusiness.com</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">
              Reach out to us: <span className="font-normal text-[#088395]">+91 63858 71009</span>
            </p>
            <p className="mt-2 text-base text-slate-600">
              Note: This number will only be available Monday to Friday, 10 AM to 7 PM IST.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
