"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Community Celebration",
    category: "Community",
    image: "/images/gallery/LampLighting.jpg",
  },
  {
    id: 2,
    title: "Cultural Performance",
    category: "Culture",
    image: "/images/gallery/CulturalDance.jpg",
  },
  {
    id: 3,
    title: "NIA Community",
    category: "Community",
    image: "/images/gallery/commitee.jpg",
  },
  {
    id: 4,
    title: "Indian Cultural Event",
    category: "Culture",
    image: "/images/gallery/KidsDance.jpg",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[number] | null
  >(null);

  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#0B1F3A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B1F3A]">

        {/* Decorative elements */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[45px] border-orange-500/20" />

          <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full border-[45px] border-green-600/20" />

        </div>


        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-orange-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
                Memories & Moments
              </span>

              <span className="h-px w-8 bg-green-500" />

            </div>


            <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">

              Our
              <span className="block text-orange-400">
                Gallery.
              </span>

            </h1>


            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore moments from NIA celebrations, cultural programs,
              community gatherings and events across the Niagara Region.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              NIA Memories
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              Moments that bring us together.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              From cultural celebrations to community gatherings,
              these moments reflect the spirit, diversity and connections
              that make our community special.
            </p>

          </div>


          {/* Gallery Grid */}

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {galleryItems.map((item, index) => (

              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-100
                  text-left
                  shadow-sm
                  outline-none
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  focus:ring-2
                  focus:ring-orange-500
                  focus:ring-offset-2
                "
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />


                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/10
                    to-transparent
                    opacity-80
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                />


                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-300">
                    {item.category}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-white/70">
                    Tap to view
                  </p>

                </div>

              </motion.button>

            ))}

          </div>


          {/* Empty/future gallery note */}

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-600">
              More Memories Coming Soon
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#0B1F3A]">
              Growing our community archive.
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              We will continue adding photographs from NIA celebrations,
              cultural programs, community events and activities.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMUNITY CTA
      ===================================================== */}

      <section className="px-6 pb-16 sm:px-10 sm:pb-24">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-[32px] bg-[#0B1F3A] px-7 py-12 text-center shadow-2xl sm:px-12">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400">
              Community • Culture • Connection
            </p>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Be part of the next memory.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Join the Niagara Indian Association and participate in
              upcoming celebrations, cultural programs and community events.
            </p>


            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/events"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-orange-500
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-orange-600
                "
              >
                Explore Events
                <ArrowRight size={16} />
              </Link>


              <Link
                href="/membership"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-white/20
                "
              >
                Become a Member
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-[10000]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            sm:p-8
          "
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="
              absolute
              right-4
              top-4
              z-10
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur
              transition
              hover:bg-white/20
              sm:right-8
              sm:top-8
            "
          >
            <X size={24} />
          </button>


          <div
            className="
              relative
              h-[75vh]
              w-full
              max-w-6xl
            "
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

          </div>

        </div>

      )}

    </main>
  );
}