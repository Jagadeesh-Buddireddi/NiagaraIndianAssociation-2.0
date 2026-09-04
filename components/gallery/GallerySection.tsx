"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Images,
  Play,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";

type GalleryMode = "photos" | "videos";

const photos = [
  {
    src: "/images/gallery/culturaldance.jpg",
    alt: "Cultural Dance Performance",
    title: "Cultural Performance",
    subtitle: "Celebrating tradition through movement and music.",
  },
  {
    src: "/images/gallery/kidsdance.jpg",
    alt: "Kids Cultural Dance",
    title: "Young Performers",
    subtitle: "The next generation keeping culture alive.",
  },
  {
    src: "/images/gallery/lamplighting.jpg",
    alt: "Lamp Lighting Ceremony",
    title: "Lamp Lighting Ceremony",
    subtitle: "A meaningful beginning to a community celebration.",
  },
  {
    src: "/images/gallery/commitee.jpg",
    alt: "NIA Community",
    title: "NIA Community",
    subtitle: "People, culture and connection across Niagara.",
  },
];

const videos = [
  {
    title: "NIA Cultural Celebration",
    thumbnail: "/images/videos/Inaugration.jpg",
    video: "/images/videos/Inaugration.mp4",
    subtitle: "Highlights from an important NIA community celebration.",
  },
  {
    title: "Community Moments",
    thumbnail: "/images/gallery/commitee.jpg",
    video: "/images/videos/Inaugration.mp4",
    subtitle: "A look at the people and moments that bring NIA together.",
  },
  {
    title: "Indian Heritage",
    thumbnail: "/images/gallery/lamplighting.jpg",
    video: "/images/videos/Inaugration.mp4",
    subtitle: "Tradition, ceremony and heritage shared with the community.",
  },
  {
    title: "Cultural Performance",
    thumbnail: "/images/gallery/culturaldance.jpg",
    video: "/images/videos/CulturalDance.mp4",
    subtitle: "A vibrant performance celebrating Indian culture.",
  },
];

export default function GallerySection() {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = useState<GalleryMode>("photos");
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(
    null
  );

  return (
    <>
      <section className="relative overflow-hidden bg-[#fffdf8] py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-8 h-[420px] w-[420px] rounded-full bg-orange-500/[0.07] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-green-500/[0.07] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,31,58,0.85) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.85) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
                  NIA Gallery
                </p>
                <span className="h-px w-8 bg-green-600" />
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
                Our Community
                <span className="block text-orange-500">In Motion.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Explore photos and videos from NIA celebrations, cultural
                performances and community gatherings across Niagara.
              </p>
            </div>

            <Link
              href="/gallery"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0B1F3A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-[#102943]"
            >
              <Images size={17} className="text-orange-400" />
              Open Full Gallery
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Toggle */}
          <div className="mt-10 inline-flex rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setMode("photos")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                mode === "photos"
                  ? "bg-[#0B1F3A] text-white shadow-md"
                  : "text-slate-500 hover:text-[#0B1F3A]"
              }`}
            >
              <Camera size={16} />
              Photos
            </button>

            <button
              type="button"
              onClick={() => setMode("videos")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                mode === "videos"
                  ? "bg-[#0B1F3A] text-white shadow-md"
                  : "text-slate-500 hover:text-[#0B1F3A]"
              }`}
            >
              <Video size={16} />
              Videos
            </button>
          </div>

          {/* Gallery */}
          <AnimatePresence mode="wait">
            {mode === "photos" ? (
              <motion.div
                key="photos"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-12"
              >
                {photos.map((item, index) => {
                  const layout =
                    index === 0
                      ? "lg:col-span-7 lg:row-span-2"
                      : index === 1
                        ? "lg:col-span-5"
                        : index === 2
                          ? "lg:col-span-5"
                          : "lg:col-span-12";

                  const height =
                    index === 0
                      ? "h-[360px] sm:h-[500px] lg:h-[660px]"
                      : index === 3
                        ? "h-[300px] sm:h-[360px]"
                        : "h-[310px] sm:h-[320px]";

                  return (
                    <motion.div
                      key={item.src}
                      whileHover={
                        shouldReduceMotion ? undefined : { y: -5, scale: 1.005 }
                      }
                      className={`group relative overflow-hidden rounded-[28px] bg-[#07182f] shadow-[0_18px_50px_rgba(11,31,58,0.13)] ${layout} ${height}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182f]/90 via-[#07182f]/10 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                        <p className="text-xl font-black text-white sm:text-2xl">
                          {item.title}
                        </p>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/70">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-orange-500 via-white to-green-600 opacity-0 transition duration-500 group-hover:opacity-100" />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-8 grid gap-6 md:grid-cols-2"
              >
                {videos.map((item) => (
                  <button
                    key={`${item.title}-${item.video}`}
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className="group relative overflow-hidden rounded-[28px] bg-[#07182f] text-left shadow-[0_18px_50px_rgba(11,31,58,0.14)]"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182f] via-[#07182f]/25 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { scale: 1.08 }
                          }
                          className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-md"
                        >
                          <Play size={24} className="ml-1 fill-current" />
                        </motion.div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="text-xl font-black text-white">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/70">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.96, y: 18 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, scale: 0.97, y: 12 }
              }
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[26px] border border-white/10 bg-[#07182f] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setActiveVideo(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              >
                <X size={20} />
              </button>

              <video
                src={activeVideo.video}
                controls
                autoPlay={!shouldReduceMotion}
                playsInline
                className="aspect-video w-full bg-black object-contain"
              />

              <div className="p-5 sm:p-6">
                <p className="text-lg font-black text-white">
                  {activeVideo.title}
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  {activeVideo.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
