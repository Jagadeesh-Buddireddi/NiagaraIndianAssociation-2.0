"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#0B1F3A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[45px] border-orange-500/20" />

          <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full border-[45px] border-green-600/20" />

          <div className="absolute right-1/4 top-1/2 h-2 w-24 bg-gradient-to-r from-orange-500 via-white to-green-600 opacity-20" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
                Get In Touch
              </span>

              <span className="h-px w-8 bg-green-500" />

            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s connect.

              <span className="block text-orange-400">
                We&apos;d love to hear from you.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Whether you want to learn more about NIA, get involved in the
              community, become a sponsor or simply say hello, we&apos;re here
              to connect.
            </p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">


            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-orange-500" />

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
                  Contact NIA
                </p>

                <span className="h-px w-8 bg-green-600" />

              </div>

              <h2 className="mt-4 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
                We&apos;re here to help.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                Have a question about membership, events, volunteering,
                sponsorship or community programs? Reach out to us and our
                team will be happy to connect with you.
              </p>


              {/* Contact Cards */}

              <div className="mt-8 space-y-4">


                {/* Email */}

                <a
                  href="mailto:info@niagaraindians.com"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">

                    <Mail
                      size={21}
                      className="text-orange-500"
                    />

                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Email Us
                    </p>

                    <p className="mt-1 break-all text-sm font-bold text-[#0B1F3A] group-hover:text-orange-500">
                      info@niagaraindians.com
                    </p>

                  </div>

                </a>


                {/* Phone */}

                <a
                  href="tel:+19053474347"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600/10">

                    <Phone
                      size={21}
                      className="text-green-600"
                    />

                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Call / WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#0B1F3A] group-hover:text-green-600">
                      +1 (905) 347 - 4347
                    </p>

                  </div>

                </a>


                {/* Location */}

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">

                    <MapPin
                      size={21}
                      className="text-orange-500"
                    />

                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-bold leading-6 text-[#0B1F3A]">
                      Niagara Region,
                      <br />
                      Ontario, Canada
                    </p>

                  </div>

                </div>

              </div>


              {/* Membership CTA */}

              <div className="mt-8 rounded-3xl bg-[#0B1F3A] p-7">

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
                  Join Our Community
                </p>

                <h3 className="mt-3 text-xl font-black text-white">
                  Become part of NIA.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Connect with families, professionals, businesses and
                  community members across the Niagara Region.
                </p>

                <a
                  href="https://www.zeffy.com/en-CA/ticketing/niagara-indian-associations-memberships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Become a Member
                  <ArrowRight size={16} />
                </a>

              </div>

            </motion.div>


            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
            >

              {submitted ? (

                /* =================================================
                   SUCCESS STATE
                ================================================= */

                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">

                    <CheckCircle2
                      size={32}
                      className="text-green-600"
                    />

                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-green-600">
                    Message Sent
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-[#0B1F3A]">
                    Thank you!
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                    Your message has been sent successfully. Our team will
                    review your inquiry and get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-7 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#132e50]"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                /* =================================================
                   FORM
                ================================================= */

                <>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
                      Send Us A Message
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-[#0B1F3A]">
                      How can we help?
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Fill out the form below and tell us how we can
                      connect with you.
                    </p>

                  </div>


                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >

                    {/* Name */}

                    <div>

                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold text-[#0B1F3A]"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                      />

                    </div>


                    {/* Email */}

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold text-[#0B1F3A]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                      />

                    </div>


                    {/* Phone */}

                    <div>

                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold text-[#0B1F3A]"
                      >
                        Phone Number
                        <span className="ml-1 font-normal text-slate-400">
                          (Optional)
                        </span>
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        maxLength={50}
                        placeholder="+1 (000) 000-0000"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                      />

                    </div>


                    {/* Subject */}

                    <div>

                      <label
                        htmlFor="subject"
                        className="mb-2 block text-xs font-bold text-[#0B1F3A]"
                      >
                        Subject
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#0B1F3A] outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                      >

                        <option value="" disabled>
                          Select a topic
                        </option>

                        <option value="Membership">
                          Membership
                        </option>

                        <option value="Events & Programs">
                          Events & Programs
                        </option>

                        <option value="Sponsorship">
                          Sponsorship
                        </option>

                        <option value="Volunteering">
                          Volunteering
                        </option>

                        <option value="General Inquiry">
                          General Inquiry
                        </option>

                      </select>

                    </div>


                    {/* Message */}

                    <div>

                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-bold text-[#0B1F3A]"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        maxLength={5000}
                        rows={6}
                        placeholder="Tell us how we can help..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                      />

                    </div>


                    {/* Error */}

                    {error && (
                      <div
                        role="alert"
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                      >
                        {error}
                      </div>
                    )}


                    {/* Submit */}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-orange-500
                        px-6
                        py-4
                        text-sm
                        font-bold
                        text-white
                        shadow-lg
                        shadow-orange-500/20
                        transition
                        hover:-translate-y-0.5
                        hover:bg-orange-600
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      {submitting ? "Sending..." : "Send Message"}

                      {!submitting && <Send size={16} />}
                    </button>


                    <p className="text-center text-[11px] leading-5 text-slate-400">
                      We respect your privacy and will only use your
                      information to respond to your inquiry.
                    </p>

                  </form>

                </>

              )}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="px-6 pb-20 sm:px-10 lg:pb-28">

        <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-12 text-center shadow-xl sm:px-12">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
            Community • Culture • Connection
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Let&apos;s build a stronger community together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80">
            Stay connected with Niagara Indian Association and be part of
            our growing community across the Niagara Region.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B1F3A] transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore Events
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
            >
              View Gallery
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}