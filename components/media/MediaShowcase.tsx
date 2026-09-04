"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X, Maximize2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryItem = {
  id: number;
  title: string;
  image: string;
};

type VideoItem = {
  id: number;
  title: string;
  thumbnail: string;
  video: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Community Celebration",
    image: "/images/gallery/lamplighting.jpg",
  },
  {
    id: 2,
    title: "Cultural Performance",
    image: "/images/gallery/culturaldance.jpg",
  },
  {
    id: 3,
    title: "NIA Community",
    image: "/images/gallery/commitee.jpg",
  },
  {
    id: 4,
    title: "Indian Cultural Event",
    image: "/images/gallery/kidsdance.jpg",
  },
];

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "NIA Cultural Celebration",
    thumbnail: "/images/videos/Inaugration.jpg",
    video: "/images/videos/Inaugration.mp4",
  },
  {
    id: 2,
    title: "Community Moments",
    thumbnail: "/images/gallery/commitee.jpg",
    video: "/images/videos/Inaugration.mp4",
  },
  {
    id: 3,
    title: "Indian Heritage",
    thumbnail: "/images/gallery/lamplighting.jpg",
    video: "/images/videos/Inaugration.mp4",
  },
  {
    id: 4,
    title: "Cultural Performance",
    thumbnail: "/images/gallery/culturaldance.jpg",
    video: "/images/videos/CulturalDance.mp4",
  },
];

export default function MediaShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reducedMotion = useReducedMotion();

  const closeVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    const modalOpen = Boolean(selectedVideo || selectedImage);
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo, selectedImage]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (selectedVideo) closeVideo();
      if (selectedImage) closeImage();
    };

    if (selectedVideo || selectedImage) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedVideo, selectedImage, closeVideo, closeImage]);

  return (
    <>
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:py-24">
        {/* Ambient section glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[70vw] -translate-x-1/2 rounded-full bg-orange-100/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* PHOTO GALLERY */}
          <motion.div
            initial={false}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-9 flex items-end justify-between"
          >
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
                  Moments That Connect Us
                </p>
                <span className="h-px w-8 bg-green-600" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
                NIA in Motion
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                A living collection of celebrations, people and memories from
                across our community.
              </p>
            </div>

            <Link
              href="/gallery"
              className="hidden items-center gap-2 text-sm font-bold text-[#0B1F3A] transition hover:text-orange-500 sm:inline-flex"
            >
              View Gallery
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* CONTINUOUS CINEMATIC PHOTO STRIP */}
          <div
            className="group/marquee relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-[#0B1F3A] py-4 shadow-2xl shadow-slate-900/10"
            aria-label="NIA photo gallery"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0B1F3A] to-transparent sm:w-40"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0B1F3A] to-transparent sm:w-40"
            />

            <motion.div
              className="flex w-max gap-4 px-4"
              animate={
                reducedMotion
                  ? undefined
                  : { x: ["0%", "-50%"] }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
              whileHover={reducedMotion ? undefined : { animationPlayState: "paused" }}
              style={{ willChange: "transform" }}
            >
              {[...galleryItems, ...galleryItems].map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-52 w-[260px] shrink-0 overflow-hidden rounded-2xl text-left outline-none sm:h-64 sm:w-[360px]"
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="360px"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                          Niagara Indian Association
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:bg-white group-hover:text-[#0B1F3A]">
                        <Maximize2 size={15} />
                      </span>
                    </div>
                  </div>

                  <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 transition duration-300 group-hover:ring-white/40" />
                </button>
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-between sm:hidden">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Tap a photo to explore
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]"
            >
              View Gallery
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* VIDEOS */}
          <motion.div
            initial={false}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 mt-24"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
                Watch & Experience
              </p>
              <span className="h-px w-8 bg-green-600" />
            </div>

            <div className="mt-3 flex items-end justify-between gap-5">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
                  Community on Screen
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                  Experience the celebrations, performances and community
                  moments of NIA.
                </p>
              </div>

              <Link
                href="/gallery"
                className="hidden items-center gap-2 text-sm font-bold text-[#0B1F3A] transition hover:text-orange-500 sm:inline-flex"
              >
                View All Videos
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          {/* VIDEO CARDS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {videoItems.map((video, index) => (
              <motion.button
                key={video.id}
                type="button"
                onClick={() => setSelectedVideo(video)}
                initial={false}
                whileInView={
                  reducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl bg-[#0B1F3A] text-left shadow-lg shadow-slate-900/5 outline-none transition duration-300 hover:-translate-y-2 hover:shadow-2xl focus:ring-4 focus:ring-orange-500/30"
                aria-label={`Play ${video.title}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/50" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                      <span className="absolute inset-0 rounded-full border border-white/70 transition duration-500 group-hover:scale-125 group-hover:opacity-0" />
                      <Play
                        size={24}
                        fill="currentColor"
                        className="ml-1 text-[#0B1F3A] group-hover:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-bold text-white">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300">Click to play</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeImage();
            }
          }}
        >
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-[#0B1F3A] shadow-2xl">
            <div className="relative aspect-[16/10] max-h-[78vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
            <div className="border-t border-white/10 px-5 py-4 sm:px-7">
              <h3 className="text-lg font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Niagara Indian Association
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeVideo();
            }
          }}
        >
          <button
            type="button"
            onClick={closeVideo}
            aria-label="Close video"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <video
              ref={videoRef}
              key={selectedVideo.video}
              src={selectedVideo.video}
              poster={selectedVideo.thumbnail}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="block max-h-[75vh] w-full bg-black"
              onError={(event) => {
                console.error("VIDEO ERROR:", event.currentTarget.error);
                console.error("VIDEO SOURCE:", selectedVideo.video);
              }}
            />

            <div className="bg-[#0B1F3A] px-5 py-4">
              <h3 className="text-lg font-bold text-white">
                {selectedVideo.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Niagara Indian Association
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
