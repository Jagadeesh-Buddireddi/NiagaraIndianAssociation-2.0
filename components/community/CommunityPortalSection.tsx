"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Gift,
  Megaphone,
  QrCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const portalFeatures = [
  {
    icon: BadgeCheck,
    eyebrow: "MEMBERSHIP",
    title: "Digital Membership Card",
    description:
      "Access a digital NIA membership card, check membership status and use QR verification.",
  },
  {
    icon: Gift,
    eyebrow: "BENEFITS",
    title: "Member Benefits",
    description:
      "Discover current offers and discounts from participating NIA businesses.",
  },
  {
    icon: Building2,
    eyebrow: "DIRECTORY",
    title: "Business Directory",
    description:
      "Find participating businesses and professionals across the Niagara community.",
  },
  {
    icon: Megaphone,
    eyebrow: "UPDATES",
    title: "Announcements",
    description:
      "Keep up with important NIA updates, notices and community information.",
  },
];

export default function CommunityPortalSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="community-portal"
      className="relative isolate overflow-hidden bg-[#07182f] py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="community-portal-title"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 8% 20%, rgba(242,140,40,0.17), transparent 28%), radial-gradient(circle at 92% 78%, rgba(22,131,74,0.18), transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.025), transparent 48%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
        }}
      />

      {/* NIA tricolor accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #f28c28 0%, #f28c28 33%, #fffdf8 33%, #fffdf8 66%, #16834a 66%, #16834a 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main two-column composition */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 xl:gap-20">
          {/* Left: message */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-2xl lg:max-w-xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black tracking-[0.2em] text-orange-200 sm:text-[11px]">
              <Sparkles size={14} />
              NIA DIGITAL COMMUNITY
            </div>

            <h2
              id="community-portal-title"
              className="text-4xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl xl:text-[4.25rem]"
            >
              Your NIA community,
              <span className="mt-2 block text-orange-300">
                connected in one place.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              The official NIA Member &amp; Community Portal brings
              membership services, member benefits, local business discovery
              and community announcements together in one convenient online
              experience.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="https://app.niagaraindians.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-6 py-3.5 text-sm font-extrabold text-[#07182f] shadow-[0_14px_38px_rgba(242,140,40,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-orange-300"
              >
                Open NIA Portal
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 text-xs font-semibold text-slate-300">
                <ShieldCheck size={16} className="text-emerald-300" />
                Official online portal
              </div>
            </div>

          </motion.div>

          {/* Right: actual portal mockup */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="relative lg:pl-2"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-orange-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/[0.055] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-3">
              {/* Browser-like frame */}
              <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#fdf7ef]">
                <div className="flex h-9 items-center gap-2 border-b border-[#e9d9c5] bg-white px-3">
                  <span className="size-2.5 rounded-full bg-[#ef8b25]/80" />
                  <span className="size-2.5 rounded-full bg-slate-300" />
                  <span className="size-2.5 rounded-full bg-[#16834a]/70" />
                  <div className="ml-2 flex-1 rounded-full bg-slate-100 px-3 py-1 text-[8px] text-slate-400">
                    app.niagaraindians.com
                  </div>
                </div>

                <Image
                  src="/images/app/nia-dashboard.png"
                  alt="Fictional preview of an NIA online community portal dashboard"
                  width={1600}
                  height={818}
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* Floating callouts */}
            <div className="pointer-events-none absolute -left-2 top-10 hidden rounded-2xl border border-white/10 bg-[#0c2341]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block xl:-left-10">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-orange-400/15 text-orange-300">
                  <QrCode size={18} />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-white">
                    Digital Card
                  </p>
                  <p className="text-[10px] text-slate-400">
                    QR verification
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-2 bottom-8 hidden rounded-2xl border border-white/10 bg-[#0c2341]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block xl:-right-10">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  <Building2 size={18} />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-white">
                    Business Directory
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Discover local businesses
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature row */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {portalFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.a
                key={feature.title}
                href="https://app.niagaraindians.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
                className="group relative min-h-[178px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-white/[0.075]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-orange-400/10 text-orange-300 ring-1 ring-inset ring-orange-300/10">
                    <Icon size={19} />
                  </span>

                  <ArrowRight
                    size={15}
                    className="mt-1 text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-300"
                  />
                </div>

                <p className="mt-5 text-[9px] font-black tracking-[0.18em] text-orange-200/75">
                  {feature.eyebrow}
                </p>

                <h3 className="mt-1 text-base font-extrabold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {feature.description}
                </p>

                <div className="pointer-events-none absolute -bottom-10 -right-10 size-24 rounded-full bg-orange-400/10 blur-2xl transition duration-500 group-hover:bg-orange-400/20" />
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
