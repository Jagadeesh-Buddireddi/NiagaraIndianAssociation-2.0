import type { EventItem } from "@/types/events";

export const events: EventItem[] = [
  // ============================================================
  // PAST EVENT
  // ============================================================
  {
    id: "india-independence-day-2026",

    title: "India Independence Day Celebration",

    date: "2026-08-15",

    dateLabel: "August 15, 2026",

    time: "2:00 PM onwards",

    location: "Niagara Region",

    description:
      "Join the Niagara Indian Association and the community as we come together to celebrate India's Independence Day through culture, community and a series of special events across Niagara.",

    image: "/images/events/independence-day.png",

    // This event has already happened.
    status: "past",

    // IMPORTANT:
    // A past event must never be featured.
    featured: false,

    activities: [
      {
        number: "01",

        title: "Special Flag Raising Ceremony",

        time: "2:00 PM onwards",

        location: "Niagara Falls",

        description:
          "A special flag raising ceremony celebrating India's Independence Day and the enduring connection between India and Canada.",
      },

      {
        number: "02",

        title: "Community Celebration",

        time: "Time to be confirmed",

        location: "Bethany Community Church",

        address:
          "1388 Third Street Louth, St. Catharines, ON L2R 6P9",

        description:
          "A community celebration bringing families and friends together to celebrate India's Independence Day. Everyone is welcome.",
      },

      {
        number: "03",

        title: "Niagara Falls Indian Flag Illumination",

        time: "10:15 PM onwards",

        location: "Niagara Falls",

        description:
          "Niagara Falls will be illuminated in the colours of the Indian flag as part of the Independence Day celebration.",
      },
    ],
  },

  // ============================================================
  // UPCOMING EVENT
  // ============================================================
  {
    id: "diwali-celebration-2026",

    title: "NIA Diwali Celebration",

    date: "2026-11-07",

    dateLabel: "November 7, 2026",

    time: "5:00 PM onwards",

    location: "St. Catharines",

    address: "Address to be confirmed",

    description:
      "Join the Niagara Indian Association for an evening of celebration, culture, music, dance and community as we celebrate Diwali together.",

    image: "/images/events/diwali-2026.png",

    // This event is upcoming.
    status: "upcoming",

    // This is the featured upcoming event.
    featured: true,

    activities: [
      {
        number: "01",

        title: "Welcome & Lighting Ceremony",

        time: "5:00 PM",

        location: "Main Hall",

        description:
          "Join us for the traditional Diwali lighting ceremony and opening celebration.",
      },

      {
        number: "02",

        title: "Cultural Performances",

        time: "6:00 PM",

        location: "Main Stage",

        description:
          "Enjoy cultural performances from members of the Niagara community.",
      },

      {
        number: "03",

        title: "Community Dinner",

        time: "8:00 PM",

        location: "Dining Area",

        description:
          "Enjoy an evening of food and community connection.",
      },
    ],
  },
];