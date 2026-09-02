"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const gallery = [
  {
    src: "/images/gallery/culturaldance.jpg",
    alt: "Cultural Dance Performance",
  },
  {
    src: "/images/gallery/kidsdance.jpg",
    alt: "NIA Community Event",
  },
  {
    src: "/images/gallery/lamplighting.jpg",
    alt: "Lamp Lighting Ceremony",
  },
  {
    src: "/images/gallery/commitee.jpg",
    alt: "NIA Community",
  },
];

export default function GallerySection() {
  return (
    <section className="overflow-hidden bg-white py-24">

      {/* Section Header */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="font-semibold uppercase tracking-[5px] text-orange-500">
              Gallery
            </p>

            <h2 className="mt-4 font-display text-5xl font-bold text-[#0B1F3A]">
              Moments That Unite Us
            </h2>

            <p className="mt-5 max-w-2xl text-slate-500">
              Every celebration tells a story. Explore unforgettable memories
              from NIA events.
            </p>
          </div>

          <Link
            href="/gallery"
            className="btn-secondary hidden items-center gap-2 lg:flex"
          >
            View Gallery
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Scrolling Gallery */}
      <div className="mt-20">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex w-max gap-8"
        >
          {[...gallery, ...gallery].map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="group relative h-[420px] w-[340px] overflow-hidden rounded-[36px] shadow-2xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="340px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Dark gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}