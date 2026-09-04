import Hero from "@/components/hero/Hero";
import EventsSection from "@/components/events/EventsSection";
import CommunityPortalSection from "@/components/community/CommunityPortalSection";
import MediaShowcase from "@/components/media/MediaShowcase";
import SponsorsSection from "@/components/sponsors/SponsorsSection";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import Footer from "@/components/footer/Footer";
import ChatBubble from "@/components/chatbot/ChatBubble";

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip bg-[#fffdf8]">
      {/* =========================================================
          HERO
          The Navbar overlays this section on the homepage.
      ========================================================= */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* =========================================================
          HERO → EVENTS TRANSITION
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 -mt-8 h-16 bg-gradient-to-b from-transparent via-[#fffdf8]/80 to-[#fffdf8]"
      />

      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section id="events" className="relative">
        <EventsSection />
      </section>

      {/* =========================================================
          EVENTS → COMMUNITY PORTAL TRANSITION
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 h-10 bg-gradient-to-b from-[#fffdf8] via-orange-50/30 to-[#fffdf8]"
      />

      {/* =========================================================
          NIA COMMUNITY PORTAL
      ========================================================= */}
      <CommunityPortalSection />

      {/* =========================================================
          COMMUNITY PORTAL → MEDIA TRANSITION
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 h-10 bg-gradient-to-b from-[#07182f] via-slate-100/40 to-[#fffdf8]"
      />

      {/* =========================================================
          NIA IN MOTION
      ========================================================= */}
      <section id="media" className="relative">
        <MediaShowcase />
      </section>

      {/* =========================================================
          MEDIA → SPONSORS TRANSITION
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 h-12 bg-gradient-to-b from-[#fffdf8] via-orange-50/25 to-[#fffdf8]"
      />

      {/* =========================================================
          PARTNERS
      ========================================================= */}
      <section id="partners" className="relative">
        <SponsorsSection />
      </section>

      {/* =========================================================
          SPONSORS → NEWSLETTER TRANSITION
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 h-12 bg-gradient-to-b from-[#fffdf8] via-green-50/20 to-[#fffdf8]"
      />

      {/* =========================================================
          STAY CONNECTED / NEWSLETTER
      ========================================================= */}
      <section id="connect" className="relative">
        <NewsletterSection />
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

      {/* =========================================================
          AI ASSISTANT
      ========================================================= */}
      <ChatBubble />
    </main>
  );
}
