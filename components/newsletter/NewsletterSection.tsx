"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf8] px-5 py-14 sm:px-8 sm:py-16 lg:px-[5vw] lg:py-20">

      {/* =====================================================
          DECORATIVE TRICOLOR ELEMENTS
      ===================================================== */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[30px] border-orange-500/10" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[30px] border-green-600/10" />


      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-5xl">

        <div
          className="
            overflow-hidden
            rounded-[26px]
            bg-[#0b294b]
            px-5
            py-8
            shadow-xl

            sm:px-8
            sm:py-10

            lg:px-14
            lg:py-12
          "
        >

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="min-w-0">

              <div className="mb-4 flex items-center gap-3">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                  <Mail size={18} />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-[10px] sm:tracking-[0.3em]">
                  Stay Connected
                </span>

              </div>


              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                Stay Connected
                <br />
                With NIA
              </h2>


              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:leading-7">
                Get the latest news, upcoming events, community updates and
                opportunities from the Niagara Indian Association.
              </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <div className="min-w-0">

              {submitted ? (

                <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-5 sm:p-6">

                  <p className="font-bold text-green-300">
                    Thank you for joining our community!
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    We&apos;ll keep you updated with the latest NIA news and events.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-sm font-bold text-white underline underline-offset-4"
                  >
                    Subscribe another email
                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="w-full">

                  <label
                    htmlFor="newsletter-email"
                    className="mb-2 block text-xs font-bold text-slate-300"
                  >
                    Email Address
                  </label>


                  {/* Input + Button */}

                  <div className="flex w-full flex-col gap-3 sm:flex-row">

                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email address"
                      className="
                        min-w-0
                        w-full
                        flex-1
                        rounded-xl
                        border
                        border-white/15
                        bg-white/10
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-slate-400
                        transition

                        focus:border-orange-400
                        focus:bg-white/15

                        sm:px-5
                      "
                    />


                    <button
                      type="submit"
                      className="
                        inline-flex
                        w-full
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-orange-500
                        px-6
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        transition

                        hover:bg-orange-600

                        sm:w-auto
                      "
                    >
                      Subscribe
                      <ArrowRight size={16} />
                    </button>

                  </div>


                  <p className="mt-3 text-[10px] leading-5 text-slate-500">
                    By subscribing, you agree to receive communications from
                    Niagara Indian Association.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
