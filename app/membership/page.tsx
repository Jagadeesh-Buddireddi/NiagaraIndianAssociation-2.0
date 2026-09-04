"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  HeartHandshake,
  CalendarDays,
  Globe2,
  BriefcaseBusiness,
  BadgePercent,
  Megaphone,
  Building2,
  ShieldCheck,
  Baby,
  Heart,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";

const MEMBERSHIP_URL =
  "https://www.zeffy.com/en-CA/ticketing/niagara-indian-associations-memberships";

const COMMUNITY_PORTAL_URL = "https://app.niagaraindians.com/";

const benefits = [
  {
    icon: Users,
    title: "Connect With the Community",
    description:
      "Meet families, professionals, entrepreneurs and community members across the Niagara Region.",
  },
  {
    icon: CalendarDays,
    title: "Events & Celebrations",
    description:
      "Participate in cultural celebrations, community gatherings and special NIA events.",
  },
  {
    icon: HeartHandshake,
    title: "Support Our Community",
    description:
      "Help NIA create meaningful programs and opportunities for the Indian community.",
  },
  {
    icon: Globe2,
    title: "Celebrate Our Heritage",
    description:
      "Stay connected with Indian culture, traditions and heritage while building our future in Canada.",
  },
];

const familyBenefits = [
  {
    icon: BadgePercent,
    title: "Exclusive Discounts",
    description:
      "Enjoy exclusive discounts at NIA partner restaurants, pharmacies, retail stores and local businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Access to Trusted Professionals",
    description:
      "Get reliable advice and support from trusted professionals within the community.",
    items: [
      "Lawyers",
      "Real Estate Professionals",
      "Financial Advisors",
      "Insurance Advisors",
      "Immigration Consultants",
      "Mortgage Professionals",
      "Other Community Experts",
    ],
  },
  {
    icon: Baby,
    title: "Kids' Programs",
    description:
      "Programs and activities designed to help children learn, grow and stay connected.",
    items: [
      "Free or discounted swimming classes",
      "Dance classes",
      "Music classes",
      "Cultural programs",
      "Sports activities",
      "Summer camps",
      "Educational workshops",
      "Family trips & excursions",
    ],
  },
  {
    icon: Heart,
    title: "Programs for Adults & Parents",
    description:
      "Meaningful programs supporting wellness, learning, family and personal development.",
    items: [
      "Free cooking classes by professional chefs",
      "Yoga & wellness",
      "Health awareness sessions",
      "Parenting workshops",
      "Financial education",
      "Skill development & training programs",
    ],
  },
];

const individualHighlights = [
  "Priority registration for NIA events and special programs",
  "Volunteer and leadership opportunities within the community",
  "Business and employment networking",
];

const businessBenefits = [
  {
    icon: Globe2,
    title: "NIA Website",
    description: "Promote your business through the NIA website.",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Increase your visibility through NIA social media channels.",
  },
  {
    icon: Handshake,
    title: "WhatsApp Community",
    description: "Connect with members through the NIA WhatsApp community.",
  },
  {
    icon: Building2,
    title: "NIA Magazine",
    description: "Opportunities to promote your business through NIA publications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Directory",
    description: "Increase discoverability through the NIA business directory.",
  },
];

const businessHighlights = [
  "Business referrals from the local Indian community",
  "Discounted vendor booths at NIA events",
  "Sponsorship and advertising opportunities",
  "Connect with hundreds of local families and professionals",
  "Increase brand visibility and customer trust",
  "Grow your business through community support",
];

const promiseItems = [
  "More discounts from local businesses",
  "More family programs",
  "More networking opportunities",
  "More educational workshops",
  "More member-exclusive benefits every year",
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#0B1F3A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B1F3A]">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[40px] border-orange-500/20" />

          <div className="absolute -bottom-40 right-[-5%] h-[500px] w-[500px] rounded-full border-[45px] border-green-500/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/95 to-[#0B1F3A]/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-10 lg:py-28">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-3xl"
          >

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
                Become a Member
              </span>

              <span className="h-px w-8 bg-green-500" />
            </div>

            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Be Part of Our
              <span className="block text-orange-500">
                Community.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Join the Niagara Indian Association and help us build a
              stronger, more connected and culturally vibrant community
              across the Niagara Region.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Become a Member
                <ArrowRight size={16} />
              </a>

              <a
                href={COMMUNITY_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
              >
                Already a Member? Open Portal
                <ArrowRight size={16} />
              </a>

            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              New members register securely through Zeffy. Existing members can
              access their NIA digital community portal online.
            </p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INTRO BENEFITS
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Membership Benefits
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              More Than Membership.
              <br />
              It&apos;s Community.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              NIA membership is an opportunity to connect, participate,
              contribute and celebrate our shared heritage.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl border border-slate-200 bg-[#fffdf8] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Icon
                      size={22}
                      className="text-orange-500"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0B1F3A]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {benefit.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          DETAILED MEMBERSHIP BENEFITS
      ===================================================== */}

      <section className="bg-[#fffdf8] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
                Membership Benefits
              </p>

              <span className="h-px w-8 bg-green-600" />
            </div>

            <h2 className="mt-4 text-3xl font-black text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              Benefits for Families,
              <br />
              Individuals & Businesses.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Membership brings practical benefits, meaningful
              connections and opportunities to participate in a
              stronger Niagara Indian community.
            </p>

          </div>


          {/* =================================================
              FAMILY / INDIVIDUAL BENEFITS
          ================================================= */}

          <div className="mt-16">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-white">
                <Users size={23} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-600">
                  Families & Individuals
                </p>

                <h3 className="mt-1 text-2xl font-black text-[#0B1F3A] sm:text-3xl">
                  Benefits for Family & Individual Members
                </h3>
              </div>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              {familyBenefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                  >

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-600/10">
                        <Icon
                          size={22}
                          className="text-green-600"
                        />
                      </div>

                      <div className="min-w-0">

                        <h4 className="text-lg font-black text-[#0B1F3A]">
                          {benefit.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {benefit.description}
                        </p>

                      </div>

                    </div>

                    {benefit.items && (
                      <div className="mt-5 grid gap-2 sm:grid-cols-2">

                        {benefit.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2"
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-green-600"
                            />

                            <span className="text-xs leading-5 text-slate-600">
                              {item}
                            </span>
                          </div>
                        ))}

                      </div>
                    )}

                  </motion.div>
                );
              })}

            </div>


            {/* Individual highlights */}

            <div className="mt-5 grid gap-4 sm:grid-cols-3">

              {individualHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-5"
                >

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600">
                    <Check
                      size={15}
                      className="text-white"
                    />
                  </div>

                  <p className="text-sm font-semibold leading-6 text-[#0B1F3A]">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>


          {/* =================================================
              BUSINESS MEMBERSHIP
          ================================================= */}

          <div className="mt-24">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-white">
                <BriefcaseBusiness size={23} />
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                  Business Membership
                </p>

                <h3 className="mt-1 text-2xl font-black text-[#0B1F3A] sm:text-3xl">
                  Benefits for Business Members
                </h3>

              </div>

            </div>


            {/* Business promotion */}

            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">

              <div className="rounded-3xl bg-[#0B1F3A] p-7 text-white shadow-xl sm:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                  Promote Your Business
                </p>

                <h4 className="mt-4 text-2xl font-black sm:text-3xl">
                  Reach the NIA community.
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Business members can promote their services and
                  connect with families, professionals and businesses
                  across the Niagara Region.
                </p>


                <div className="mt-7 space-y-3">

                  {businessBenefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <div
                        key={benefit.title}
                        className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/15">
                          <Icon
                            size={17}
                            className="text-orange-400"
                          />
                        </div>

                        <div>

                          <p className="text-sm font-bold text-white">
                            {benefit.title}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {benefit.description}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>


              {/* Business benefits list */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                  Business Growth
                </p>

                <h4 className="mt-3 text-2xl font-black text-[#0B1F3A]">
                  Grow through community support.
                </h4>

                <div className="mt-7 space-y-4">

                  {businessHighlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                        <Check
                          size={15}
                          className="text-orange-500"
                        />
                      </div>

                      <p className="text-sm font-medium leading-6 text-slate-600">
                        {item}
                      </p>

                    </motion.div>
                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              NIA PROMISE
          ================================================= */}

          <div className="mt-24 overflow-hidden rounded-[32px] bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl">

            <div className="grid lg:grid-cols-[1fr_1.2fr]">

              <div className="p-8 text-white sm:p-12">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                  Our Promise
                </p>

                <h3 className="mt-4 text-3xl font-black sm:text-4xl">
                  More for our members.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/80">
                  We are committed to continuously creating more
                  opportunities, programs and benefits for our
                  growing community.
                </p>

              </div>


              <div className="bg-white p-8 sm:p-12">

                <div className="grid gap-4 sm:grid-cols-2">

                  {promiseItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                        <Check
                          size={16}
                          className="text-orange-500"
                        />
                      </div>

                      <p className="text-sm font-bold leading-6 text-[#0B1F3A]">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY JOIN NIA
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Why Join NIA?
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
                Together, we make our community stronger.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                NIA brings together people from across the Niagara
                Region to celebrate Indian culture, support community
                initiatives and create opportunities for meaningful
                connections.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Access to NIA community events",
                  "Opportunities to connect with local families and professionals",
                  "Participation in cultural celebrations",
                  "Community networking opportunities",
                  "Opportunities to volunteer and contribute",
                  "Stay connected with NIA updates and activities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600/10">
                      <Check
                        size={14}
                        className="text-green-600"
                      />
                    </div>

                    <p className="text-sm font-medium text-slate-600">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>


            {/* Registration Card */}

            <div
              id="membership-registration"
              className="rounded-[32px] bg-[#0B1F3A] p-8 shadow-2xl sm:p-10"
            >

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
                Join NIA
              </p>

              <h2 className="mt-4 text-3xl font-black text-white">
                Ready to become a member?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Complete the membership registration and become part of
                the Niagara Indian Association community.
              </p>

              <a
                href={MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Register for Membership
                <ArrowRight size={17} />
              </a>

              <p className="mt-4 text-center text-xs text-slate-500">
                Membership registration will open securely through Zeffy.
              </p>

              <div className="my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Existing Member
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <a
                href={COMMUNITY_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-6 py-4 text-sm font-bold text-white transition hover:bg-white/[0.12]"
              >
                Open NIA Community Portal
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COMMUNITY CTA
      ===================================================== */}

      <section className="bg-[#fffdf8] px-6 py-16 sm:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 p-8 shadow-xl sm:p-12">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                  Community • Culture • Connection
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Let&apos;s build something meaningful together.
                </h2>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href={MEMBERSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#0B1F3A] transition hover:-translate-y-1 hover:bg-slate-100"
                >
                  Join NIA
                  <ArrowRight size={17} />
                </a>

                <a
                  href={COMMUNITY_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  Member Portal
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  Contact NIA
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
