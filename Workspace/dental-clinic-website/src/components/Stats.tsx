import {
  HiOutlineArrowTrendingUp,
  HiOutlineCheck,
  HiOutlineHeart,
} from 'react-icons/hi2'
import peopleIcon from '../assets/icons/people.png'
import checkIcon from '../assets/icons/check.png'

const SMALL_STATS = [
  {
    iconSrc: peopleIcon,
    value: '11k+',
    label: 'Patients treated online & in-clinic',
  },
  {
    iconSrc: checkIcon,
    value: '8+',
    label: 'Years of clinical experience',
  },
  {
    icon: HiOutlineCheck,
    value: '132+',
    label: 'Patient reviews & ratings',
  },
  {
    icon: HiOutlineArrowTrendingUp,
    value: '36/5',
    label: 'Average patient rating on Justdial',
    verified: true,
  },
]

function Stats() {
  return (
    <section id="stats" className="scroll-mt-20 bg-white pt-8 pb-8 lg:pt-12 lg:pb-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-0">
            <span className="order-0 h-[2px] w-[18px] flex-none bg-[#E86A4F]" />
            <span className="order-1 flex h-[17px] w-[180px] flex-none items-center justify-center text-center text-[12.5px] leading-[17px] font-bold tracking-[1.75px] text-[#3B6EA5] uppercase">
              By the numbers
            </span>
          </div>
          <h2 className="order-0 flex h-auto max-w-[444px] flex-none items-center justify-center text-center text-3xl font-bold text-[#2C5A8C] sm:text-4xl lg:h-[49px] lg:text-[36px] lg:leading-[49px] lg:tracking-[-0.36px]">
            Our results, plainly stated
          </h2>
        </div>

        <div className="relative order-1 box-border w-full max-w-[1116px] flex-none self-stretch rounded-[32px] border border-[rgba(19,36,32,0.12)] bg-white p-2 sm:p-4">
          <span
            className="pointer-events-none absolute inset-0 rounded-[32px]"
            style={{
              background: 'rgba(255, 255, 255, 0.002)',
              boxShadow: '0px 50px 90px -55px rgba(44, 90, 140, 0.35)',
            }}
          />

          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr]">
            {/* Large stat tile */}
            <div
              className="relative isolate flex min-h-[531.18px] flex-col items-start justify-center gap-8 overflow-hidden rounded-3xl px-8 py-[156.03px]"
              style={{
                background: 'linear-gradient(158.25deg, #2C5A8C 0%, #16324F 100%)',
              }}
            >
              <span
                className="pointer-events-none absolute z-0 order-0 h-[220px] w-[220px] flex-none rounded-full"
                style={{
                  right: '-60px',
                  top: '-70px',
                  background:
                    'radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 70%)',
                }}
              />

              <span className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <HiOutlineHeart className="h-6 w-6" />
              </span>
              <div className="relative z-[1]">
                <p className="order-0 flex h-16 w-full max-w-[386.5px] flex-none items-center self-stretch text-[64px] leading-[64px] font-bold tracking-[-1.28px] text-white">
                  73%
                </p>
                <p className="order-0 mt-4 flex h-[22px] w-full max-w-[386.5px] flex-none items-center self-stretch text-[16px] leading-[22px] font-bold text-white">
                  Patient satisfaction rate
                </p>
                <p className="order-0 mt-2 flex w-full max-w-[260px] flex-none items-center self-stretch text-[13.1px] leading-5 font-medium text-white/72">
                  Measured after every visit — routine checkup or full smile makeover.
                </p>
              </div>
              <span
                className="pointer-events-none absolute z-[1] order-1 box-border h-[162px] w-[162px] flex-none rounded-full border border-dashed border-white/18"
                style={{ left: '-40px', bottom: '-50px' }}
              />
            </div>

            {/* Small stat grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SMALL_STATS.map(({ icon: Icon, iconSrc, value, label, verified }) => (
                <div
                  key={label}
                  className={`relative box-border flex min-h-[174px] flex-col items-start gap-4 rounded-[20px] border border-[rgba(19,36,32,0.12)] bg-white px-[22px] py-6 ${
                    verified ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-alt text-brand-700">
                    {iconSrc ? (
                      <img src={iconSrc} alt="" className="h-5 w-5 object-contain" />
                    ) : (
                      Icon && <Icon className="h-5 w-5" />
                    )}
                  </span>
                  <div>
                    <p className="order-0 flex h-[41px] w-full max-w-[251.75px] flex-none items-center self-stretch text-[30px] leading-[41px] font-bold text-[#2C5A8C]">
                      {value}
                    </p>
                    <p className="order-0 mt-1 flex h-[19px] w-full max-w-[251.75px] flex-none items-center self-stretch text-[12.1px] leading-[18px] font-medium text-[#3D504B]">
                      {label}
                    </p>
                  </div>
                  {verified && (
                    <span className="absolute top-6 right-6 order-1 flex h-6 w-[61px] flex-none flex-row items-center rounded-full bg-[#FBE0D6] px-2 py-1">
                      <span className="order-0 flex h-4 w-[45px] flex-none items-center text-[11.5px] leading-4 font-bold text-[#E86A4F]">
                        Verified
                      </span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
