"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        w-auto
        max-w-full
        object-contain
        transition
        duration-300
        group-hover:scale-105

        ${size === "gold"
          ? "max-h-24"
          : size === "silver"
            ? "max-h-20"
            : "max-h-16"
        }
      `}
    />
  );

  return (
    <div
      className={`
        group
        flex
        min-w-0
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        ${size === "gold"
          ? "h-36 border-2 border-yellow-300 px-6"
          : size === "silver"
            ? "h-32 border border-slate-300 px-5"
            : "h-24 border border-orange-200 px-4"
        }
      `}
    >
      {sponsor.url ? (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${sponsor.name}`}
          className="flex h-full w-full items-center justify-center"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}

export default function SponsorsSection() {
  return (
    <section className="w-full overflow-hidden bg-[#fffdf8] px-5 py-14 sm:px-8 sm:py-16 lg:px-[5vw] lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div className="min-w-0">

            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
                Community Support
              </p>

              <span className="h-px w-8 bg-green-600" />
            </div>

            <h2 className="text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              Our Sponsors
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              We are grateful to the businesses and organizations that
              support the Niagara Indian Association and our community.
            </p>

          </div>

          <span className="hidden text-2xl text-red-500 sm:block">
            ♥
          </span>

        </div>


        {/* =====================================================
            GOLD SPONSORS
        ===================================================== */}

        {goldSponsors.length > 0 && (
          <section className="mb-14">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-yellow-500" />

              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
                Gold Sponsors
              </h3>

              <span className="h-px flex-1 bg-yellow-200" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {goldSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  size="gold"
                />
              ))}
            </div>

          </section>
        )}


        {/* =====================================================
            SILVER SPONSORS
        ===================================================== */}

        {silverSponsors.length > 0 && (
          <section className="mb-14">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-slate-400" />

              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
                Silver Sponsors
              </h3>

              <span className="h-px flex-1 bg-slate-300" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {silverSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  size="silver"
                />
              ))}
            </div>

          </section>
        )}


        {/* =====================================================
            BRONZE SPONSORS
        ===================================================== */}

        {bronzeSponsors.length > 0 && (
          <section className="mb-4">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400" />

              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
                Bronze Sponsors
              </h3>

              <span className="h-px flex-1 bg-orange-200" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {bronzeSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  size="bronze"
                />
              ))}
            </div>

          </section>
        )}

        {/* =====================================================
    COMMUNITY PARTNERS
===================================================== */}

{communityPartners.length > 0 && (
  <section className="mt-14">

    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-green-600" />

      <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#0B1F3A]">
        Community Partners
      </h3>

      <span className="h-px flex-1 bg-green-200" />
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {communityPartners.map((partner) => (
        <div
          key={partner.name}
          className="
            group
            flex
            h-32
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-green-200
            bg-white
            px-6
            py-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          {partner.url ? (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name}`}
              className="flex h-full w-full items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={220}
                height={110}
                className="
                  max-h-24
                  w-auto
                  max-w-full
                  object-contain
                  transition
                  duration-300
                  group-hover:scale-105
                "
              />
            </a>
          ) : (
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={220}
              height={110}
              className="
                max-h-24
                w-auto
                max-w-full
                object-contain
                transition
                duration-300
                group-hover:scale-105
              "
            />
          )}
        </div>
      ))}
    </div>

  </section>
)}


        {/* =====================================================
            SPONSOR CTA
        ===================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            rounded-2xl
            bg-[#0B1F3A]
            px-5
            py-6

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-7
            sm:py-7
          "
        >

          <div className="min-w-0">

            <h3 className="text-lg font-bold text-white">
              Want to support NIA?
            </h3>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
              Become a community sponsor and help us build stronger
              connections across the Niagara Region.
            </p>

          </div>

          <Link
            href="/contact"
            className="
              inline-flex
              w-full
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              bg-orange-500
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition
              hover:bg-orange-600
              sm:w-auto
            "
          >
            Become a Sponsor
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}