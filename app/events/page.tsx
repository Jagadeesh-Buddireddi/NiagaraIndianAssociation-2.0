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

export default function EventsPage() {
  /*
   * ============================================================
   * UPCOMING EVENTS
   * ============================================================
   */

  const upcomingEvents = events
    .filter((event) => event.status === "upcoming")
    .sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime()
    );

  /*
   * ============================================================
   * PAST EVENTS
   * ============================================================
   *
   * Most recent past event appears first.
   */

  const pastEvents = events
    .filter((event) => event.status === "past")
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );

  /*
   * Featured upcoming event
   */

  const featuredEvent =
    upcomingEvents.find((event) => event.featured === true) ||
    upcomingEvents[0];

  return (
    <main className="min-h-screen bg-[#fffdf8]">

      {/* ========================================================
          PAGE HERO
      ======================================================== */}

      <section className="relative overflow-hidden bg-[#0B1F3A]">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border-[40px] border-orange-500" />

          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full border-[40px] border-green-600" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
              NIA Events
            </p>

            <span className="h-px w-8 bg-green-500" />
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Community, Culture & Celebration
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Discover upcoming events you can look forward to and
            explore the celebrations that have brought our
            community together.
          </p>

        </div>
      </section>


      {/* ========================================================
          UPCOMING EVENTS
      ======================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">

        <div className="mb-10">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
              Coming Up
            </p>

            <span className="h-px w-8 bg-green-600" />
          </div>

          <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Upcoming Events
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Events and celebrations you can look forward to
            with the Niagara Indian Association.
          </p>

        </div>


        {upcomingEvents.length === 0 ? (

          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">

            <CalendarDays
              size={36}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 text-xl font-bold text-[#0B1F3A]">
              No upcoming events yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              New community events will be announced soon.
              Please check back with us.
            </p>

          </div>

        ) : (

          <div className="space-y-8">

            {/* FEATURED EVENT */}

            {featuredEvent && (
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">

                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                  {/* POSTER */}

                  <div className="bg-[#f8f7f3] p-4 sm:p-6">

                    <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-2xl bg-white shadow-md">

                      <Image
                        src={
                          featuredEvent.image.startsWith("/")
                            ? featuredEvent.image
                            : `/${featuredEvent.image}`
                        }
                        alt={featuredEvent.title}
                        fill
                        priority
                        sizes="(max-width: 639px) 94vw, (max-width: 1023px) 45vw, 40vw"
                        className="object-contain"
                      />

                    </div>

                  </div>


                  {/* INFORMATION */}

                  <div className="p-6 sm:p-8 lg:p-10">

                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">

                      <CalendarDays
                        size={16}
                        className="text-orange-500"
                      />

                      <span className="text-xs font-bold uppercase tracking-wide text-orange-600">
                        {featuredEvent.dateLabel}
                      </span>

                    </div>


                    <h3 className="mt-5 text-3xl font-black leading-tight text-[#0B1F3A] sm:text-4xl">
                      {featuredEvent.title}
                    </h3>


                    <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                      {featuredEvent.description}
                    </p>


                    {/* TIME + LOCATION */}

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">

                      <div className="rounded-2xl border border-slate-200 p-4">

                        <Clock3
                          size={19}
                          className="text-orange-500"
                        />

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Time
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#0B1F3A]">
                          {featuredEvent.time}
                        </p>

                      </div>


                      <div className="rounded-2xl border border-slate-200 p-4">

                        <MapPin
                          size={19}
                          className="text-orange-500"
                        />

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Location
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#0B1F3A]">
                          {featuredEvent.location}
                        </p>

                      </div>

                    </div>


                    <Link
                      href={`/events/${featuredEvent.id}`}
                      className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                    >
                      Event Details
                      <ArrowRight size={16} />
                    </Link>

                  </div>

                </div>

              </div>
            )}


            {/* OTHER UPCOMING EVENTS */}

            {upcomingEvents.length > 1 && (

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {upcomingEvents
                  .filter((event) => event.id !== featuredEvent?.id)
                  .map((event) => (

                    <Link
                      key={event.id}
                      href={`/events/${event.id}`}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                        <Image
                          src={
                            event.image.startsWith("/")
                              ? event.image
                              : `/${event.image}`
                          }
                          alt={event.title}
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />

                      </div>


                      <div className="p-5">

                        <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                          {event.dateLabel}
                        </p>

                        <h3 className="mt-2 text-lg font-bold text-[#0B1F3A]">
                          {event.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                          {event.description}
                        </p>

                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">
                          View Event
                          <ArrowRight size={15} />
                        </span>

                      </div>

                    </Link>

                  ))}

              </div>

            )}

          </div>

        )}

      </section>


      {/* ========================================================
          PAST EVENTS
      ======================================================== */}

      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">

          <div className="mb-10">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-green-600" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-600">
                Celebrating Together
              </p>

              <span className="h-px w-8 bg-orange-500" />

            </div>

            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              Past Events
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              A look back at the celebrations, cultural programs
              and community moments we have shared together.
            </p>

          </div>


          {pastEvents.length === 0 ? (

            <div className="rounded-3xl border border-slate-200 bg-[#fffdf8] p-10 text-center">

              <p className="text-sm text-slate-500">
                Our past events will appear here.
              </p>

            </div>

          ) : (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {pastEvents.map((event) => (

                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#fffdf8] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                    <Image
                      src={
                        event.image.startsWith("/")
                          ? event.image
                          : `/${event.image}`
                      }
                      alt={event.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* PAST BADGE */}

                    <div className="absolute left-4 top-4 rounded-full bg-[#0B1F3A]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      Past Event
                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                      {event.dateLabel}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-[#0B1F3A]">
                      {event.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                      {event.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-sm font-bold text-[#0B1F3A]">
                        View Event
                      </span>

                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}