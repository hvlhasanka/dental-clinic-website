import { HiOutlineClock } from "react-icons/hi";

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/jvhaorsn/image/upload/v1787499612/hero-image_ilozmj.png";

const AVATAR_INITIALS = ["JC", "WW", "JW"];

function Hero() {
  return (
    <section id="home" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 pt-16 pb-8 lg:grid-cols-2 lg:px-8 lg:pt-24 lg:pb-12">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {/* Row 1: subheading row */}
          <div className="flex items-center gap-3">
            <span className="order-0 h-[2px] w-[18px] flex-none bg-[#E86A4F]" />
            <span className="order-1 flex h-[17px] w-[420px] max-w-full flex-none items-center text-[12.5px] leading-[17px] font-bold tracking-[1.75px] text-[#3B6EA5] uppercase">
              Multispeciality Dental Care &amp; Implants
            </span>
          </div>

          {/* Row 2: heading row */}
          <h1 className="flex flex-col text-4xl leading-tight font-bold sm:text-5xl lg:text-[58px] lg:leading-[61px] lg:tracking-[-0.58px]">
            <span className="text-[#2C5A8C]">Better teeth,</span>
            <span className="text-[#E86A4F]">better health</span>
          </h1>

          {/* Row 3: subcopy */}
          <p className="flex max-w-[461px] items-center text-[16.6px] leading-[29px] font-medium text-[#3D504B]">
            Led by Dr. ___, our clinic offers advanced dentistry with over 11
            years of experience — from routine checkups to full implant and
            smile makeovers.
          </p>

          {/* Row 4: buttons row */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="isolate order-0 box-border flex h-[52px] w-[221px] flex-none flex-row items-center justify-center rounded-full bg-brand-700 px-[30px] py-[15px] shadow-[0px_14px_30px_-12px_rgba(44,90,140,0.4)] hover:bg-brand-800"
            >
              <span className="order-1 z-[1] flex h-5 w-[159px] flex-none items-center justify-center text-center text-[15px] leading-5 font-bold text-white">
                Book an Appointment
              </span>
            </a>
            <a
              href="#services"
              className="order-1 box-border flex h-[52px] w-[187px] flex-none flex-row items-center justify-center rounded-full border border-[rgba(19,36,32,0.12)] px-[30px] py-[15px] hover:bg-surface-alt"
            >
              <span className="order-0 flex h-5 w-[125px] flex-none items-center justify-center text-center text-[15px] leading-5 font-bold text-[#2C5A8C]">
                Explore Services
              </span>
            </a>
          </div>

          {/* Row 5: ratings row */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATAR_INITIALS.map((initials) => (
                <span
                  key={initials}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-surface-alt"
                >
                  <span className="flex h-4 w-[18px] flex-none items-center justify-center text-center text-xs leading-4 font-bold text-[#2C5A8C]">
                    {initials}
                  </span>
                </span>
              ))}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-surface-alt text-xs font-bold text-brand-900">
                +
              </span>
            </div>
            <div>
              <span className="flex h-[19px] w-[71px] items-center text-[13px] leading-[18px] font-medium tracking-[2px] text-[#C9A227]">
                ★★★★★
              </span>
              <span className="flex h-[21px] w-[157.1px] max-w-full items-center text-[14.5px] leading-5 font-bold text-[#132420]">
                4.9 from 180+ patients
              </span>
            </div>
          </div>
        </div>

        {/* Right column — hero image and floating badges */}
        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <img
            src={HERO_IMAGE_URL}
            alt="Dr. ___, Dentist & Cosmetic specialist"
            className="h-auto w-full rounded-3xl object-cover"
          />

          <span
            className="absolute isolate z-[1] order-1 flex h-[67px] w-[116px] flex-none flex-col items-start gap-px rounded-2xl bg-brand-700 px-4 py-3 text-white"
            style={{ top: "-18px", right: "-31.26px" }}
          >
            <span className="order-1 z-[1] flex h-[27px] w-[45px] flex-none items-center text-[20px] leading-[27px] font-bold text-white">
              15k+
            </span>
            <span className="order-2 z-[2] flex h-[15px] w-[84px] flex-none items-center text-[11.1px] leading-[15px] font-medium text-white">
              patients treated
            </span>
          </span>

          <span className="absolute -bottom-6 left-0 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 sm:-left-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-100 text-accent-500">
              <HiOutlineClock className="h-5 w-5" />
            </span>
            <span className="order-0 flex h-[34px] w-[92px] flex-none flex-col items-start justify-center text-[12.5px] leading-[17px] font-medium text-[#132420]">
              <span className="block">Open today</span>
              <span className="block font-bold">10AM – 8:30PM</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
