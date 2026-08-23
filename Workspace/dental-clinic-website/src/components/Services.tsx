import searchIcon from '../assets/icons/search.png'
import bracesIcon from '../assets/icons/braces.png'
import starIcon from '../assets/icons/star-2.png'
import barChartIcon from '../assets/icons/bar-chart.png'

const SERVICES = [
  {
    iconSrc: starIcon,
    title: 'Teeth Whitening',
    description:
      'Safe, dentist-supervised whitening and smile designing that brightens your smile without the sensitivity.',
  },
  {
    iconSrc: bracesIcon,
    title: 'Orthodontic Braces',
    description:
      'Traditional and clear aligner braces mapped out to your timeline and lifestyle.',
  },
  {
    iconSrc: barChartIcon,
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking replacements for missing teeth, placed with surgical precision.',
  },
  {
    iconSrc: barChartIcon,
    title: 'Dental Crowns',
    description:
      'Custom-fitted crowns that restore strength and shape to damaged or weakened teeth.',
  },
  {
    iconSrc: barChartIcon,
    title: 'Pediatric Dentistry',
    description:
      'Gentle, kid-friendly checkups and treatments that build good habits early.',
  },
  {
    iconSrc: barChartIcon,
    title: 'Cosmetic Veneers',
    description:
      'Thin, natural-looking veneers that correct chips, gaps, and discoloration.',
  },
  {
    iconSrc: barChartIcon,
    title: 'Gum Treatment',
    description:
      'Deep cleaning and periodontal care that treats gum disease at the source.',
  },
]

function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-[18px] flex-none bg-[#E86A4F]" />
            <span className="flex items-center justify-center text-center text-[12.5px] leading-[17px] font-bold tracking-[1.75px] text-[#3B6EA5] uppercase">
              Services
            </span>
          </div>
          <h2 className="max-w-2xl text-center text-3xl font-bold text-brand-700 sm:text-4xl lg:text-[38px] lg:leading-[51px] lg:tracking-[-0.38px]">
            Everything your smile needs, under one roof
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          {/* Featured service card */}
          <div
            className="relative isolate row-span-2 flex min-h-[380px] flex-col items-start justify-between overflow-hidden rounded-[18px] px-[30px] py-[34px] lg:min-h-[500px]"
            style={{
              background: 'linear-gradient(161.58deg, #2c5a8c 0%, #16324f 100%)',
            }}
          >
            <span
              className="pointer-events-none absolute z-[2] order-2 h-[260px] w-[260px] flex-none rounded-full"
              style={{
                right: '-69px',
                top: '-89px',
                background:
                  'radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
              }}
            />

            <div>
              <span className="relative z-[3] flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white/15 text-white">
                <img src={searchIcon} alt="" className="h-5 w-5 object-contain" />
              </span>
              <span className="absolute top-[23px] right-[21.95px] z-[3] flex h-[25px] w-[111px] flex-none items-start rounded-full bg-white/15 px-[11px] py-[5px] text-[11px] leading-[15px] font-bold tracking-[0.44px] text-white uppercase">
                Most booked
              </span>

              <div className="mt-8 flex flex-col gap-3">
                <h3 className="text-[26px] leading-[35px] font-bold tracking-[-0.26px] text-white">
                  Root Canal Treatment
                </h3>
                <p className="max-w-[329px] text-[13.9px] leading-[25px] font-medium text-white/75">
                  Single-visit endodontic treatment that relieves pain and saves the natural
                  tooth wherever possible.
                </p>
              </div>
            </div>

            <a
              href="#appointment"
              className="relative z-[3] flex w-fit items-center gap-1 text-[13.5px] leading-[18px] font-bold text-white hover:text-white/80"
            >
              Learn more →
            </a>
          </div>

          {/* Other service cards */}
          {SERVICES.map(({ iconSrc, title, description }) => (
            <div
              key={title}
              className="flex min-h-[289.38px] flex-col justify-between gap-4 rounded-[18px] border border-[rgba(19,36,32,0.12)] bg-white px-[22px] py-6"
            >
              <div>
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#FBE0D6]">
                  <img src={iconSrc} alt="" className="h-5 w-5 object-contain" />
                </span>
                <div className="mt-4 flex flex-col gap-2">
                  <h3 className="text-[19px] leading-[26px] font-bold tracking-[-0.19px] text-brand-700">
                    {title}
                  </h3>
                  <p className="max-w-[209px] text-[13px] leading-[23px] font-medium text-[#3D504B]">
                    {description}
                  </p>
                </div>
              </div>
              <a
                href="#appointment"
                className="flex w-fit items-center gap-1 text-[13.5px] font-bold text-brand-700 hover:text-brand-800"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#appointment"
            className="flex h-[52px] w-[207px] items-center justify-center rounded-full border border-[rgba(19,36,32,0.12)] px-[30px] py-[15px] text-[15px] leading-[20px] font-bold text-brand-700 hover:bg-surface-alt"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
