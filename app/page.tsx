import Hero from "@/components/hero/Hero";
import Statistics from "@/components/statistics/Statistics";
import EventsSection from "@/components/events/EventsSection";
import MediaShowcase from "@/components/media/MediaShowcase";
import SponsorsSection from "@/components/sponsors/SponsorsSection";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import Footer from "@/components/footer/Footer";
import ChatBubble from "@/components/chatbot/ChatBubble";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <EventsSection />
      <MediaShowcase />
      <SponsorsSection />
      <NewsletterSection />
      <Footer />
      <ChatBubble />
    </>
  );
}
