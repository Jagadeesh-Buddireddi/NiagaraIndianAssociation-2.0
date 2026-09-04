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

    status: "past",

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
    id: "nia-consular-camp-2026",

    title: "Consular Camp",

    date: "2026-11-22",

    dateLabel: "November 22, 2026",

    time: "Time to be announced",

    location: "Niagara Falls",

    description:
      "The Niagara Indian Association is hosting a Consular Camp to provide life certificate services to Indian and Indo-Canadian pensioners and consultations on various consular matters.",

    image: "/images/events/consular-camp-2026.png",

    status: "upcoming",

    featured: true,

    activities: [
      {
        number: "01",

        title: "Life Certificates",

        time: "Time to be announced",

        location: "Niagara Falls",

        description:
          "Services to assist Indian and Indo-Canadian pensioners with life certificate requirements.",
      },

      {
        number: "02",

        title: "Document Attestation",

        time: "Time to be announced",

        location: "Niagara Falls",

        description:
          "Consultation and assistance related to document attestation matters.",
      },

      {
        number: "03",

        title: "OCI / Passport Guidance",

        time: "Time to be announced",

        location: "Niagara Falls",

        description:
          "Guidance and consultations regarding OCI and passport-related matters.",
      },

      {
        number: "04",

        title: "Power of Attorney",

        time: "Time to be announced",

        location: "Niagara Falls",

        description:
          "Consultation regarding power of attorney and related consular requirements.",
      },

      {
        number: "05",

        title: "Visa / PCC Queries",

        time: "Time to be announced",

        location: "Niagara Falls",

        description:
          "Consultations for visa and Police Clearance Certificate (PCC) related queries.",
      },

      {
        number: "06",

        title: "Other Consular Consultations",

        time: "Time to be announced",

        location: "Niagara Falls",

        description:
          "General consultations on various consular matters and services.",
      },
    ],
  },
];