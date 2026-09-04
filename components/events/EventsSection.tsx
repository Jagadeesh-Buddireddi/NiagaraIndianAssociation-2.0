"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import { events } from "@/data/events";

export default function EventsSection() {
  /*
   * ============================================================
   * UPCOMING EVENTS
   * ============================================================
   *
   * Only events marked as "upcoming" are allowed here.
   * This prevents past events such as Independence Day from
   * accidentally appearing as the homepage featured event.
   */
  const upcomingEvents = events
    .filter((event) => event.status === "upcoming")
    .sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime()
    );

  /*
   * Prefer the explicitly featured UPCOMING event.
   * If there isn't one, automatically use the next upcoming event.
   */
  const featuredEvent =
    upcomingEvents.find((event) => event.featured === true) ??
    upcomingEvents[0];

  /*
   * No upcoming events
   */
  if (!featuredEvent) {
    return (
      <section className="w-full bg-[#fffdf8] px-5 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
              Events
            </span>

            <span className="h-px w-8 bg-green-600" />
          </div>

          <h2 className="text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Upcoming Events
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            New community events will be announced soon.
          </p>

          <Link
            href="/events"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#16385f]"
          >
            View Past Events
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full overflow-hidden bg-[#fffdf8] text-[#0B1F3A]">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 shrink-0 bg-orange-500" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-[10px]">
                Upcoming Event
              </span>

              <span className="h-px w-7 shrink-0 bg-green-600" />
            </div>

            {/* DYNAMIC EVENT TITLE */}
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {featuredEvent.title}
            </h2>

            {/* DYNAMIC DESCRIPTION */}
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
              {featuredEvent.description}
            </p>

          </div>

          <Link
            href="/events"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#0B1F3A]/20 bg-white px-5 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm transition hover:border-orange-400 hover:text-orange-500"
          >
            View All Events
            <ArrowRight size={16} />
          </Link>
        </div>


        {/* =====================================================
            FEATURED EVENT
        ===================================================== */}

        <div className="mt-8 w-full overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-xl lg:mt-10">

          <div className="flex w-full flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* =================================================
                POSTER
            ================================================= */}

            <div className="self-stretch w-full bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0d3140] p-3 sm:p-5 lg:p-6">

              <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-white/10">

                <Image
                  src={
                    featuredEvent.image.startsWith("/")
                      ? featuredEvent.image
                      : `/${featuredEvent.image}`
                  }
                  alt={featuredEvent.title}
                  width={1100}
                  height={1369}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="block h-auto w-full object-contain"
                />

              </div>

            </div>


            {/* =================================================
                EVENT DETAILS
            ================================================= */}

            <div className="min-w-0 p-5 sm:p-7 lg:p-10">

              {/* DATE */}

              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2.5">

                <CalendarDays
                  size={15}
                  className="shrink-0 text-orange-500"
                />

                <span className="truncate text-xs font-bold uppercase tracking-wide text-orange-500">
                  {featuredEvent.dateLabel}
                </span>

              </div>


              {/* TIME + LOCATION */}

              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">

                {/* TIME */}

                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <Clock3
                    size={20}
                    className="mb-3 text-orange-500"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Time
                  </p>

                  <p className="mt-2 break-words font-bold text-[#0B1F3A]">
                    {featuredEvent.time}
                  </p>

                </div>


                {/* LOCATION */}

                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <MapPin
                    size={20}
                    className="mb-3 text-orange-500"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-2 break-words font-bold text-[#0B1F3A]">
                    {featuredEvent.location}
                  </p>

                  {featuredEvent.address && (
                    <p className="mt-1 break-words text-xs leading-5 text-slate-500">
                      {featuredEvent.address}
                    </p>
                  )}

                </div>

              </div>


              {/* =================================================
                  EVENT SCHEDULE
              ================================================= */}

              {featuredEvent.activities &&
                featuredEvent.activities.length > 0 && (
                  <div className="mt-8">

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                      Event Schedule
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-[#0B1F3A] sm:text-3xl">
                      {featuredEvent.activities.length === 1
                        ? "Event Schedule"
                        : `${featuredEvent.activities.length} Events. One Spirit.`}
                    </h3>

                  </div>
                )}


              {/* =================================================
                  ACTIVITIES
              ================================================= */}

              {featuredEvent.activities &&
                featuredEvent.activities.length > 0 && (
                  <div className="mt-6 space-y-4">

                    {featuredEvent.activities.map((activity) => (
                      <div
                        key={activity.number}
                        className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                      >

                        <div className="flex min-w-0 gap-3 sm:gap-4">

                          {/* NUMBER */}

                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-xs font-black text-orange-400 sm:h-10 sm:w-10">
                            {activity.number}
                          </div>


                          {/* CONTENT */}

                          <div className="min-w-0 flex-1">

                            <h4 className="break-words text-base font-bold leading-6 text-[#0B1F3A] sm:text-lg">
                              {activity.title}
                            </h4>


                            {/* TIME */}

                            <div className="mt-2 flex min-w-0 items-start gap-2">

                              <Clock3
                                size={13}
                                className="mt-0.5 shrink-0 text-orange-500"
                              />

                              <span className="break-words text-xs font-bold text-orange-500">
                                {activity.time}
                              </span>

                            </div>


                            {/* LOCATION */}

                            <div className="mt-2 flex min-w-0 items-start gap-2">

                              <MapPin
                                size={13}
                                className="mt-0.5 shrink-0 text-slate-400"
                              />

                              <span className="break-words text-xs text-slate-500">
                                {activity.location}
                              </span>

                            </div>


                            {/* ADDRESS */}

                            {activity.address && (
                              <p className="mt-2 break-words text-xs leading-5 text-slate-500">
                                {activity.address}
                              </p>
                            )}


                            {/* DESCRIPTION */}

                            <p className="mt-3 break-words text-xs leading-6 text-slate-500">
                              {activity.description}
                            </p>

                          </div>

                        </div>

                      </div>
                    ))}

                  </div>
                )}


              {/* =================================================
                  VIEW EVENT DETAILS
              ================================================= */}

              <div className="mt-7">

                <Link
                  href={`/events/${featuredEvent.id}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#16385f] sm:w-auto"
                >
                  View Event Details
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
