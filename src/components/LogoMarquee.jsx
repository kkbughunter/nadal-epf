import companyLogoPlaceholder from '../assets/company-logo-placeholder.png'

const logos = Array.from({ length: 16 })

function LogoMarquee() {
  const loop = [...logos, ...logos]

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-3">
      <div className="logo-marquee-track flex min-w-max items-center gap-8 px-4">
        {loop.map((_, idx) => (
          <article key={idx} className="flex items-center">
            <img src={companyLogoPlaceholder} alt="" className="h-6 w-14 object-contain" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default LogoMarquee
