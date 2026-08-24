import { FaFacebookF, FaYoutube, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import whiteLogo from "../assets/logo/white-logo.png";

const CLINIC_NAME = "Dental Clinic";
const CLINIC_BLURB =
  "Advanced dentistry with over 11 years of experience — from routine checkups to full implant and smile makeovers.";
const EMERGENCY_PHONE = "011-4XXX-XXXX";
const CONTACT_EMAIL = "doctor@test.com";
const CLINIC_CITY = "Colombo";

const HELPFUL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SUPPORT_LINKS = [
  { label: "Contact Support", href: "#" },
  { label: "Insurance", href: "#" },
  { label: "Careers", href: "#" },
];

const SOCIAL_LINKS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaXTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

function Footer() {
  return (
    <footer className="scroll-mt-20 bg-brand-700 pt-8 pb-8 lg:pt-16 lg:pb-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <img
              src={whiteLogo}
              alt={CLINIC_NAME}
              className="h-auto w-48 object-contain"
            />
            <p className="max-w-[257px] text-[13.1px] leading-[23px] font-medium text-white/75">
              {CLINIC_BLURB}
            </p>

            <form
              className="mt-2 flex w-full items-start gap-2 rounded-full border border-white/20 py-[2px] px-[6px]"
              style={{ height: "54px", paddingTop: "7px" }}
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="h-[40.9px] min-w-[182px] flex-1 bg-transparent px-3.5 py-[16.5px] text-[13.1px] leading-[18px] font-medium text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-[38px] w-[106px] flex-none items-center justify-center rounded-full bg-[#E86A4F] px-[27px] py-[9px] text-center text-[13px] leading-[18px] font-bold text-white hover:opacity-90"
              >
                Sign up
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4 pt-2 lg:pt-4">
            <h4 className="text-[14px] leading-[19px] font-bold text-white">
              Helpful Links
            </h4>
            <nav className="flex flex-col gap-3">
              {HELPFUL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[13.4px] leading-[18px] font-medium text-white/75 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-2 lg:pt-4">
            <h4 className="text-[14px] leading-[19px] font-bold text-white">
              Support
            </h4>
            <nav className="flex flex-col gap-3">
              {SUPPORT_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[13.4px] leading-[18px] font-medium text-white/75 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-2 lg:pt-4">
            <h4 className="text-[14px] leading-[19px] font-bold text-white">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <span className="text-[13.4px] leading-[18px] font-medium text-white/75">
                {CLINIC_CITY}
              </span>
              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="text-[13.4px] leading-[18px] font-medium text-white/75 hover:text-white"
              >
                {EMERGENCY_PHONE}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[13.4px] leading-[18px] font-medium text-white/75 hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#FFFFFF12] pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-[13.5px] leading-[18px] font-medium text-white/60">
              © 2026 {CLINIC_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[17px] bg-white/[0.08] text-white hover:bg-white/20"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
