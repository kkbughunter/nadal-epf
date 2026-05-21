import comp1 from '../assets/company-logos/comp1.png'
import comp2 from '../assets/company-logos/comp2.png'
import comp3 from '../assets/company-logos/comp3.png'
import comp4 from '../assets/company-logos/comp4.png'
import comp5 from '../assets/company-logos/comp5.png'
import comp6 from '../assets/company-logos/comp6.png'
import comp7 from '../assets/company-logos/comp7.png'
import comp8 from '../assets/company-logos/comp8.png'
import comp9 from '../assets/company-logos/comp9.png'
import comp10 from '../assets/company-logos/comp10.png'
import comp11 from '../assets/company-logos/comp11.png'
import comp12 from '../assets/company-logos/comp12.png'
import comp13 from '../assets/company-logos/comp13.png'
import comp14 from '../assets/company-logos/comp14.png'

export const logos = [
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
  comp8,
  comp9,
  comp10,
  // comp11,
  comp12,
  comp13,
  comp14,
]

function LogoMarquee() {
  const loop = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="overflow-hidden py-4">
      <div className="flex w-max animate-marquee items-center gap-12">
        {loop.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Company ${idx + 1}`}
            className="h-10 w-auto shrink-0 object-contain transition duration-300"
          />
        ))}
      </div>
    </section>
  )
}

export default LogoMarquee