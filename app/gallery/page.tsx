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
import { useEffect, useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Community Celebration",
    category: "Community",
    image: "/images/gallery/LampLighting.jpg",
    description: "A celebration of community, tradition and togetherness.",
  },
  {
    id: 2,
    title: "Cultural Performance",
    category: "Culture",
    image: "/images/gallery/CulturalDance.jpg",
    description: "Indian culture brought to life through music and performance.",
  },
  {
    id: 3,
    title: "NIA Community",
    category: "Community",
    image: "/images/gallery/commitee.jpg",
    description: "The people helping build a stronger community across Niagara.",
  },
  {
    id: 4,
    title: "Indian Cultural Event",
    category: "Culture",
    image: "/images/gallery/KidsDance.jpg",
    description: "Young performers celebrating heritage and cultural identity.",
  },
];

const videoItems = [
  {
    id: 1,
    title: "NIA Cultural Celebration",
    category: "Community",
    thumbnail: "/images/videos/Inaugration.jpg",
    video: "/images/videos/Inaugration.mp4",
    description:
      "Highlights from a memorable Niagara Indian Association community celebration.",
  },
  {
    id: 2,
    title: "Cultural Performance",
    category: "Performance",
    thumbnail: "/images/gallery/CulturalDance.jpg",
    video: "/images/videos/CulturalDance.mp4",
    description:
      "A vibrant cultural performance celebrating Indian heritage through dance.",
  },
  {
    id: 3,
    title: "Community Moments",
    category: "NIA",
    thumbnail: "/images/gallery/commitee.jpg",
    video: "/images/videos/Inaugration.mp4",
    description:
      "People, connections and memorable moments from the NIA community.",
  },
];

type GalleryTab = "photos" | "videos";

export default function GalleryPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<GalleryTab>("photos");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[number] | null
  >(null);
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof videoItems)[number] | null
  >(null);

  useEffect(() => {
    const modalOpen = Boolean(selectedImage || selectedVideo);
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedVideo]);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fffdf8] text-[#0B1F3A]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#07182f]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-orange-500/15 blur-3xl"
            animate={
              shouldReduceMotion
                ? undefined
                : { x: [0, -25, 0], y: [0, 18, 0] }
            }
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -bottom-44 -left-32 h-[500px] w-[500px] rounded-full bg-green-500/15 blur-3xl"
            animate={
              shouldReduceMotion
                ? undefined
                : { x: [0, 28, 0], y: [0, -18, 0] }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.85) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.85) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-orange-500 via-white/40 to-green-500" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-300">
                Memories & Moments
              </span>
              <span className="h-px w-8 bg-green-500" />
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Our Community.
              <span className="mt-2 block text-orange-400">Our Stories.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Experience NIA through photographs and videos capturing our
              celebrations, performances, traditions and community connections
              across Niagara.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("photos");
                  document
                    .getElementById("nia-gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                <Camera size={17} />
                Explore Photos
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("videos");
                  document
                    .getElementById("nia-gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                <Play size={17} />
                Watch Videos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEDIA GALLERY */}
      <section
        id="nia-gallery"
        className="relative px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12rem] top-32 h-96 w-96 rounded-full bg-orange-500/[0.06] blur-3xl" />
          <div className="absolute right-[-12rem] bottom-16 h-96 w-96 rounded-full bg-green-500/[0.06] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
                  NIA Media Archive
                </p>
                <span className="h-px w-8 bg-green-600" />
              </div>

              <h2 className="mt-4 text-3xl font-black text-[#0B1F3A] sm:text-4xl lg:text-5xl">
                Moments that bring us together.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Browse photographs and watch videos from NIA celebrations,
                cultural programs and community gatherings.
              </p>
            </div>

            <div className="inline-flex w-fit rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab("photos")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeTab === "photos"
                    ? "bg-[#07182f] text-white shadow-md"
                    : "text-slate-500 hover:text-[#07182f]"
                }`}
              >
                <Images size={16} />
                Photos
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    activeTab === "photos"
                      ? "bg-white/10 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {galleryItems.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("videos")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeTab === "videos"
                    ? "bg-[#07182f] text-white shadow-md"
                    : "text-slate-500 hover:text-[#07182f]"
                }`}
              >
                <Video size={16} />
                Videos
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    activeTab === "videos"
                      ? "bg-white/10 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {videoItems.length}
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "photos" ? (
              <motion.div
                key="photos"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-12"
              >
                {galleryItems.map((item, index) => {
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
                      ? "h-[360px] sm:h-[500px] lg:h-[665px]"
                      : index === 3
                        ? "h-[300px] sm:h-[380px]"
                        : "h-[320px]";

                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedImage(item)}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { y: -5, scale: 1.004 }
                      }
                      className={`group relative overflow-hidden rounded-[28px] bg-[#07182f] text-left shadow-[0_18px_50px_rgba(11,31,58,0.13)] outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${layout} ${height}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182f]/95 via-[#07182f]/10 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-orange-300">
                          {item.category}
                        </p>
                        <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/70">
                          {item.description}
                        </p>
                      </div>

                      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-orange-500 via-white to-green-600 opacity-0 transition duration-500 group-hover:opacity-100" />
                    </motion.button>
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
                className="mt-10 grid gap-6 lg:grid-cols-12"
              >
                {videoItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedVideo(item)}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -5, scale: 1.004 }
                    }
                    className={`group overflow-hidden rounded-[28px] bg-[#07182f] text-left shadow-[0_18px_50px_rgba(11,31,58,0.14)] outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                      index === 0 ? "lg:col-span-7" : "lg:col-span-5"
                    } ${index === 2 ? "lg:col-span-12" : ""}`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        index === 2 ? "aspect-[21/8]" : "aspect-video"
                      }`}
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182f] via-[#07182f]/20 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                          <Play size={24} className="ml-1 fill-current" />
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-orange-300">
                          {item.category}
                        </p>
                        <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 rounded-[28px] border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-green-600">
                Growing Archive
              </p>
              <h3 className="mt-2 text-xl font-black text-[#0B1F3A] sm:text-2xl">
                More NIA memories are on the way.
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                We&apos;ll continue adding photographs and videos from community
                celebrations, programs and future NIA events.
              </p>
            </div>

            <Link
              href="/events"
              className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-[#fffdf8] px-5 py-3 text-sm font-bold text-[#0B1F3A] transition hover:border-orange-200 hover:bg-orange-50 lg:mt-0"
            >
              Explore NIA Events
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="px-6 pb-16 sm:px-10 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] bg-[#07182f] px-7 py-12 shadow-[0_24px_70px_rgba(11,31,58,0.16)] sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
              <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
            </div>

            <div className="relative max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-300">
                Community • Culture • Connection
              </p>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Be part of the next memory.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Join the Niagara Indian Association and participate in upcoming
                celebrations, cultural programs and community events.
              </p>
            </div>

            <div className="relative mt-7 flex flex-wrap gap-3 lg:mt-0">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Explore Events
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Become a Member
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={23} />
            </button>

            <motion.div
              initial={
                shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 12 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }
              }
              className="relative h-[80vh] w-full max-w-6xl"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={
                shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }
              }
              className="relative w-full max-w-5xl overflow-hidden rounded-[26px] border border-white/10 bg-[#07182f] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
              >
                <X size={20} />
              </button>

              <video
                src={selectedVideo.video}
                controls
                autoPlay={!shouldReduceMotion}
                playsInline
                className="aspect-video w-full bg-black object-contain"
              />

              <div className="p-5 sm:p-6">
                <p className="text-[9px] font-black uppercase tracking-[0.24em] text-orange-300">
                  {selectedVideo.category}
                </p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {selectedVideo.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
