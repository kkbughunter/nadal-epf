function LeadForm({ light }) {
  return (
    <div className="w-full max-w-[360px]">
      <p className={`mb-2 text-[11px] ${light ? 'text-slate-500' : 'text-slate-300'}`}>
        Get your report within minutes!
      </p>
      <div className="flex overflow-hidden rounded-md border border-slate-200 bg-white">
        <span className="px-3 py-2 text-xs text-slate-500">+91</span>
        <input
          className="w-full border-0 px-3 py-2 text-xs text-slate-800 outline-none"
          placeholder="Enter your UAN linked mobile"
        />
      </div>
      <p className={`mt-2 text-[10px] ${light ? 'text-slate-400' : 'text-slate-300'}`}>
        Please enter WhatsApp linked mobile number
      </p>
      <button
        className={`mt-3 w-full rounded-full py-3 text-xs font-bold ${light ? 'bg-[#031f6a] text-white' : 'bg-white text-[#031f6a]'}`}
      >
        GET STARTED →
      </button>
      <p className={`mt-3 text-center text-[11px] ${light ? 'text-slate-500' : 'text-slate-300'}`}>
        Already have an account?
      </p>
      <button
        className={`mt-2 w-full rounded-full py-3 text-xs font-semibold ${light ? 'border border-slate-300 bg-white text-slate-900' : 'border border-white/40 bg-white text-[#031f6a]'}`}
      >
        LOGIN TO YOUR ACCOUNT
      </button>
    </div>
  )
}

export default LeadForm
