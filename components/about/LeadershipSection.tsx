"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  boardAdvisoryTeam,
  executiveLeadership,
  type LeadershipMember,
  type LeadershipProfile,
} from "@/data/leadership";

function BoardAvatar({
  member,
  priority = false,
}: {
  member: LeadershipMember;
  priority?: boolean;
}) {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  const initials = member.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!imageUnavailable) {
    return (
      <Image
        src={member.image}
        alt={member.name}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 500px"
        className="object-cover"
        onError={() => setImageUnavailable(true)}
      />
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#fff8e8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_16%,rgba(255,153,51,.64),transparent_25%),radial-gradient(circle_at_14%_84%,rgba(19,136,8,.48),transparent_32%)]" />
      <div className="absolute inset-6 rounded-full border border-[#0b1f3a]/15" />
      <div className="absolute inset-12 rounded-full border border-dashed border-[#0b1f3a]/20" />
      <span className="relative font-serif text-6xl font-medium tracking-[.12em] text-[#0b1f3a]">
        {initials}
      </span>
      <span className="absolute bottom-5 rounded-full border border-[#0b1f3a]/15 bg-white/65 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.17em] text-[#0b1f3a]/70 backdrop-blur">
        Photo coming soon
      </span>
    </div>
  );
}

function ProfileSlide({
  member,
  index,
  onOpen,
}: {
  member: LeadershipProfile;
  index: number;
  onOpen: (member: LeadershipProfile) => void;
}) {
  const reduceMotion = useReducedMotion();
  const leadershipRole = member.category === "Executive Leadership";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(member)}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      className="group grid w-full gap-8 rounded-[2rem] border border-white/10 bg-white/[.06] p-4 text-left shadow-[0_26px_70px_rgba(0,0,0,.2)] backdrop-blur-xl transition-colors hover:border-orange-300/45 hover:bg-white/[.085] lg:grid-cols-[500px_1fr] lg:items-center lg:gap-12 lg:p-6"
    >
      <div className="relative h-[500px] w-full max-w-[500px] justify-self-center overflow-hidden rounded-[1.45rem] border border-white/10">
        <BoardAvatar member={member} priority={index === 0} />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#ff9933] via-[#fffdf8] to-[#138808]" />
        <span className="absolute left-5 top-5 rounded-full border border-[#0b1f3a]/15 bg-white/75 px-3 py-1.5 text-[10px] font-bold tracking-[.18em] text-[#0b1f3a] backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="px-3 pb-3 lg:px-0">
        <p className="text-[10px] font-bold uppercase tracking-[.25em] text-orange-300">
          {leadershipRole
            ? "NIA executive leadership"
            : "NIA board & advisory"}
        </p>

        <h3 className="mt-5 max-w-xl text-4xl font-black leading-[.95] tracking-[-.04em] text-white sm:text-6xl">
          {member.name}
        </h3>

        <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-slate-200">
          {member.role}
        </p>

      </div>
    </motion.button>
  );
}

function MemberCarousel({
  members,
  title,
  onOpen,
}: {
  members: LeadershipProfile[];
  title: string;
  onOpen: (member: LeadershipProfile) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    duration: 24,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() ?? 0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div ref={emblaRef} aria-label={title} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {members.map((member, index) => (
            <div key={member.name} className="min-w-0 flex-[0_0_100%]">
              <ProfileSlide
                member={member}
                index={index}
                onOpen={onOpen}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[.24em] text-slate-400">
          <span className="text-orange-300">
            {String(selectedIndex + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 text-white/25">/</span>
          {String(members.length).padStart(2, "0")}
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label={`Previous ${title} member`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[.055] text-white transition hover:border-orange-300/60 hover:bg-orange-400 hover:text-[#07182f]"
          >
            <ArrowLeft size={19} />
          </button>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label={`Next ${title} member`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[.055] text-white transition hover:border-orange-300/60 hover:bg-orange-400 hover:text-[#07182f]"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileDialog({
  member,
  onClose,
}: {
  member: LeadershipProfile;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const profile = member.profile;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto bg-[#07182f]/85 p-4 py-8 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} profile`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={
          reduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={
          reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }
        }
        transition={{ duration: reduceMotion ? 0 : 0.28 }}
        className="relative my-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#fffdf8] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#0b1f3a]/15 bg-white/90 text-[#0b1f3a] shadow-sm transition hover:bg-orange-400"
          aria-label="Close profile"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-[minmax(0,440px)_1fr]">
          <div className="relative min-h-[430px] bg-[#fff8e8] lg:min-h-full">
            <div className="relative h-[430px] lg:sticky lg:top-0 lg:h-screen lg:max-h-[760px]">
              <BoardAvatar member={member} priority />

              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#ff9933] via-[#fffdf8] to-[#138808]" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07182f]/80 via-[#07182f]/20 to-transparent p-7 pt-24">
                <p className="text-[10px] font-bold uppercase tracking-[.25em] text-orange-200">
                  {member.category}
                </p>
                <p className="mt-2 text-lg font-bold text-white">
                  {member.role}
                </p>
              </div>
            </div>
          </div>

          <div className="max-h-[760px] overflow-y-auto p-7 sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[.28em] text-orange-600">
                NIA leadership profile
              </p>

              <h2 className="mt-5 text-4xl font-black leading-[.96] tracking-[-.04em] text-[#0b1f3a] sm:text-6xl">
                {member.name}
              </h2>

              <p className="mt-6 text-xl font-semibold leading-8 text-slate-600">
                {member.role}
              </p>

              <div className="mt-8 rounded-2xl border border-orange-200/70 bg-orange-50/70 p-6 sm:p-8">
                <div className="space-y-5">
                  {profile.introduction.split(/\n\s*\n/).map((paragraph, index) => (
                    <p
                      key={`${member.name}-paragraph-${index}`}
                      className="text-[15.5px] leading-[1.9] tracking-[0.005em] text-slate-700"
                      style={{
                        textAlign: "justify",
                        textAlignLast: "left",
                        hyphens: "auto",
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {profile.quote && (
                <div className="mt-7 rounded-2xl border border-[#0b1f3a]/10 bg-[#0b1f3a] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <Quote size={18} className="text-orange-300" />
                    <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange-300">
                      Favourite quote
                    </p>
                  </div>

                  <blockquote className="mt-4 text-lg font-medium leading-8 text-white">
                    “{profile.quote}”
                  </blockquote>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1f3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
              >
                <ArrowLeft size={16} />
                Back to leadership
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LeadershipSection() {
  const [selectedMember, setSelectedMember] =
    useState<LeadershipProfile | null>(null);

  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.7,
    delay: reduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  const closeProfile = useCallback(() => {
    setSelectedMember(null);

    requestAnimationFrame(() => {
      document.getElementById("leadership")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [reduceMotion]);

  return (
    <>
      <section
        id="leadership"
        className="relative isolate overflow-hidden bg-[#06172d] px-6 py-24 sm:px-10 lg:px-10 lg:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,59,101,.72),transparent_46%)]" />
        <div className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-500/20 blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-500/15 blur-[110px]" />
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#ff9933] via-[#fffdf8] to-[#138808]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={reveal.hidden}
            whileInView={reveal.visible}
            viewport={{ once: true, amount: 0.3 }}
            transition={transition()}
            className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-11 bg-orange-300" />
                <p className="text-[10px] font-bold uppercase tracking-[.34em] text-orange-300">
                  Niagara Indian Association
                </p>
              </div>

              <h2 className="mt-6 max-w-4xl text-5xl font-black leading-[.94] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">
                Meet the people moving our community forward.
              </h2>
            </div>

            <p className="max-w-sm text-base leading-8 text-slate-300">
              Select a profile to learn more about the people guiding NIA&apos;s
              work across Niagara.
            </p>
          </motion.div>

          <motion.div
            initial={reveal.hidden}
            whileInView={reveal.visible}
            viewport={{ once: true, amount: 0.2 }}
            transition={transition(0.08)}
            className="mt-12"
          >
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.3em] text-green-300">
                  Executive leadership
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Leading with intention.
                </h3>
              </div>

              <span className="hidden text-[10px] font-bold uppercase tracking-[.22em] text-slate-400 sm:block">
                One leader per slide
              </span>
            </div>

            <MemberCarousel
              members={executiveLeadership}
              title="Executive leadership"
              onOpen={setSelectedMember}
            />
          </motion.div>

          <motion.div
            initial={reveal.hidden}
            whileInView={reveal.visible}
            viewport={{ once: true, amount: 0.2 }}
            transition={transition(0.12)}
            className="mt-24 border-t border-white/10 pt-12"
          >
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.3em] text-green-300">
                  Board & advisory team
                </p>
                <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                  Different strengths. One purpose.
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-7 text-slate-300">
                Specialists and advocates helping NIA deliver inclusive,
                high-impact experiences.
              </p>
            </div>

            <MemberCarousel
              members={boardAdvisoryTeam}
              title="Board and advisory"
              onOpen={setSelectedMember}
            />
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedMember && (
          <ProfileDialog
            member={selectedMember}
            onClose={closeProfile}
          />
        )}
      </AnimatePresence>
    </>
  );
}
