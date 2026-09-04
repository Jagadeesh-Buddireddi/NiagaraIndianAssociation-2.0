"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

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
  {
    title: "Membership Benefits",
    href: "https://www.zeffy.com/en-CA/ticketing/niagara-indian-associations-memberships",
    external: true,
  },
  {
    title: "Business Directory",
    href: "https://app.niagaraindians.com/",
    external: true,
  },
  {
    title: "Volunteer",
    href: "/contact",
    external: false,
  },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#071c32] text-white">

      {/* =====================================================
          CINEMATIC AMBIENT BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 35, 0], y: [0, 20, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[-8rem] top-1/3 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -30, 0], y: [0, 35, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.12, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* =====================================================
          DECORATIVE INDIA / CANADA WAVES
      ===================================================== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 overflow-hidden opacity-20">
        <motion.div
          className="absolute -bottom-28 left-[-5%] h-48 w-[55%] rotate-[-5deg] rounded-[50%] border-[25px] border-orange-500"
          animate={shouldReduceMotion ? undefined : { x: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-36 left-[25%] h-48 w-[55%] rotate-[3deg] rounded-[50%] border-[25px] border-white"
          animate={shouldReduceMotion ? undefined : { x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-44 left-[50%] h-48 w-[55%] rotate-[-4deg] rounded-[50%] border-[25px] border-green-600"
          animate={shouldReduceMotion ? undefined : { x: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>


      {/* =====================================================
          MAIN FOOTER CONTENT
      ===================================================== */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

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
              <motion.a
                href="https://www.facebook.com/NiagaraIndianAssociation/"
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
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              >
                <FaFacebookF size={17} />
              </motion.a>


              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/niagaraindianassociation"
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
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              >
                <FaInstagram size={18} />
              </motion.a>


              {/* YouTube */}
              <motion.a
                href="https://www.youtube.com/@Niagaraindians"
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
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              >
                <FaYoutube size={18} />
              </motion.a>

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
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.title}
                    <ArrowRight
                      size={13}
                      className="translate-x-0 opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
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
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.title}
                      <ArrowRight
                        size={13}
                        className="translate-x-0 opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.title}
                      <ArrowRight
                        size={13}
                        className="translate-x-0 opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  )}
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
                href="tel:+19053474347"
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
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-block"
            >
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
            </motion.div>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}
        <motion.div
          className="my-12 h-px origin-left bg-gradient-to-r from-orange-400/60 via-white/10 to-green-500/60"
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />


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
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.08 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
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
          </motion.button>

        </div>

      </motion.div>
    </footer>
  );
}
