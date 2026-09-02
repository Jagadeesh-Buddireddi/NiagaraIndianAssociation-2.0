"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Membership", href: "/membership" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { title: "Membership Benefits", href: "https://www.zeffy.com/en-CA/ticketing/niagara-indian-associations-memberships" },
  { title: "Business Directory", href: "#" },
  { title: "Volunteer", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#071c32] text-white">

      {/* =====================================================
          DECORATIVE INDIA / CANADA WAVES
      ===================================================== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 overflow-hidden opacity-20">
        <div className="absolute -bottom-28 left-[-5%] h-48 w-[55%] rotate-[-5deg] rounded-[50%] border-[25px] border-orange-500" />

        <div className="absolute -bottom-36 left-[25%] h-48 w-[55%] rotate-[3deg] rounded-[50%] border-[25px] border-white" />

        <div className="absolute -bottom-44 left-[50%] h-48 w-[55%] rotate-[-4deg] rounded-[50%] border-[25px] border-green-600" />
      </div>


      {/* =====================================================
          MAIN FOOTER CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* =================================================
              NIA BRAND
          ================================================= */}
          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >

              {/* Actual NIA Logo */}
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/images/footerLogo.png"
                  alt="Niagara Indian Association"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Niagara Indian Association
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  Community • Culture • Connection
                </p>
              </div>

            </Link>


            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Connecting communities, celebrating culture and building
              meaningful relationships across the Niagara Region.
            </p>


            <p className="mt-3 text-sm font-semibold text-white">
              Uniting Cultures. Building Communities. Celebrating Heritage.
            </p>


            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}
            <div className="mt-7 flex items-center gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#1877F2]
                "
              >
                <FaFacebookF size={17} />
              </a>


              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E4405F]
                "
              >
                <FaInstagram size={18} />
              </a>


              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#FF0000]
                "
              >
                <FaYoutube size={18} />
              </a>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-slate-400
                      transition
                      hover:text-white
                    "
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              RESOURCES
          ================================================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="
                      text-sm
                      text-slate-400
                      transition
                      hover:text-white
                    "
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Location */}
              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-orange-400"
                />

                <p className="text-sm leading-6 text-slate-400">
                  Niagara Region,
                  <br />
                  Ontario, Canada
                </p>

              </div>


              {/* Email */}
              <a
                href="mailto:info@niagaraindians.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-400
                  transition
                  hover:text-white
                "
              >
                <Mail
                  size={18}
                  className="shrink-0 text-orange-400"
                />

                info@niagaraindians.com
              </a>


              {/* Phone */}
              <a
                href="tel:+12892152601"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-400
                  transition
                  hover:text-white
                "
              >
                <Phone
                  size={18}
                  className="shrink-0 text-orange-400"
                />

                +1 (905) 347 - 4347
              </a>

            </div>


            {/* Membership */}
            <Link
              href="/membership"
              className="
                mt-7
                inline-flex
                items-center
                rounded-full
                bg-orange-500
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition
                hover:bg-orange-600
              "
            >
              Become a Member
            </Link>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}
        <div className="my-12 h-px bg-white/10" />


        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}
        <div className="flex flex-col gap-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Niagara Indian Association (NIA).
            All rights reserved.
          </p>


          <div className="flex items-center gap-6">
            <span>Community</span>
            <span>Culture</span>
            <span>Connection</span>
          </div>


          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white
              transition
              hover:bg-white/10
            "
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}