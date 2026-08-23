import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const LOGO_URL =
  "https://res.cloudinary.com/jvhaorsn/image/upload/v1787434838/logo_pskq5j.png";
const PHONE_ICON_URL =
  "https://res.cloudinary.com/jvhaorsn/image/upload/v1787434911/phone-icon_jty6oa.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Appointment", href: "#appointment" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const EMERGENCY_PHONE = "011-4XXX-XXXX";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-alt bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center">
          <img src={LOGO_URL} alt="Dental Clinic" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center text-base leading-6 font-bold text-link hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${EMERGENCY_PHONE}`}
            className="flex items-center gap-3 rounded-full pr-2"
          >
            <img src={PHONE_ICON_URL} alt="" className="h-10 w-10 shrink-0" />
            <span className="flex flex-col justify-center">
              <span className="block text-[13.5px] leading-[18px] font-bold text-link">
                {EMERGENCY_PHONE}
              </span>
              <span className="block text-[13.5px] leading-[18px] font-bold text-[#182825]">
                Dental Emergency
              </span>
            </span>
          </a>

          <a
            href="#appointment"
            className="isolate box-border flex h-10 w-[109px] flex-none flex-row items-center justify-center rounded-full bg-brand-700 px-5 py-2.5 text-center text-[13.5px] leading-[18px] font-bold text-white shadow-[0px_14px_30px_-12px_rgba(44,90,140,0.4)] hover:bg-brand-800"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-surface-alt px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center rounded-md px-2 py-2 text-base leading-6 font-bold text-link hover:bg-surface-alt"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${EMERGENCY_PHONE}`}
            className="mt-3 flex items-center gap-3 rounded-md px-2 py-2"
          >
            <img src={PHONE_ICON_URL} alt="" className="h-7 w-7 shrink-0" />
            <span className="leading-tight">
              <span className="block text-base font-bold text-brand-900">
                {EMERGENCY_PHONE}
              </span>
              <span className="block text-sm font-bold text-brand-900">
                Dental Emergency
              </span>
            </span>
          </a>

          <a
            href="#appointment"
            className="mt-3 flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-center text-[13.5px] leading-[18px] font-bold text-white hover:bg-brand-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
