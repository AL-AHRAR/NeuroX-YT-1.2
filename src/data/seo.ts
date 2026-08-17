export const SITE_URL = "https://neuroxyt.galiosamhini922.workers.dev";

export const siteKeywords = [
  "NeuroX YT",
  "NeuroX",
  "video platform",
  "online video platform",
  "watch videos online",
  "free video platform",
  "YouTube alternative",
  "lightweight video platform",
  "fast video streaming",
  "video sharing platform",
  "منصة فيديو",
  "مشاهدة الفيديوهات",
  "منصة فيديو مجانية",
  "بديل يوتيوب",
  "مشاهدة الفيديوهات أونلاين",
  "منصة مشاركة الفيديو",
  "منصة فيديو خفيفة وسريعة",
].join(", ");

export const pageSeo = {
  home: {
    title: "NeuroX YT 1.2 — Free Lightweight Video Platform | YouTube Alternative",
    description:
      "Watch videos online free with NeuroX YT — the lightweight video platform and YouTube alternative for low-end Android devices. Fast video streaming, video sharing platform, watch videos online without lag.",
  },
  download: {
    title: "Download NeuroX YT 1.2 APK — Free Video Platform for Android",
    description:
      "Download NeuroX YT 1.2 APK free — the lightweight video platform for Android. Watch videos online, fast video streaming on low-end devices. Free video platform, YouTube alternative.",
  },
  categories: {
    title: "Video Categories — Watch Videos Online Free | NeuroX YT",
    description:
      "Browse video categories on NeuroX YT — music, documentaries, cooking, gaming, education and more. Watch videos online free on the lightweight video platform for low-end devices.",
  },
  about: {
    title: "About NeuroX YT — The Lightweight Video Platform Story",
    description:
      "NeuroX YT is a free video platform and YouTube alternative built for low-end Android devices. Fast video streaming, video sharing platform, watch videos online free.",
  },
  faq: {
    title: "NeuroX YT FAQ — Free Video Platform Questions Answered",
    description:
      "Answers about NeuroX YT — the lightweight video platform. Installation, Android requirements, privacy, updates, and how to watch videos online free.",
  },
  changelog: {
    title: "What's New in NeuroX YT 1.2 — Changelog & Updates",
    description:
      "See what's new in NeuroX YT 1.2 — the free video platform and YouTube alternative. Faster performance, better stability, and a refined watching experience.",
  },
  notFound: {
    title: "Page Not Found — NeuroX YT Video Platform",
    description: "The page you're looking for doesn't exist. Head back to NeuroX YT and continue watching videos online free.",
  },
};

export function categorySeo(slug: string, title: string, description: string) {
  return {
    title: `${title} — Watch Online Free | NeuroX YT`,
    description,
    url: `${SITE_URL}/category/${slug}`,
  };
}