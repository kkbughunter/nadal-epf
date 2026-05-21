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
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(`Thank you ${formData.fullName}! We'll contact you soon at ${formData.mobileNumber}`)
    setFormData({
      fullName: '',
      mobileNumber: '',
      emailId: '',
      country: 'India',
      state: '',
      city: '',
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={cn('fixed inset-0 z-[100] flex items-center justify-center p-4', colors.bg.modal)}>
      <div className={cn('w-full max-w-md rounded-lg shadow-xl', colors.modal.bg)}>
        <div className={cn('flex items-center justify-between border-b px-6 py-4', colors.modal.headerBg, colors.modal.headerBorder)}>
          <h2 className={cn('text-xl font-bold', colors.modal.headerText)}>Book Free Consultation</h2>
          <button
            onClick={onClose}
            className={cn('cursor-pointer'), colors.modal.closeBtn}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-4">
          <div>
            <label className={cn('block text-sm font-medium mb-1', colors.form.labelText)}>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className={cn('w-full rounded-md border px-3 py-2 text-sm outline-none', colors.form.inputBorder, colors.form.inputFocus)}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className={cn('block text-sm font-medium mb-1', colors.form.labelText)}>
              Mobile Number *
            </label>
            <div className="flex gap-2">
              <span className={cn('flex items-center px-3 py-2 rounded-md border text-sm', colors.primary.light, colors.form.inputBorder)}>
                +91
              </span>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                maxLength="10"
                className={cn('flex-1 rounded-md border px-3 py-2 text-sm outline-none', colors.form.inputBorder, colors.form.inputFocus)}
                placeholder="Enter mobile number"
              />
            </div>
          </div>

          <div>
            <label className={cn('block text-sm font-medium mb-1', colors.form.labelText)}>
              Email ID *
            </label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              required
              className={cn('w-full rounded-md border px-3 py-2 text-sm outline-none', colors.form.inputBorder, colors.form.inputFocus)}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className={cn('block text-sm font-medium mb-1', colors.form.labelText)}>
              Country
            </label>
            <input
              type="text"
              value={formData.country}
              disabled
              className={cn('w-full rounded-md border px-3 py-2 text-sm cursor-not-allowed', colors.primary.light, colors.form.inputBorder)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={cn('block text-sm font-medium mb-1', colors.form.labelText)}>
                State *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className={cn('w-full rounded-md border px-3 py-2 text-sm outline-none', colors.form.inputBorder, colors.form.inputFocus)}
                placeholder="Enter state"
              />
            </div>
            <div>
              <label className={cn('block text-sm font-medium mb-1', colors.form.labelText)}>
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className={cn('w-full rounded-md border px-3 py-2 text-sm outline-none', colors.form.inputBorder, colors.form.inputFocus)}
                placeholder="Enter city"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={cn('flex-1 rounded-md border px-4 py-2 text-sm font-medium cursor-pointer', colors.button.secondary)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={cn('flex-1 rounded-md px-4 py-2 text-sm font-medium text-white cursor-pointer', colors.button.primary)}
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
