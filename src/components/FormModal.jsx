import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { colors, cn } from '../config/colors'

function FormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailId: '',
    country: 'India',
    state: '',
    city: '',
    consent: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form submitted:', formData)

    alert(
      `Thank you ${formData.fullName}! We'll contact you soon at ${formData.mobileNumber}`
    )

    setFormData({
      fullName: '',
      mobileNumber: '',
      emailId: '',
      country: 'India',
      state: '',
      city: '',
      consent: false,
    })

    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center p-4',
        colors.bg.modal
      )}
    >
      <div
        className={cn(
          'w-full max-w-md rounded-lg shadow-xl',
          colors.modal.bg
        )}
      >
        {/* Header */}
        <div
          className={cn(
            'flex items-center justify-between border-b px-6 py-4',
            colors.modal.headerBg,
            colors.modal.headerBorder
          )}
        >
          <h2
            className={cn(
              'text-xl font-bold',
              colors.modal.headerText
            )}
          >
            Book Free Consultation
          </h2>

          <button
            onClick={onClose}
            className={cn('cursor-pointer', colors.modal.closeBtn)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 px-6 py-4"
        >
          {/* Full Name */}
          <div>
            <label
              className={cn(
                'mb-1 block text-sm font-medium',
                colors.form.labelText
              )}
            >
              Full Name *
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className={cn(
                'w-full rounded-md border px-3 py-2 text-sm outline-none',
                colors.form.inputBorder,
                colors.form.inputFocus
              )}
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              className={cn(
                'mb-1 block text-sm font-medium',
                colors.form.labelText
              )}
            >
              Mobile Number *
            </label>

            <div className="flex gap-2">
              <span
                className={cn(
                  'flex items-center rounded-md border px-3 py-2 text-sm',
                  colors.primary.light,
                  colors.form.inputBorder
                )}
              >
                +91
              </span>

              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                maxLength="10"
                className={cn(
                  'flex-1 rounded-md border px-3 py-2 text-sm outline-none',
                  colors.form.inputBorder,
                  colors.form.inputFocus
                )}
                placeholder="Enter mobile number"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              className={cn(
                'mb-1 block text-sm font-medium',
                colors.form.labelText
              )}
            >
              Email ID *
            </label>

            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              required
              className={cn(
                'w-full rounded-md border px-3 py-2 text-sm outline-none',
                colors.form.inputBorder,
                colors.form.inputFocus
              )}
              placeholder="Enter your email"
            />
          </div>

          {/* Country */}
          <div>
            <label
              className={cn(
                'mb-1 block text-sm font-medium',
                colors.form.labelText
              )}
            >
              Country
            </label>

            <input
              type="text"
              value={formData.country}
              disabled
              className={cn(
                'w-full cursor-not-allowed rounded-md border px-3 py-2 text-sm',
                colors.primary.light,
                colors.form.inputBorder
              )}
            />
          </div>

          {/* State & City */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className={cn(
                  'mb-1 block text-sm font-medium',
                  colors.form.labelText
                )}
              >
                State *
              </label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className={cn(
                  'w-full rounded-md border px-3 py-2 text-sm outline-none',
                  colors.form.inputBorder,
                  colors.form.inputFocus
                )}
                placeholder="Enter state"
              />
            </div>

            <div>
              <label
                className={cn(
                  'mb-1 block text-sm font-medium',
                  colors.form.labelText
                )}
              >
                City *
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className={cn(
                  'w-full rounded-md border px-3 py-2 text-sm outline-none',
                  colors.form.inputBorder,
                  colors.form.inputFocus
                )}
                placeholder="Enter city"
              />
            </div>
          </div>

         {/* Consent Checkbox */}
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
  <label className="flex cursor-pointer items-start gap-3">
    <input
      type="checkbox"
      name="consent"
      checked={formData.consent}
      onChange={handleInputChange}
      required
      className="mt-1 h-4 w-4 cursor-pointer accent-[#09637E]"
    />

    <div className="text-xs leading-6 text-slate-600">
      <span>
        I agree to our{' '}
        <span className="font-medium text-[#09637E]">
          Terms & Conditions
        </span>{' '}
        and{' '}
        <span className="font-medium text-[#09637E]">
          Privacy Policy
        </span>{' '}
        of Nadal Business Services.
      </span>

      <details className="">
        <summary className="cursor-pointer font-medium text-[#09637E] hover:underline">
          Show more
        </summary>

        <p className="mt-2 text-slate-600">
          I consent to the collection and processing of my
          contact details, EPFO passbook, and any other
          information I provide for a period of six months
          or for the duration of the service, whichever is
          longer.
        </p>
      </details>
    </div>
  </label>
</div>
          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={cn(
                'flex-1 cursor-pointer rounded-md border px-4 py-2 text-sm font-medium',
                colors.button.secondary
              )}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={cn(
                'flex-1 cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-white',
                colors.button.primary
              )}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormModal