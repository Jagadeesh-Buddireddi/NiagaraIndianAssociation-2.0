import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const MEMBERSHIP_URL =
  "https://www.zeffy.com/en-CA/ticketing/niagara-indian-associations-memberships";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[9999] w-full border-b border-slate-200 bg-white shadow-sm">
      {/* MAIN NAVBAR */}
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LOGO */}
        <Link
          href="/"
          aria-label="Niagara Indian Association Home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/nia-logo.png"
            alt="Niagara Indian Association"
            width={60}
            height={60}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-1 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP MEMBERSHIP */}
        <a
          href={MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 lg:inline-flex"
        >
          Become a Member
          <ArrowRight size={15} />
        </a>

        {/* MOBILE MENU */}
        <details className="group relative lg:hidden">

          {/* HAMBURGER */}
          <summary
            className="
              flex
              h-11
              w-11
              cursor-pointer
              list-none
              items-center
              justify-center
              rounded-xl
              border
              border-slate-300
              bg-white
              text-[#0B1F3A]
              shadow-sm
              outline-none
              transition
              hover:bg-slate-50
              [&::-webkit-details-marker]:hidden
            "
          >
            <Menu
              size={23}
              strokeWidth={2}
              className="block group-open:hidden"
            />

            <X
              size={23}
              strokeWidth={2}
              className="hidden group-open:block"
            />
          </summary>

          {/* MOBILE MENU PANEL */}
          <div
            className="
              fixed
              left-0
              right-0
              top-[72px]
              z-[9998]
              max-h-[calc(100vh-72px)]
              overflow-y-auto
              border-t
              border-slate-200
              bg-white
              shadow-2xl
            "
          >
            <nav className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
              <div className="flex flex-col">

                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      flex
                      min-h-[52px]
                      items-center
                      border-b
                      border-slate-100
                      py-3
                      text-base
                      font-semibold
                      text-[#0B1F3A]
                      transition-colors
                      hover:text-orange-500
                    "
                  >
                    {link.label}
                  </Link>
                ))}

                {/* MOBILE MEMBERSHIP */}
                <a
                  href={MEMBERSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-orange-500
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-orange-600
                  "
                >
                  Become a Member
                  <ArrowRight size={16} />
                </a>

              </div>
            </nav>
          </div>

        </details>
      </div>
    </header>
  );
}