"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type SponsorTier = "gold" | "silver" | "bronze";

type Sponsor = {
  name: string;
  logo: string;
  tier: SponsorTier;
  url?: string;
};

const sponsors: Sponsor[] = [
  {
    name: "AIMS Dentistry",
    logo: "/images/sponsors/aims-dentistry.png",
    url: "https://dentistryongarrison.com/",
    tier: "bronze",
  },
  {
    name: "HavenShield Security",
    logo: "/images/sponsors/havenshield-security.webp",
    url: "https://hvssecurity.ca/",
    tier: "silver",
  },
  {
    name: "Jill Anthony Law",
    logo: "/images/sponsors/jill-anthony-law.png",
    url: "https://jillanthony.com/",
    tier: "gold",
  },
  {
    name: "JK Motors",
    logo: "/images/sponsors/jk-motors.jpg",
    url: "https://www.facebook.com/jkmotorswelland/",
    tier: "silver",
  },
  {
    name: "Maxmoon Electricals",
    logo: "/images/sponsors/maxmoon-electricals.webp",
    url: "https://maxmoonelectricals.ca/",
    tier: "silver",
  },

  {
    name: "Parry Immigration",
    logo: "/images/sponsors/parry-immigration.png",
    url: "https://www.parryimmigration.com/",
    tier: "bronze",
  },
  {
    name: "Pranaah Ayurcare",
    logo: "/images/sponsors/pranaah-ayurcare.jpg",
    url: "https://pranaahayurcare.com/",
    tier: "bronze",
  },
  {
    name: "Taj Building Supplies",
    logo: "/images/sponsors/taj-building-supplies.jpg",
    url: "https://www.tajs.ca/",
    tier: "bronze",
  },
  {
    name: "Taj Enterprise",
    logo: "/images/sponsors/taj-enterprise.jpg",
    url: "https://www.instagram.com/taj_enterprise_niagara/",
    tier: "bronze",
  },
  {
    name: "UPS Store",
    logo: "/images/sponsors/ups-store.svg",
    url: "https://www.theupsstore.ca/192/",
    tier: "bronze",
  },
  {
    name: "WOW 1 Day Painting",
    logo: "/images/sponsors/wow-1-day-painting.svg",
    url: "https://www.wow1day.com/",
    tier: "gold",
  },
  {
    name: "XpressPill Pharmacy",
    logo: "/images/sponsors/xpresspill-pharmacy.png",
    url: "https://www.xpresspill.org/",
    tier: "gold",
  },
];

type CommunityPartner = {
  name: string;
  logo: string;
  url?: string;
};

const communityPartners: CommunityPartner[] = [
  {
    name: "NCFW Film Festival",
    logo: "/images/sponsors/ncfw-film-festival.jpg",
    url: "https://www.facebook.com/niagaracanadafilmfest/",
  },
   {
    name: "NCFW Fashion Week",
    logo: "/images/sponsors/ncfw-fashion-week.jpg",
    url: "https://www.instagram.com/niagaracanadafashionshow/",
  },
];

const goldSponsors = sponsors.filter(
  (sponsor) => sponsor.tier === "gold"
);

const silverSponsors = sponsors.filter(
  (sponsor) => sponsor.tier === "silver"
);

const bronzeSponsors = sponsors.filter(
  (sponsor) => sponsor.tier === "bronze"
);

function SponsorCard({
  sponsor,
  size,
}: {
  sponsor: Sponsor;
  size: "gold" | "silver" | "bronze";
}) {
  const image = (
    <Image
      src={sponsor.logo}
      alt={`${sponsor.name} logo`}
      width={220}
      height={110}
      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
      className={`
        w-auto max-w-full object-contain transition duration-500
        group-hover:scale-110
        ${size === "gold" ? "max-h-24" : size === "silver" ? "max-h-20" : "max-h-16"}
      `}
    />
  );

  const card = (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`
        group relative flex min-w-0 w-full items-center justify-center overflow-hidden
        rounded-[1.35rem] bg-white/90 backdrop-blur-sm
        shadow-[0_10px_35px_rgba(11,31,58,0.07)]
        transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(11,31,58,0.14)]
        ${size === "gold"
          ? "h-40 border-2 border-amber-300/80 px-6"
          : size === "silver"
            ? "h-34 border border-slate-300/90 px-5"
            : "h-28 border border-orange-200/90 px-4"}
      `}
    >
      <span
        className={`absolute inset-x-0 top-0 h-1 ${
          size === "gold"
            ? "bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300"
            : size === "silver"
              ? "bg-gradient-to-r from-slate-300 via-slate-500 to-slate-300"
              : "bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300"
        }`}
      />
      <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-400/10 blur-2xl transition duration-500 group-hover:bg-orange-400/20" />
      <span className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-green-500/10 blur-2xl transition duration-500 group-hover:bg-green-500/20" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {image}
      </div>
      <span className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/70" />
    </motion.div>
  );

  return sponsor.url ? (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className="block rounded-[1.35rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      {card}
    </a>
  ) : (
    card
  );
}

export default function SponsorsSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, ease: "easeOut" as const },
  };

  const tierReveal = (delay: number) => ({
    ...reveal,
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf8] px-5 py-16 sm:px-8 sm:py-20 lg:px-[5vw] lg:py-24">
      {/* Ambient premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-green-300/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,31,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,1) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          {...reveal}
          className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-orange-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-orange-500">
                Community Support
              </p>
              <span className="h-px w-9 bg-green-600" />
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              Our Sponsors
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              We are grateful to the businesses and organizations that support
              the Niagara Indian Association and help our community thrive.
            </p>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-orange-200/70 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur sm:flex">
            <Heart className="h-4 w-4 fill-orange-500 text-orange-500" />
            Powered by community
          </div>
        </motion.div>

        {goldSponsors.length > 0 && (
          <motion.section {...tierReveal(0)} className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-yellow-500" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
                  Gold Sponsors
                </h3>
              </div>
              <span className="h-px flex-1 bg-gradient-to-r from-yellow-200 to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {goldSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} size="gold" />
              ))}
            </div>
          </motion.section>
        )}

        {silverSponsors.length > 0 && (
          <motion.section {...tierReveal(0.08)} className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-slate-400" />
              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
                Silver Sponsors
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {silverSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} size="silver" />
              ))}
            </div>
          </motion.section>
        )}

        {bronzeSponsors.length > 0 && (
          <motion.section {...tierReveal(0.16)} className="mb-4">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400" />
              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
                Bronze Sponsors
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-orange-200 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {bronzeSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} size="bronze" />
              ))}
            </div>
          </motion.section>
        )}

        {communityPartners.length > 0 && (
          <motion.section {...tierReveal(0.2)} className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-green-600" />
              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
                Community Partners
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-green-200 to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {communityPartners.map((partner) => {
                const partnerCard = (
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group relative flex h-32 items-center justify-center overflow-hidden rounded-[1.35rem] border border-green-200/90 bg-white/90 px-6 py-5 shadow-[0_10px_35px_rgba(11,31,58,0.06)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(11,31,58,0.13)]"
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-white to-green-500" />
                    <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-green-400/10 blur-2xl transition duration-500 group-hover:bg-green-400/20" />
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={220}
                      height={110}
                      className="relative z-10 max-h-24 w-auto max-w-full object-contain transition duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                );

                return partner.url ? (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${partner.name}`}
                    className="block rounded-[1.35rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                  >
                    {partnerCard}
                  </a>
                ) : (
                  <div key={partner.name}>{partnerCard}</div>
                );
              })}
            </div>
          </motion.section>
        )}

        <motion.div
          {...tierReveal(0.24)}
          className="relative mt-14 overflow-hidden rounded-[1.75rem] bg-[#0B1F3A] px-5 py-7 shadow-[0_20px_60px_rgba(11,31,58,0.18)] sm:px-8 sm:py-8"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" />
            <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2 text-orange-300">
                <span className="h-px w-6 bg-orange-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em]">
                  Partner with NIA
                </span>
              </div>
              <h3 className="text-xl font-black text-white sm:text-2xl">
                Want to support the community?
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                Become a community sponsor and help us build stronger
                connections across the Niagara Region.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400 sm:w-auto"
            >
              Become a Sponsor
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
