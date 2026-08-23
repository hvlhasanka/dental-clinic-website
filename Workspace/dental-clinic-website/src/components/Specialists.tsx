import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "Twitter", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
];

const SPECIALIST_PHOTO_URL =
  "https://res.cloudinary.com/jvhaorsn/image/upload/v1787521152/specialists-image_p7yetw.png";

const SPECIALISTS = [
  { name: "Dr. ___", title: "Founder & Cosmetic Dentist", rating: "4.9" },
  { name: "Dr. ___", title: "Founder & Cosmetic Dentist", rating: "4.9" },
  { name: "Dr. ___", title: "Founder & Cosmetic Dentist", rating: "4.9" },
];

function Specialists() {
  return (
    <section
      id="specialists"
      className="scroll-mt-20 bg-brand-700 pt-8 pb-8 lg:pt-16 lg:pb-[100px]"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-[18px] flex-none bg-[#E86A4F]" />
            <span className="flex items-center justify-center text-center text-[12.5px] leading-[17px] font-bold tracking-[1.75px] text-[#DCE6F0] uppercase">
              Our team
            </span>
          </div>
          <h2 className="max-w-2xl text-center text-3xl font-bold text-white sm:text-4xl lg:text-[38px] lg:leading-[51px] lg:tracking-[-0.38px]">
            Meet our specialists
          </h2>
          <p className="max-w-[488px] text-center text-[15.4px] leading-[21px] font-medium text-white/70">
            We only work with dentists who treat every patient like their only
            one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALISTS.map(({ name, title, rating }, index) => (
            <div
              key={index}
              className="mx-auto flex min-h-[303px] w-full max-w-[320px] flex-col items-center gap-1 rounded-[18px] border border-white/[0.14] bg-white/5 px-[22px] pt-[26px] pb-6 text-center"
            >
              <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full">
                <div
                  role="img"
                  aria-label={name}
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${SPECIALIST_PHOTO_URL})`,
                    backgroundSize: "85%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>

              <div className="mt-3 flex flex-col gap-1">
                <h3 className="text-[18px] leading-6 font-bold tracking-[-0.18px] text-white">
                  {name}
                </h3>
                <p className="text-[13px] leading-[18px] font-bold text-[#DCE6F0]">
                  {title}
                </p>
              </div>

              <div className="mt-2 flex items-center gap-1">
                <span className="text-[12px] leading-4 tracking-[1px] text-[#C9A227]">
                  ★★★★★
                </span>
                <span className="text-[12.5px] leading-[17px] font-medium text-white/70">
                  {rating}
                </span>
              </div>

              <span className="mt-6 h-px w-[95%] flex-none bg-white/[0.12]" />

              <div className="mt-6 flex w-full items-center justify-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`${name} on ${label}`}
                    className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/20"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialists;
