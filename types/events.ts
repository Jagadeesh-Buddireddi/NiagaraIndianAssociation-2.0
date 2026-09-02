export type EventActivity = {
  number: string;
  title: string;
  time: string;
  location: string;
  address?: string;
  description: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  time: string;
  location: string;
  address?: string;
  description: string;
  image: string;

  status: "upcoming" | "past";

  featured?: boolean;

  activities?: EventActivity[];
};