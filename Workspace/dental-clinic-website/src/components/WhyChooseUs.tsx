import starIcon from '../assets/icons/star.png'
import peopleIcon from '../assets/icons/people.png'
import checkSquareIcon from '../assets/icons/check-square.png'

const DOCTOR_PHOTO_URL =
  'https://res.cloudinary.com/jvhaorsn/image/upload/v1787515600/why-choose-us-image_ccv20n.png'

function WhyChooseUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2 lg:px-8">
        {/* Left column */}
        <div className="relative mx-auto w-full max-w-xs lg:max-w-[340px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white">
            <img
              src={DOCTOR_PHOTO_URL}
              alt="Dr. ___, BDS"
              className="h-full w-full object-cover"
            />

            <span
              className="pointer-events-none absolute inset-0 z-0 order-0 flex-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(19, 36, 32, 0) 45%, rgba(19, 36, 32, 0.55) 100%)',
              }}
            />

            <span
              className="absolute bottom-6 left-6 z-[1] order-1 flex h-[42px] w-[103px] flex-none flex-col items-start justify-center px-4 py-3"
              style={{
                background: 'rgba(255, 255, 255, 0.14)',
                backdropFilter: 'blur(3px)',
                WebkitBackdropFilter: 'blur(3px)',
                borderRadius: '14px',
              }}
            >
              <span className="order-0 flex h-[18px] w-[71px] flex-none items-center text-[13px] leading-[18px] font-medium text-white">
                Dr. ___, BDS
              </span>
            </span>
          </div>

          <span
            className="isolate absolute z-[1] order-1 flex h-[83px] w-[220px] max-w-[220px] flex-none flex-row items-center gap-3 rounded-[18px] bg-white px-5 py-4"
            style={{ right: '-9.99px', bottom: '-33px' }}
          >
            <span className="order-1 z-[1] flex h-[38px] w-[38px] flex-none shrink-0 flex-row items-center justify-center rounded-[19px] bg-[#DCE6F0] p-0">
              <img src={checkSquareIcon} alt="" className="h-5 w-5 object-contain" />
            </span>
            <span className="order-0 flex h-[51px] w-[114px] flex-none items-center text-[12.5px] leading-[17px] font-bold text-[#132420]">
              Board-certified specialist on every case
            </span>
          </span>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="order-0 h-[2px] w-[18px] flex-none bg-[#E86A4F]" />
            <span className="order-1 flex h-[17px] w-[180px] flex-none items-center text-[12.5px] leading-[17px] font-bold tracking-[1.75px] text-[#3B6EA5] uppercase">
              Why choose us
            </span>
          </div>

          <h2 className="order-0 flex w-full max-w-[578.6px] flex-none items-center self-stretch text-3xl font-bold text-[#2C5A8C] sm:text-4xl lg:text-[38px] lg:leading-[44px] lg:tracking-[-0.38px]">
            Helping with your dental problems, without the dread
          </h2>

          <p className="order-0 flex max-w-[443px] flex-none items-center text-[15.1px] leading-7 font-medium text-[#3D504B]">
            Most people put off dental visits because they&apos;re rushed, impersonal, or
            uncomfortable. Dr. ___ clinic is built around the opposite idea: unhurried
            consultations, transparent pricing, and treatment plans that fit your actual
            life.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="order-0 box-border flex min-h-[100.89px] w-[222px] min-w-[170px] flex-1 flex-none flex-row items-center gap-3.5 self-stretch rounded-[18px] border border-[rgba(19,36,32,0.12)] bg-white px-[22px] py-5">
              <span className="order-0 flex h-11 w-11 flex-none shrink-0 flex-row items-center justify-center rounded-xl bg-[#DCE6F0] p-0">
                <img src={starIcon} alt="" className="h-5 w-5 object-contain" />
              </span>
              <div>
                <p className="order-0 flex h-[27px] w-[65px] flex-none items-center text-[22px] leading-[26px] font-bold text-[#2C5A8C]">
                  4.9 / 5
                </p>
                <p className="order-0 flex h-[17px] w-[75px] flex-none items-center text-[11.9px] leading-4 font-medium text-[#3D504B]">
                  Patient rating
                </p>
                <p className="order-0 flex h-[15px] w-[73.67px] flex-none items-center self-stretch text-[11px] leading-[14px] font-medium tracking-[2px] text-[#C9A227]">
                  ★★★★★
                </p>
              </div>
            </div>

            <div className="order-1 box-border flex min-h-[100.89px] w-[222px] min-w-[170px] flex-1 flex-none flex-row items-center gap-3.5 self-stretch rounded-[18px] border border-[rgba(19,36,32,0.12)] bg-white px-[22px] py-5">
              <span className="order-0 flex h-11 w-11 flex-none shrink-0 flex-row items-center justify-center rounded-xl bg-[#DCE6F0] p-0">
                <img src={peopleIcon} alt="" className="h-5 w-5 object-contain" />
              </span>
              <div>
                <p className="order-0 flex h-[27px] w-14 flex-none items-center text-[22px] leading-[26px] font-bold text-[#2C5A8C]">
                  500+
                </p>
                <p className="order-0 flex h-[33px] w-[84px] flex-none items-center text-[11.9px] leading-4 font-medium text-[#3D504B]">
                  Happy patients treated
                </p>
              </div>
            </div>
          </div>

          <div className="order-4 box-border flex w-full max-w-[578.6px] flex-none flex-row flex-wrap items-center justify-between content-center gap-4 self-stretch rounded-[18px] border border-[rgba(19,36,32,0.12)] bg-white px-[26px] py-6">
            <div className="text-sm text-brand-900">
              <p className="order-0 flex h-[18px] w-[168px] flex-none items-center text-[13.5px] leading-[18px] text-[#132420]">
                <span className="font-bold">Mon – Sat</span>&nbsp;&nbsp;10AM – 8:30PM
              </p>
              <p className="order-0 flex h-[18px] w-[152px] flex-none items-center text-[13.5px] leading-[18px] text-[#132420]">
                <span className="font-bold">Sunday</span>&nbsp;&nbsp;&nbsp;10AM – 2:30PM
              </p>
            </div>
            <a
              href="#appointment"
              className="isolate flex shrink-0 items-center justify-center rounded-full bg-brand-700 px-6 py-3 shadow-[0px_14px_30px_-12px_rgba(44,90,140,0.4)] hover:bg-brand-800"
            >
              <span className="order-1 z-[1] flex h-[18px] w-[133px] flex-none items-center justify-center text-center text-[13.5px] leading-[18px] font-bold text-white">
                Book a Consultation
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
