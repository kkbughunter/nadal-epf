import comp1 from '../assets/company-logos/comp1.png'
import comp2 from '../assets/company-logos/comp2.png'
import comp3 from '../assets/company-logos/comp3.png'
import comp4 from '../assets/company-logos/comp4.png'
import comp5 from '../assets/company-logos/comp5.png'
import comp6 from '../assets/company-logos/comp6.png'
import comp7 from '../assets/company-logos/comp7.png'

const logos = [
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
]

function LogoMarquee() {
  // repeat more times to avoid empty gap
  const loop = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="overflow-hidden py-4">
      <div className="flex w-max animate-marquee items-center gap-10">
        {loop.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Company ${idx + 1}`}
            className="h-8 w-auto shrink-0 object-contain opacity-70 transition duration-300 hover:opacity-100"
          />
        ))}
      </div>
    </section>
  )
}

export default LogoMarquee