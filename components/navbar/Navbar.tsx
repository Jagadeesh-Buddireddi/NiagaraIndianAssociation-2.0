"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const MEMBERSHIP_URL =
  "https://www.zeffy.com/en-CA/ticketing/niagara-indian-associations-memberships";

export default function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`${
        isHome ? "absolute" : "sticky"
      } left-0 top-0 z-[9999] w-full`}
    >
      {/* =========================================================
          WHITE NAVIGATION AREA
          Completely clean and readable.
      ========================================================= */}
      <motion.div
        className={`relative w-full ${
          isHome
            ? "bg-white"
            : "border-b border-slate-200/80 bg-white/95 backdrop-blur-xl"
        }`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                boxShadow:
                  scrolled && !isHome
                    ? "0 8px 30px rgba(15, 23, 42, 0.08)"
                    : "0 0 0 rgba(0,0,0,0)",
              }
        }
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:h-[82px] sm:px-8 lg:px-10">
          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            href="/"
            aria-label="Niagara Indian Association Home"
            onClick={closeMobileMenu}
            className="group relative flex shrink-0 items-center"
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.05,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Image
                src="/images/nia-logo.png"
                alt="Niagara Indian Association"
                width={64}
                height={64}
                priority
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
            </motion.div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-3 py-3 text-sm font-bold transition-colors duration-200 xl:px-3.5 ${
                    active
                      ? "text-[#0b294b]"
                      : "text-[#173653] hover:text-orange-500"
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Animated tricolor indicator */}
                  <motion.span
                    className="absolute bottom-1 left-1/2 h-[3px] -translate-x-1/2 overflow-hidden rounded-full"
                    initial={false}
                    animate={{
                      width: active ? "70%" : "0%",
                    }}
                    whileHover={{
                      width: "70%",
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-600" />
                  </motion.span>
                </Link>
              );
            })}
          </nav>

          {/* =====================================================
              MEMBERSHIP CTA
          ===================================================== */}
          <motion.a
            href={MEMBERSHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -2,
                    scale: 1.025,
                  }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.97,
                  }
            }
            className="group hidden items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-colors duration-200 hover:bg-orange-600 lg:inline-flex"
          >
            <span>Become a Member</span>

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>

          {/* =====================================================
              MOBILE BUTTON
          ===================================================== */}
          <motion.button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.92,
                  }
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0b294b] shadow-sm transition hover:border-orange-300 hover:bg-orange-50 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          rotate: -90,
                          opacity: 0,
                        }
                  }
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotate: 90,
                          opacity: 0,
                        }
                  }
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <X size={23} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          rotate: 90,
                          opacity: 0,
                        }
                  }
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotate: -90,
                          opacity: 0,
                        }
                  }
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <Menu size={23} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* =======================================================
            THE IMPORTANT PART:
            WHITE → HERO GRADIENT BLEND

            The navbar itself stays completely white.
            Only the bottom edge fades into the Hero.
        ======================================================= */}
        {isHome && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-full h-[105px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 10%, rgba(255,255,255,0.82) 25%, rgba(255,255,255,0.58) 42%, rgba(255,255,255,0.30) 62%, rgba(255,255,255,0.10) 82%, rgba(255,255,255,0) 100%)",
            }}
          />
        )}
      </motion.div>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="absolute left-0 right-0 top-[76px] z-[9998] border-t border-slate-200 bg-white shadow-2xl sm:top-[82px] lg:hidden"
          >
            <nav className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -12,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.04,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="group flex min-h-[52px] items-center justify-between border-b border-slate-100 text-base font-semibold text-[#0b294b] transition-colors hover:text-orange-500"
                    >
                      <span>{link.label}</span>

                      <ArrowRight
                        size={16}
                        className="translate-x-0 opacity-30 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  href={MEMBERSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: shouldReduceMotion
                      ? 0
                      : links.length * 0.04,
                  }}
                  className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Become a Member
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}