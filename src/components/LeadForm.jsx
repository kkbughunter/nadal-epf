import { colors, cn } from '../config/colors'

function LeadForm({ light, onBookConsultation }) {
  const handleClick = () => {
    if (onBookConsultation) {
      onBookConsultation()
    }
  }

  return (
    
    <div className={cn('w-full max-w-[360px] rounded-lg border p-4', light ? `border-slate-200 ${colors.bg.card}` : `${colors.border.primary} ${colors.primary.dark}`)}>
    <p className={cn('mt-2 text-[10px]',)}>
        Please enter WhatsApp linked mobile number
      </p>
      {/* <p className={cn('mb-2 text-[11px]', light ? colors.text.light : `${colors.primary.light}`)}>
        Get your report within minutes!
      </p> */}
      {/* <div className="flex overflow-hidden rounded-md border border-slate-200 bg-white">
        <span className="px-3 py-2 text-xs text-slate-500">+91</span>
        <input
          className="w-full border-0 px-3 py-2 text-xs text-slate-800 outline-none"
          placeholder="Enter your mobile"
          disabled
        />
      </div>
      <p className={cn('mt-2 text-[10px]', light ? colors.text.lighter : colors.primary.light)}>
        Please enter WhatsApp linked mobile number
      </p> */}
      <button
        onClick={handleClick}
        className={cn('mt-3 w-full rounded-full py-3 text-xs font-bold transition cursor-pointer', colors.accent.main, colors.accent.hover, 'text-white')}
      >
        Book Free Consultation →
      </button>
    </div>
  )
}

export default LeadForm
