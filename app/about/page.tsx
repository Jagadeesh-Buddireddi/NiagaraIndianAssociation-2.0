"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  HandHeart,
  Handshake,
  Heart,
  Landmark,
  Users,
} from "lucide-react";
import LeadershipSection from "@/components/about/LeadershipSection";

const focusAreas = [
  {
    title: "Culture & Heritage",
    description:
      "Celebrating festivals, traditions, arts and languages that connect generations to their roots and keep our cultural heritage alive.",
    icon: Landmark,
  },
  {
    title: "Service & Volunteering",
    description:
      "Giving back through volunteer initiatives, youth engagement, mentorship and programs that support people across Niagara.",
    icon: HandHeart,
  },
  {
    title: "Partnership",
    description:
      "Working alongside local businesses, organizations and community leaders to create opportunities and build a stronger Niagara.",
    icon: Handshake,
  },
];

const communities = [
  "Niagara Falls",
  "St. Catharines",
  "Welland",
  "Niagara-on-the-Lake",
  "Thorold",
  "Surrounding Niagara communities",
];

const activities = [
  "Cultural festivals and celebrations",
  "Wellness and community programs",
  "Youth activities and mentorship",
  "Family and community gatherings",
  "Seniors outreach",
  "Business and community networking",
];


const motionEase = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: motionEase },
  },
};

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
      variants: reveal,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.18 },
    };

  return (
    <main className="relative overflow-x-clip bg-[#fffdf8] text-slate-900">
      {/* =========================================================
          ABOUT HERO
          Reference-matched editorial composition:
          cream canvas + compact left copy + oversized right photograph
          with a sweeping curved edge and tricolor ribbon.
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-[#fffdf8]">
        {/* Soft heritage texture / atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-6 h-[360px] w-[360px] rounded-full border border-orange-100/80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-20 h-[280px] w-[280px] rounded-full border border-green-100/60"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-orange-200/20 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                x: [0, 18, -8, 0],
                y: [0, -12, 8, 0],
              }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Desktop editorial composition */}
        <div className="relative mx-auto h-[560px] max-w-[1600px] lg:h-[610px]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -22 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: motionEase }}
            className="relative z-[50] px-6 pt-16 sm:px-10 sm:pt-20 lg:absolute lg:left-[9.5%] lg:top-1/2 lg:w-[39%] lg:-translate-y-1/2 lg:px-0 lg:pt-0"
          >
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-orange-600 uppercase">
                About
              </span>
              <span className="text-[11px] font-bold tracking-[0.2em] text-green-700 uppercase">
                NIA
              </span>
            </div>

            <h1 className="max-w-[620px] font-serif text-[clamp(3.15rem,4.9vw,5.35rem)] font-semibold leading-[0.93] tracking-[-0.045em] text-[#102a43]">
              <span className="block">
                Preserving{" "}
                <span className="text-orange-600">Culture.</span>
              </span>
              <span className="block">
                Building{" "}
                <span className="text-green-700">Community.</span>
              </span>
            </h1>

            <div className="mt-6 flex items-center">
              <motion.span
                className="h-[2px] w-[78px] origin-left bg-orange-500"
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              />
              <span className="mx-0.5 h-2 w-2 rounded-full border-2 border-[#c59a4a] bg-[#fffdf8]" />
              <motion.span
                className="h-[2px] w-[104px] origin-left bg-green-700"
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.28 }}
              />
            </div>

            <p className="mt-5 max-w-[500px] text-[14px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              We are a non-profit, volunteer-driven organization dedicated to
              connecting, supporting and celebrating the Indian community
              across Niagara.
            </p>

            <div className="relative z-[60] isolate mt-9 flex flex-col gap-3 pb-4 sm:flex-row">
              <Link
                href="/membership"
                className="group relative z-[60] inline-flex items-center justify-center gap-3 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(234,88,12,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-[0_18px_40px_rgba(234,88,12,0.28)]"
              >
                <span>Become a Member</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/events"
                className="group relative z-[60] inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#102a43] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white hover:shadow-md"
              >
                <span>See Our Events</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE — oversized, horizontal and bleeding to the right */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: motionEase }}
            className="absolute right-[-7%] top-0 hidden h-full w-[67%] lg:block"
          >
            {/* Navy silhouette */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-[1%] right-[-1%] bg-[#102a43]"
              style={{
                clipPath: "ellipse(76% 72% at 76% 50%)",
              }}
            />

            {/* Main photograph */}
            <div
              className="absolute inset-y-0 left-0 right-0 overflow-hidden"
              style={{
                clipPath: "ellipse(74% 69% at 76% 50%)",
              }}
            >
              <motion.div
                className="absolute inset-0"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [1, 1.015, 1] }
                }
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/about/inaugration.jpg"
                  alt="Niagara Indian Association community gathered together"
                  fill
                  priority
                  sizes="67vw"
                  className="object-cover object-center"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#102a43]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081b2d]/25 via-transparent to-transparent" />
            </div>

            {/* Small NIA-inspired dot matrix */}
            <div className="absolute right-[5%] top-[17%] z-20 grid grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${index % 3 === 0
                      ? "bg-orange-500"
                      : index % 3 === 1
                        ? "bg-[#c59a4a]"
                        : "bg-green-600"
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Mobile photograph */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: motionEase }}
            className="relative mx-6 mb-12 h-[300px] overflow-hidden rounded-[36px] border-[7px] border-[#102a43] bg-[#102a43] shadow-[0_25px_60px_rgba(15,42,67,0.16)] lg:hidden sm:mx-10 sm:h-[380px]"
          >
            <Image
              src="/images/about/_R4A0164.jpg"
              alt="Niagara Indian Association community gathered together"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Flowing tricolor ribbon — full-width, no card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 z-10 h-[92px] w-full overflow-hidden"
          >
            <motion.div
              className="absolute -left-[7%] bottom-[24px] h-14 w-[72%] rounded-[50%] border-t-[5px] border-orange-400/90"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                    x: [0, 14, -6, 0],
                    rotate: [0, 0.5, -0.4, 0],
                  }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute left-[22%] bottom-[19px] h-14 w-[70%] rounded-[50%] border-t-[5px] border-green-600/85"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                    x: [0, -12, 7, 0],
                    rotate: [0, -0.5, 0.4, 0],
                  }
              }
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full border border-orange-100"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-70px] top-[-70px] h-[260px] w-[260px] rounded-full border border-green-100"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-orange-600 uppercase">
                Who We Are
              </p>
              <h2 className="mt-4 max-w-md font-serif text-4xl font-semibold leading-tight tracking-tight text-[#102a43] sm:text-5xl">
                A community built around{" "}
                <span className="text-green-700">belonging.</span>
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-green-700" />
            </div>

            <div className="relative overflow-hidden rounded-[30px] bg-[#102a43] p-7 text-white shadow-[0_25px_65px_rgba(15,42,67,0.16)] sm:p-10">
              <div className="absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full border border-white/10" />
              <div className="absolute bottom-[-100px] left-[15%] h-60 w-60 rounded-full border border-orange-400/10" />

              <div className="relative">
                <p className="max-w-3xl text-lg leading-8 text-slate-200">
                  The Niagara Indian Association is a non-profit,
                  volunteer-driven organization dedicated to preserving Indian
                  culture, celebrating heritage and supporting the Indian
                  community across Niagara.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                  Powered by volunteers, NIA connects families, individuals and
                  community partners through cultural celebrations, service,
                  mentorship and meaningful opportunities to participate in
                  community life. We aim to create a welcoming place for
                  newcomers, families, professionals and everyone who wants to
                  contribute to a stronger Niagara.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                icon: Users,
                title: "Volunteer Driven",
                description: "Powered by passionate community volunteers",
              },
              {
                icon: Heart,
                title: "Stronger Together",
                description: "Uniting families and individuals across Niagara",
              },
              {
                icon: Award,
                title: "Making an Impact",
                description: "Creating meaningful change in our community",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                  className="group rounded-2xl border border-slate-200 bg-[#fffdf8] p-6 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,42,67,0.08)]"
                >
                  <div
                    className={`mb-5 grid h-11 w-11 place-items-center rounded-xl ${index === 0
                        ? "bg-orange-50 text-orange-600"
                        : index === 1
                          ? "bg-green-50 text-green-700"
                          : "bg-slate-100 text-[#102a43]"
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-[#102a43]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#fffdf8] py-20 sm:py-24">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 35, 0], y: [0, -20, 0] }
          }
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-orange-600 uppercase">
                What We Do
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#102a43] sm:text-5xl">
                Culture, service &{" "}
                <span className="text-green-700">connection.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-500">
              Our work brings together cultural celebration, community
              service, partnerships and opportunities for people of all ages
              across Niagara.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 30 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: motionEase,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -7, scale: 1.01 }
                  }
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(15,42,67,0.045)] transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(15,42,67,0.1)]"
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 ${index === 0
                        ? "bg-orange-500"
                        : index === 1
                          ? "bg-[#c59a4a]"
                          : "bg-green-700"
                      }`}
                  />

                  <div className="flex items-start justify-between gap-6">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 text-[#102a43] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-serif text-5xl font-semibold text-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-[#102a43]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-500">
                    {area.description}
                  </p>

                  <div className="mt-7 h-px w-0 bg-gradient-to-r from-orange-500 to-green-700 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP
          Existing NIA leadership component is preserved.
      ========================================================== */}
      <LeadershipSection />

      {/* =========================================================
          COMMUNITY LIFE
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-orange-600 uppercase">
                Community Life
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#102a43] sm:text-5xl">
                There is always a way to{" "}
                <span className="text-green-700">get involved.</span>
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-slate-500">
                From cultural celebrations to youth programs, wellness
                initiatives and community networking, NIA creates opportunities
                for people and families to connect throughout the year.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {communities.map((community, index) => (
                  <motion.span
                    key={community}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, scale: 0.9 }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 1, scale: 1 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="rounded-full border border-slate-200 bg-[#fffdf8] px-3.5 py-2 text-xs font-medium text-slate-600"
                  >
                    {community}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 22 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -4 }
                  }
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#fffdf8] p-6 transition-all duration-300 hover:border-orange-200 hover:shadow-[0_18px_40px_rgba(15,42,67,0.07)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-slate-300">
                      0{index + 1}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-[#102a43]">
                    {activity}
                  </h3>
                  <div className="mt-5 h-0.5 w-8 bg-gradient-to-r from-orange-500 to-green-700 transition-all duration-300 group-hover:w-16" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY RECOGNITION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#102a43] py-20 text-white sm:py-24">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-orange-400/10"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: [0, 360] }
          }
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-green-400/10"
        />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-bold tracking-[0.16em] text-orange-400 uppercase">
              Community Recognition
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Celebrating the people who make{" "}
              <span className="text-green-400">NIA possible.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Our community is shaped by volunteers, families, partners,
              supporters and leaders who continue to contribute their time,
              energy and ideas.
            </p>

            <Link
              href="/gallery"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Explore NIA Moments
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INVOLVEMENT
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#fffdf8] py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-sm font-bold tracking-[0.16em] text-orange-600 uppercase">
              Get Involved
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#102a43] sm:text-5xl">
              Find your place in the{" "}
              <span className="text-green-700">community.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <motion.div
              {...fadeUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="group rounded-[28px] border border-orange-100 bg-white p-8 shadow-[0_15px_45px_rgba(15,42,67,0.05)] transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(15,42,67,0.1)] sm:p-10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-orange-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-semibold text-[#102a43]">
                Become a Member
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                Join NIA and be part of a community that celebrates culture,
                builds connections and creates meaningful opportunities across
                Niagara.
              </p>
              <Link
                href="/membership"
                className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
              >
                Explore Membership
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="group rounded-[28px] border border-green-100 bg-white p-8 shadow-[0_15px_45px_rgba(15,42,67,0.05)] transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(15,42,67,0.1)] sm:p-10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-green-700">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-semibold text-[#102a43]">
                Partner With NIA
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                Work with us to support community initiatives, cultural
                programs, events and opportunities that help build a stronger
                Niagara.
              </p>
              <Link
                href="/contact"
                className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[34px] bg-[#102a43] px-7 py-14 text-center text-white shadow-[0_30px_80px_rgba(15,42,67,0.18)] sm:px-12 sm:py-20">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-orange-400/15"
            animate={
              shouldReduceMotion
                ? undefined
                : { rotate: [0, 360] }
            }
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full border border-green-400/15"
            animate={
              shouldReduceMotion
                ? undefined
                : { rotate: [360, 0] }
            }
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />

          <motion.div {...fadeUp} className="relative">
            <p className="text-sm font-bold tracking-[0.16em] text-orange-400 uppercase">
              Your Community Awaits
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
              There&apos;s a place for you at{" "}
              <span className="text-green-400">NIA.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Whether you want to celebrate your heritage, meet new people,
              volunteer, partner with NIA or simply be part of the community,
              we would love to have you with us.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/membership"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
              >
                Become a Member
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Contact NIA
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
