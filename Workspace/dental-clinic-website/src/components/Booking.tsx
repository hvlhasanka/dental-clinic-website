import { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi2";

const STEPS = [
  {
    number: 1,
    title: "Choose a service",
    description: "Pick the treatment and dentist that matches what you need.",
  },
  {
    number: 2,
    title: "Pick a date & time",
    description:
      "Browse real-time availability and choose a slot that fits your week.",
  },
  {
    number: 3,
    title: "Confirm your details",
    description: "Fill in your information and lock in the booking.",
  },
  {
    number: 4,
    title: "Visit the clinic",
    description: "Arrive at our clinic and we'll take care of the rest.",
  },
];

const VISIT_REASONS = ["Routine checkup", "New patient visit", "Emergency"];

function Booking() {
  const [selectedReason, setSelectedReason] = useState(VISIT_REASONS[0]);
  const [isDateFieldActive, setIsDateFieldActive] = useState(false);

  return (
    <section
      id="appointment"
      className="scroll-mt-20 bg-white pt-8 pb-8 lg:pt-12 lg:pb-12"
    >
      <div
        className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-12 overflow-hidden rounded-[36px] px-6 py-6 shadow-[0px_60px_100px_-50px_rgba(19,36,32,0.55)] sm:px-8 sm:py-8 lg:grid-cols-2 lg:gap-0 lg:px-12 lg:py-10"
        style={{
          background:
            "linear-gradient(143.44deg, #163A5C 0%, #2C5A8C 46%, #4A7FB0 100%)",
        }}
      >
        <span
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(102.96% 163.75% at 12% 15%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 42%), radial-gradient(104.67% 166.48% at 90% 85%, rgba(232,106,79,0.28) 0%, rgba(232,106,79,0) 45%), radial-gradient(97.99% 155.85% at 80% 10%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 35%)",
          }}
        />
        {/* Left column */}
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-[18px] flex-none bg-[#E86A4F]" />
              <span className="flex items-center text-[12.5px] leading-[17px] font-bold tracking-[1.75px] text-[#CFE0F2] uppercase">
                How it works
              </span>
            </div>
            <h2 className="max-w-[360px] text-3xl font-bold text-white sm:text-4xl lg:text-[32px] lg:leading-[37px] lg:tracking-[-0.32px]">
              Four steps to your next appointment
            </h2>
            <p className="max-w-[360px] text-[14px] leading-[23px] font-medium text-white/72">
              From choosing a treatment to walking into the clinic — here's
              exactly what happens next.
            </p>
          </div>

          <ol className="flex flex-col gap-10">
            {STEPS.map(({ number, title, description }) => (
              <li key={number} className="flex items-start gap-4">
                <span className="relative h-11 w-11 flex-none">
                  {number === 1 && (
                    <span
                      className="absolute inset-0 z-0 rounded-3xl bg-white/[0.002]"
                      style={{ boxShadow: "0px 10px 24px -8px rgba(232,106,79,0.7)" }}
                    />
                  )}
                  <span
                    className={`relative z-[1] flex h-11 w-11 items-center justify-center rounded-3xl text-[17px] leading-[23px] font-bold text-white ${
                      number === 1
                        ? "bg-accent-500"
                        : "border border-white/35 bg-white/[0.12] backdrop-blur-[4px]"
                    }`}
                  >
                    {number}
                  </span>
                </span>
                <div>
                  <h3 className="text-[16px] leading-[22px] font-bold tracking-[-0.16px] text-white">
                    {title}
                  </h3>
                  <p className="mt-1 max-w-[199px] text-[12.2px] leading-[21px] font-medium text-white/[0.68]">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right column — booking form */}
        <div className="relative rounded-[28px] border border-white/35 bg-white/[0.14] p-[38px] backdrop-blur-[11px] lg:-ml-12">
          <span
            className="pointer-events-none absolute inset-0 z-0 rounded-[28px] bg-white/[0.002]"
            style={{
              boxShadow:
                "0px 30px 60px -30px rgba(10,20,30,0.5), inset 0px 1px 0px 1px rgba(255,255,255,0.5)",
            }}
          />
          <h3 className="text-[22px] leading-[30px] font-bold tracking-[-0.22px] text-white">
            Book an appointment
          </h3>
          <p className="mt-1 text-[13px] leading-[18px] font-medium text-white/75">
            We'll confirm your slot by phone within one business hour.
          </p>

          <form className="mt-6 flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="booking-name"
                  className="text-[11.5px] leading-4 font-bold tracking-[0.575px] text-white/85 uppercase"
                >
                  Name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  placeholder="Yash Saini"
                  className="rounded-xl border border-white/40 bg-white/[0.16] px-[14px] py-3 backdrop-blur-[3px] text-[14px] leading-[19px] font-medium text-white placeholder-white/[0.55] focus:border-white/40 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="booking-phone"
                  className="text-[11.5px] leading-4 font-bold tracking-[0.575px] text-white/85 uppercase"
                >
                  Phone number
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  placeholder="(999) 999 999"
                  className="rounded-xl border border-white/40 bg-white/[0.16] px-[14px] py-3 backdrop-blur-[3px] text-[14px] leading-[19px] font-medium text-white placeholder-white/[0.55] focus:border-white/40 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="booking-date"
                  className="text-[11.5px] leading-4 font-bold tracking-[0.575px] text-white/85 uppercase"
                >
                  Preferred date
                </label>
                <div className="relative">
                  <input
                    id="booking-date"
                    type={isDateFieldActive ? "date" : "text"}
                    placeholder="mm/dd/yyyy"
                    onFocus={() => setIsDateFieldActive(true)}
                    onBlur={(e) => {
                      if (!e.target.value) setIsDateFieldActive(false);
                    }}
                    className="w-full rounded-xl border border-white/40 bg-white/[0.16] px-[14px] py-3 backdrop-blur-[3px] text-[14px] text-white placeholder-white/[0.55] focus:border-white/40 focus:outline-none [&::-webkit-calendar-picker-indicator]:brightness-0"
                  />
                  {!isDateFieldActive && (
                    <HiOutlineCalendar className="pointer-events-none absolute top-1/2 right-[14px] h-4 w-4 -translate-y-1/2 text-white/60" />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="booking-time"
                  className="text-[11.5px] leading-4 font-bold tracking-[0.575px] text-white/85 uppercase"
                >
                  Preferred time
                </label>
                <input
                  id="booking-time"
                  type="time"
                  className="rounded-xl border border-white/40 bg-white/[0.16] px-[14px] py-3 backdrop-blur-[3px] text-[14px] text-white focus:border-white/40 focus:outline-none [&::-webkit-calendar-picker-indicator]:brightness-0"
                />
              </div>
            </div>

            <fieldset className="flex flex-col gap-2">
              <legend className="pb-2 text-[11.5px] leading-4 font-bold tracking-[0.575px] text-white/85 uppercase">
                Reason for visit
              </legend>
              <div className="flex flex-wrap gap-3">
                {VISIT_REASONS.map((reason) => (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setSelectedReason(reason)}
                    aria-pressed={selectedReason === reason}
                    className={`rounded-full border px-4 py-[9px] text-[11.5px] leading-4 font-bold tracking-[0.575px] uppercase transition-colors ${
                      selectedReason === reason
                        ? "border-[#E86A4F] bg-[#E86A4F] text-white"
                        : "border-white/40 bg-white/10 text-white/85 hover:border-white/60"
                    }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-department"
                className="text-[11.5px] leading-4 font-bold tracking-[0.575px] text-white/85 uppercase"
              >
                Department
              </label>
              <select
                id="booking-department"
                defaultValue="Root Canal Treatment"
                className="rounded-xl border border-white/40 bg-white/[0.16] px-[14px] py-3 backdrop-blur-[3px] text-[14px] text-white focus:border-white/40 focus:outline-none"
              >
                <option className="bg-brand-900">Root Canal Treatment</option>
                <option className="bg-brand-900">Teeth Whitening</option>
                <option className="bg-brand-900">Orthodontic Braces</option>
                <option className="bg-brand-900">Dental Implants</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-concern"
                className="text-[11.5px] leading-4 font-bold tracking-[0.575px] text-white/85 uppercase"
              >
                Specific concern (optional)
              </label>
              <textarea
                id="booking-concern"
                rows={1}
                placeholder="Anything we should know beforehand?"
                className="resize-none rounded-xl border border-white/40 bg-white/[0.16] px-[14px] py-3 backdrop-blur-[3px] text-[14px] leading-[19px] font-medium text-white placeholder-white/[0.55] focus:border-white/40 focus:outline-none"
              />
            </div>

            <div className="relative mt-2">
              <span
                className="absolute inset-0 z-0 rounded-full bg-white/[0.002]"
                style={{ boxShadow: "0px 14px 30px -12px rgba(232,106,79,0.55)" }}
              />
              <button
                type="button"
                className="relative z-[1] flex w-full items-center justify-center rounded-full bg-accent-500 px-6 py-4 text-[15px] leading-[20px] font-bold text-white hover:bg-accent-400"
              >
                Book Appointment
              </button>
            </div>

            <p className="text-center text-[11.3px] leading-[15px] font-medium text-white/65">
              No payment required today — you'll pay at the clinic.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
