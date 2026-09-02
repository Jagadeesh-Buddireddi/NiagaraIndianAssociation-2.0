"use client";

import {
  Users,
  CalendarDays,
  HeartHandshake,
  BriefcaseBusiness,
} from "lucide-react";

const statistics = [
  {
    value: "1000+",
    label: "Community Members",
    icon: Users,
  },
  {
    value: "100+",
    label: "Community Events",
    icon: CalendarDays,
  },
  {
    value: "5000+",
    label: "Volunteer Hours",
    icon: HeartHandshake,
  },
  {
    value: "50+",
    label: "Business Connections",
    icon: BriefcaseBusiness,
  },
];

export default function Statistics() {
  return (
    <section className="relative z-10 bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-orange-500 sm:w-8" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-600 sm:text-[10px] sm:tracking-[0.3em]">
              Our Community
            </span>

            <span className="h-px w-7 bg-green-600 sm:w-8" />
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#0b294b] sm:text-4xl">
            Stronger Together
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7">
            Connecting people, families, professionals and businesses
            across the Niagara Region.
          </p>

        </div>

        {/* Statistics */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">

          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  group
                  min-w-0
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-5
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl

                  sm:px-6
                  sm:py-6

                  lg:px-7
                  lg:py-7
                "
              >

                <div className="flex items-start justify-between gap-2">

                  <div className="min-w-0">

                    <p className="text-2xl font-black tracking-tight text-[#0b294b] sm:text-3xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-[9px] font-semibold uppercase leading-4 tracking-wide text-slate-400 sm:text-xs sm:leading-normal">
                      {stat.label}
                    </p>

                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-orange-50
                      text-orange-500

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="sm:h-[21px] sm:w-[21px]"
                    />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}