"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-[#fffdf8]">
      {/* Cinematic background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/nia-hero-background.jpg')" }}
        initial={false}
        animate={reducedMotion ? undefined : { scale: [1, 1.035, 1] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Premium layered overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#fffdf8] via-[#fffdf8]/95 to-transparent lg:hidden"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(240,253,248,0.99) 0%,
              rgba(255,253,248,0.98) 24%,
              rgba(255,253,248,0.94) 34%,
              rgba(255,253,248,0.78) 42%,
              rgba(255,253,248,0.42) 51%,
              rgba(255,253,248,0.08) 61%,
              rgba(255,253,248,0) 70%
            )
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[82%] bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.68)_40%,transparent_75%)] lg:w-[58%]"
      />

      {/* Ambient premium light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 z-[3] h-72 w-72 rounded-full bg-orange-400/10 blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, 45, 0], y: [0, 25, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[16%] z-[3] hidden h-64 w-64 rounded-full bg-sky-400/10 blur-3xl lg:block"
        animate={reducedMotion ? undefined : { x: [0, -35, 0], y: [0, 35, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Subtle grain/grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4] opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,41,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,41,75,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to right, black 0%, transparent 72%)",
        }}
      />

      <div className="relative z-[20] flex min-h-[calc(100svh-72px)] items-center px-5 py-16 sm:px-8 lg:px-[4.8vw] lg:py-20">
        <div className="w-full max-w-[560px]">
          {/* Eyebrow */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            className="mb-5 flex flex-wrap items-center gap-1.5 sm:gap-2"
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-orange-600 sm:text-[10px]">
              NIAGARA REGION
            </span>
            <span className="text-[9px] font-bold text-[#0b294b]">•</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#0b294b] sm:text-[10px]">
              COMMUNITY
            </span>
            <span className="text-[9px] font-bold text-[#0b294b]">•</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-green-700 sm:text-[10px]">
              CULTURE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={false}
            animate={reducedMotion ? undefined : { opacity: 1, y: [8, 0] }}
            transition={reducedMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
            className="text-[40px] font-black leading-[0.96] tracking-[-0.05em] text-[#0b294b] sm:text-[50px] md:text-[56px] lg:text-[62px] xl:text-[66px]"
          >
            Niagara Indian
            <br />
            <span className="relative inline-block text-orange-500">
              Association
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-orange-500 via-white to-green-600"
                initial={false}
                animate={reducedMotion ? undefined : { width: ["18%", "100%", "18%"] }}
                transition={
                  reducedMotion
                    ? undefined
                    : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={false}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reducedMotion ? undefined : { duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-[465px] text-[13px] font-medium leading-6 text-[#173653] sm:text-[14px] sm:leading-7 lg:text-[15px]"
          >
            Bringing families, professionals, businesses and communities
            together across the Niagara Region while celebrating Indian
            culture, heritage and traditions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={false}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reducedMotion ? undefined : { duration: 0.7, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Link
              href="/membership"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-orange-500 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Membership Info</span>
              <ArrowRight size={15} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/events"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#0b294b]/30 bg-white/90 px-5 py-3 text-xs font-bold text-[#0b294b] shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white hover:shadow-lg sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Explore Events
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust / stats glass panel */}
          <motion.div
            initial={false}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reducedMotion ? undefined : { duration: 0.7, delay: 0.3 }}
            className="relative mt-7 flex w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-xl shadow-slate-900/10 backdrop-blur-xl"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-orange-500 via-white to-green-600"
            />

            <div className="flex-1 px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-lg font-black text-[#0b294b] sm:text-xl">1000+</p>
              <p className="mt-1 text-[7px] font-bold uppercase tracking-wide text-[#173653]/70 sm:text-[9px]">
                Community Members
              </p>
            </div>

            <div className="my-3 w-px bg-[#0b294b]/10" />

            <div className="flex-1 px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-lg font-black text-[#0b294b] sm:text-xl">100+</p>
              <p className="mt-1 text-[7px] font-bold uppercase tracking-wide text-[#173653]/70 sm:text-[9px]">
                Community Events
              </p>
            </div>

            <div className="my-3 w-px bg-[#0b294b]/10" />

            <div className="flex-1 px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-lg font-black text-[#0b294b] sm:text-xl">Niagara</p>
              <p className="mt-1 text-[7px] font-bold uppercase tracking-wide text-[#173653]/70 sm:text-[9px]">
                Ontario, Canada
              </p>
            </div>
          </motion.div>

          {/* Signature line */}
          <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#173653]/55">
            <Sparkles size={12} className="text-orange-500" />
            <span>Culture, connection and community</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={false}
        animate={reducedMotion ? undefined : { opacity: 1 }}
        className="absolute bottom-5 left-1/2 z-[30] hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <span className="mb-1 text-[8px] font-medium uppercase tracking-[0.4em] text-[#173653]/60">
          Scroll
        </span>
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 1.5, repeat: Infinity }
          }
        >
          <ChevronDown size={17} className="text-[#173653]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
