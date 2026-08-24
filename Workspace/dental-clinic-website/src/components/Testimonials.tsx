const RATING = "4.9";
const REVIEW_COUNT = "180+ verified reviews";
const REVIEW_SOURCE = "Rated on Justdial & Practo";

const TESTIMONIALS = [
  {
    quote:
      "I used to dread the dentist. The team here actually explained what they were doing and why — first time that's happened for me.",
    initials: "RM",
    name: "Renu Malhotra",
    since: "Patient since 2026",
  },
  {
    quote:
      "Got my implant done here after two other clinics turned me away. Painless, well-planned, and the follow-up care was excellent.",
    initials: "AK",
    name: "Arjun Kapoor",
    since: "Patient since 2026",
  },
  {
    quote:
      "Dr. ___ is thorough and genuinely caring. The clinic is clean, the staff is friendly, and appointments always run on time.",
    initials: "SP",
    name: "Sanya Puri",
    since: "Patient since 2026",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-white pt-8 pb-8 lg:pt-16 lg:pb-[100px]"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-[18px] flex-none bg-[#E86A4F]" />
            <span className="flex items-center justify-center text-center text-[12.5px] leading-[17px] font-bold tracking-[1.75px] text-[#3B6EA5] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="max-w-2xl text-center text-3xl font-bold text-brand-700 sm:text-4xl lg:text-[36px] lg:leading-[49px] lg:tracking-[-0.36px]">
            The honest review from our
            <br />
            patients
          </h2>
          <p className="max-w-[569px] text-center text-[15.6px] leading-[28px] font-medium text-[#3D504B]">
            Every review here reflects the same thing we aim for in the
            chair: real care, clear communication, and a result you're happy
            to smile about.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div
            className="relative isolate flex w-full max-w-[640px] flex-row flex-wrap items-center justify-center gap-x-7 gap-y-0 rounded-[24px] px-[34px] py-[26px] text-center"
            style={{
              background: "linear-gradient(111.07deg, #2c5a8c 0%, #16324f 100%)",
              minHeight: "120px",
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 z-0 rounded-[24px]"
              style={{
                background: "rgba(255, 255, 255, 0.002)",
                boxShadow: "0px 30px 60px -30px rgba(44, 90, 140, 0.5)",
              }}
            />
            <div className="relative z-[1] flex flex-col items-start text-left">
              <span className="text-[42px] leading-[42px] font-bold text-white">
                {RATING}
              </span>
              <span className="mt-1 text-[16px] leading-[22px] font-medium tracking-[2px] text-[#C9A227]">
                ★★★★★
              </span>
            </div>
            <span className="relative z-[1] h-12 w-px flex-none bg-white/20" />
            <div className="relative z-[1] flex flex-col text-left">
              <span className="text-[16px] leading-[22px] font-bold text-white">
                {REVIEW_COUNT}
              </span>
              <span className="text-[12.7px] leading-[17px] font-medium text-white/75">
                {REVIEW_SOURCE}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, initials, name, since }) => (
            <div
              key={name}
              className="relative isolate flex flex-col items-start gap-4 rounded-[18px] border border-[rgba(19,36,32,0.12)] bg-white px-[26px] py-7"
            >
              <span
                className="pointer-events-none absolute inset-0 z-0 rounded-[18px]"
                style={{
                  background: "rgba(255, 255, 255, 0.002)",
                  boxShadow: "0px 12px 30px -20px rgba(19, 36, 32, 0.2)",
                }}
              />
              <span
                className="relative z-[1] block self-stretch text-[44px] leading-[44px] font-normal text-[#E86A4F]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                “
              </span>
              <span className="relative z-[1] text-[16px] leading-[22px] font-medium tracking-[2px] text-[#C9A227]">
                ★★★★★
              </span>
              <p className="relative z-[1] text-[14px] leading-[24px] font text-[#3D504B]">
                {quote}
              </p>
              <div className="relative z-[1] mt-1 flex items-center gap-3">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[22px] bg-[#DCE6F0] text-center text-[13px] leading-[18px] font-bold text-brand-700">
                  {initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] leading-[19px] font-bold text-[#132420]">
                    {name}
                  </span>
                  <span className="text-[11.8px] leading-4 font-medium text-[#3D504B]">
                    {since}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#appointment"
            className="flex h-[52px] w-[195px] items-center justify-center rounded-full border border-[rgba(19,36,32,0.12)] px-[30px] py-[15px] text-[15px] leading-[20px] font-bold text-brand-700 hover:bg-surface-alt"
          >
            See All Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
