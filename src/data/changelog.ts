export type ChangeItem = {
  version: string;
  date: string;
  title: string;
  highlight?: boolean;
  items: string[];
};

export const changelog: ChangeItem[] = [
  {
    version: "1.2",
    date: "August 16, 2026",
    title: "A calmer, faster NeuroX YT",
    highlight: true,
    items: [
      "Refined interface with tighter typography and quieter surfaces",
      "Significantly faster cold start and video loading",
      "Improved stability across long watching sessions",
      "New player layout with adaptive quality and low-data mode",
      "Offline downloads for watching without a connection",
      "Updated settings for appearance, playback, and data usage",
    ],
  },
  {
    version: "1.1",
    date: "June 2, 2026",
    title: "The first public release",
    items: [
      "Initial Android release of the NeuroX YT video app",
      "Core video browsing with smooth scrolling",
      "Light and dark appearance",
      "Local watch history",
      "First-run onboarding",
    ],
  },
  {
    version: "1.0",
    date: "April 10, 2026",
    title: "Private preview",
    items: [
      "Closed preview for design partners",
      "Prototype player and library surfaces",
      "Early performance instrumentation",
    ],
  },
];