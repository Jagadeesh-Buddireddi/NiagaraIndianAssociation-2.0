"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function NewsletterSection() {
  const reduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  const reveal = {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      ease: "easeOut" as const,
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#fffdf8] px-5 py-16 sm:px-8 sm:py-20 lg:px-[5vw] lg:py-24">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-orange-300/12 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-green-300/12 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,31,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,1) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <motion.div
        {...reveal}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1F3A] px-6 py-10 shadow-[0_28px_80px_rgba(11,31,58,0.20)] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      >
        {/* Decorative layers */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 12% 20%, rgba(242,140,40,0.20), transparent 28%), radial-gradient(circle at 88% 80%, rgba(22,131,74,0.22), transparent 30%)",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-orange-300/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [0, 360],
                }
          }
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-green-300/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [360, 0],
                }
          }
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-400" />
              <div className="inline-flex items-center gap-2 text-orange-300">
                <Sparkles className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em]">
                  Stay Connected
                </span>
              </div>
              <span className="h-px w-8 bg-green-500" />
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stay close to the
              <span className="block text-orange-300">NIA community.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Get community updates, upcoming event announcements, cultural
              highlights, member news and important NIA information delivered
              directly to your inbox.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-400">
              <span>Events</span>
              <span className="text-white/20">•</span>
              <span>Community News</span>
              <span className="text-white/20">•</span>
              <span>Member Updates</span>
              <span className="text-white/20">•</span>
              <span>Cultural Highlights</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.065] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange-400/15 text-orange-300 ring-1 ring-inset ring-orange-300/10">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Join the NIA mailing list
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Be the first to hear what&apos;s happening across the community.
                  </p>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label htmlFor="nia-newsletter-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="nia-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email address"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/[0.08] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-orange-300/50 focus:bg-white/[0.11] focus:ring-4 focus:ring-orange-400/10"
                  />

                  <motion.button
                    type="submit"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-orange-400 px-5 text-sm font-extrabold text-[#0B1F3A] shadow-lg shadow-orange-950/20 transition hover:bg-orange-300"
                  >
                    Subscribe for Updates
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>

                  <p className="px-1 pt-1 text-[10px] leading-5 text-slate-500">
                    Community updates only. No spam.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 12,
                          scale: 0.98,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                  }}
                  className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />

                    <div>
                      <h4 className="font-extrabold text-white">
                        Thank you for subscribing.
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-slate-300">
                        You&apos;re now on the NIA community updates list.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-r from-orange-400/10 via-transparent to-green-400/10 blur-2xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
