"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf8]">

      {/* =========================================================
          DESKTOP / MOBILE BACKGROUND
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/nia-hero-background.jpg')",
        }}
      />


      {/* =========================================================
          MOBILE WHITE OVERLAY
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-r
          from-[#fffdf8]
          via-[#fffdf8]/95
          to-transparent
          lg:hidden
        "
      />


      {/* =========================================================
          DESKTOP OVERLAY
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          lg:block
        "
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


      {/* =========================================================
          SOFT GLOW
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-[2]
          w-[80%]
          bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.65)_40%,transparent_75%)]
          lg:w-[58%]
        "
      />


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-[20]
          flex
          min-h-[calc(100svh-72px)]
          items-center
          px-5
          py-16
          sm:px-8
          lg:px-[4.8vw]
          lg:py-20
        "
      >

        <div
          className="
            w-full
            max-w-[520px]
          "
        >


          {/* =====================================================
              EYEBROW
          ===================================================== */}

          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            className="
              mb-5
              flex
              flex-wrap
              items-center
              gap-1.5
              sm:gap-2
            "
          >

            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-orange-600 sm:text-[10px]">
              NIAGARA REGION
            </span>

            <span className="text-[9px] font-bold text-[#0b294b]">
              •
            </span>

            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#0b294b] sm:text-[10px]">
              COMMUNITY
            </span>

            <span className="text-[9px] font-bold text-[#0b294b]">
              •
            </span>

            <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-green-700 sm:text-[10px]">
              CULTURE
            </span>

          </motion.div>


          {/* =====================================================
              HEADING
          ===================================================== */}

          <motion.h1
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            className="
              text-[40px]
              font-black
              leading-[0.98]
              tracking-[-0.045em]
              text-[#0b294b]

              sm:text-[50px]

              md:text-[56px]

              lg:text-[62px]

              xl:text-[66px]
            "
          >
            Niagara Indian

            <br />

            <span className="text-orange-500">
              Association
            </span>

          </motion.h1>


          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.p
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            className="
              mt-5
              max-w-[430px]
              text-[13px]
              font-medium
              leading-6
              text-[#173653]

              sm:text-[14px]
              sm:leading-7

              lg:text-[15px]
            "
          >
            Bringing families, professionals, businesses and
            communities together across the Niagara Region while
            celebrating Indian culture, heritage and traditions.
          </motion.p>


          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="
              mt-6
              flex
              flex-wrap
              gap-3
              sm:mt-7
            "
          >

            {/* Become a Member */}

            <a
              href="/membership"
        
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-orange-500
                px-5
                py-3
                text-xs
                font-bold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition
                hover:-translate-y-1
                hover:bg-orange-600

                sm:px-6
                sm:py-3.5
                sm:text-sm
              "
            >
              Membership Info

              <ArrowRight size={15} />
            </a>


            {/* Explore Events */}

            <Link
              href="/events"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#0b294b]/30
                bg-white/90
                px-5
                py-3
                text-xs
                font-bold
                text-[#0b294b]
                shadow-sm
                backdrop-blur-sm
                transition
                hover:-translate-y-1
                hover:bg-white

                sm:px-6
                sm:py-3.5
                sm:text-sm
              "
            >
              Explore Events

              <ArrowRight size={15} />
            </Link>

          </motion.div>


          {/* =====================================================
              STATISTICS
          ===================================================== */}

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="
              mt-6
              flex
              w-full
              max-w-[470px]
              overflow-hidden
              rounded-2xl
              border
              border-white
              bg-white/90
              shadow-xl
              shadow-slate-900/10
              backdrop-blur-md
              sm:mt-7
            "
          >

            {/* =================================================
                MEMBERS
            ================================================= */}

            <div className="flex-1 px-3 py-3 sm:px-5 sm:py-4">

              <p className="text-lg font-black text-[#0b294b] sm:text-xl">
                1000+
              </p>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-wide text-[#173653]/70 sm:text-[9px]">
                Community Members
              </p>

            </div>


            {/* Divider */}

            <div className="my-3 w-px bg-[#0b294b]/10" />


            {/* =================================================
                EVENTS
            ================================================= */}

            <div className="flex-1 px-3 py-3 sm:px-5 sm:py-4">

              <p className="text-lg font-black text-[#0b294b] sm:text-xl">
                100+
              </p>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-wide text-[#173653]/70 sm:text-[9px]">
                Community Events
              </p>

            </div>


            {/* Divider */}

            <div className="my-3 w-px bg-[#0b294b]/10" />


            {/* =================================================
                LOCATION
            ================================================= */}

            <div className="flex-1 px-3 py-3 sm:px-5 sm:py-4">

              <p className="text-lg font-black text-[#0b294b] sm:text-xl">
                Niagara
              </p>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-wide text-[#173653]/70 sm:text-[9px]">
                Ontario, Canada
              </p>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="
          absolute
          bottom-5
          left-1/2
          z-[30]
          hidden
          -translate-x-1/2
          flex-col
          items-center
          md:flex
        "
      >

        <span className="mb-1 text-[8px] font-medium uppercase tracking-[0.4em] text-[#173653]/60">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ChevronDown
            size={17}
            className="text-[#173653]/60"
          />
        </motion.div>

      </motion.div>

    </section>
  );
}