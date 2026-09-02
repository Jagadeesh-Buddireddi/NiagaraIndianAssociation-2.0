"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { motion } from "framer-motion";
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
  const [selectedVideo, setSelectedVideo] =
    useState<VideoItem | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const closeVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setSelectedVideo(null);
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo, closeVideo]);

  // Close modal with ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    if (selectedVideo) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedVideo, closeVideo]);

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          {/* =====================================================
              PHOTO GALLERY
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-end justify-between"
          >
            <div>
              <h2 className="text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
                Photo Gallery
              </h2>
            </div>

            <Link
              href="/gallery"
              className="hidden items-center gap-2 text-sm font-bold text-[#0B1F3A] transition hover:text-orange-500 sm:inline-flex"
            >
              View Gallery
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative h-60 overflow-hidden rounded-2xl bg-slate-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm font-bold text-white">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]"
            >
              View Gallery
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* =====================================================
              VIDEOS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                  Videos
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

          {/* =====================================================
              VIDEO CARDS
          ===================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {videoItems.map((video, index) => (
              <motion.button
                key={video.id}
                type="button"
                onClick={() => openVideo(video)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-[#0B1F3A]
                  text-left
                  focus:outline-none
                  focus:ring-4
                  focus:ring-orange-500/30
                "
                aria-label={`Play ${video.title}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/45" />

                  {/* PLAY BUTTON */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        shadow-xl
                        transition
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-orange-500
                      "
                    >
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

                  <p className="mt-2 text-xs text-slate-300">
                    Click to play
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {selectedVideo && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            backdrop-blur-sm
            sm:p-8
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeVideo();
            }
          }}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeVideo}
            aria-label="Close video"
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
              sm:right-8
              sm:top-8
            "
          >
            <X size={24} />
          </button>

          {/* VIDEO */}

          <div
            className="
              w-full
              max-w-5xl
              overflow-hidden
              rounded-2xl
              bg-black
              shadow-2xl
            "
          >
            <video
              ref={videoRef}
              key={selectedVideo.video}
              src={selectedVideo.video}
              poster={selectedVideo.thumbnail}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="
                block
                max-h-[75vh]
                w-full
                bg-black
              "
              onError={(event) => {
                console.error(
                  "VIDEO ERROR:",
                  event.currentTarget.error
                );

                console.error(
                  "VIDEO SOURCE:",
                  selectedVideo.video
                );
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
