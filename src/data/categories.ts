export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  videos: { title: string; duration: string; views: string }[];
};

export const categories: Category[] = [
  {
    slug: "music",
    title: "Music Videos",
    tagline: "Watch music videos online free",
    description:
      "Stream music videos online with NeuroX YT — the free video platform and YouTube alternative. Fast video streaming for music, concerts, and live sessions on any low-end Android device.",
    videos: [
      { title: "Midnight Drive — Official Music Video", duration: "4:12", views: "2.4M views" },
      { title: "Golden Hour — Acoustic Session", duration: "3:48", views: "1.1M views" },
      { title: "City Lights — Live Performance", duration: "5:02", views: "890K views" },
      { title: "Neon Sky — Remix", duration: "3:21", views: "640K views" },
    ],
  },
  {
    slug: "documentaries",
    title: "Documentaries",
    tagline: "Watch documentaries online free",
    description:
      "Watch documentaries online free on NeuroX YT — the lightweight video platform for nature, science, and history. A video sharing platform that streams smoothly on weak devices.",
    videos: [
      { title: "Planet Earth — Full Documentary", duration: "52:10", views: "5.2M views" },
      { title: "The Blue Planet — Ocean Life", duration: "48:33", views: "3.8M views" },
      { title: "Wild Africa — Nature Series", duration: "44:05", views: "2.1M views" },
      { title: "Ancient Civilizations — History", duration: "56:40", views: "1.7M views" },
    ],
  },
  {
    slug: "cooking",
    title: "Cooking & Recipes",
    tagline: "Watch cooking tutorials online free",
    description:
      "Watch cooking tutorials online free with NeuroX YT — the free video platform for recipes and kitchen tips. Fast video streaming for step-by-step cooking on any device.",
    videos: [
      { title: "10-Minute Pasta — Quick Recipe", duration: "8:15", views: "980K views" },
      { title: "Perfect Omelette — Breakfast Guide", duration: "6:02", views: "720K views" },
      { title: "Easy Bread at Home — Baking", duration: "12:40", views: "540K views" },
      { title: "Traditional Dishes — Full Course", duration: "18:22", views: "410K views" },
    ],
  },
  {
    slug: "gaming",
    title: "Gaming",
    tagline: "Watch gaming videos online free",
    description:
      "Watch gaming videos online free on NeuroX YT — the lightweight video platform for gameplay, walkthroughs, and esports highlights. Smooth video streaming on low-end devices.",
    videos: [
      { title: "Speedrun World Record — Full Run", duration: "24:18", views: "3.1M views" },
      { title: "Top 10 Plays of the Week", duration: "9:45", views: "1.9M views" },
      { title: "Beginner's Guide — Walkthrough", duration: "15:30", views: "860K views" },
      { title: "Esports Finals — Highlights", duration: "11:08", views: "2.3M views" },
    ],
  },
  {
    slug: "education",
    title: "Education & Tutorials",
    tagline: "Watch tutorials online free",
    description:
      "Watch tutorials online free with NeuroX YT — the free video platform and YouTube alternative for learning. Fast video streaming for courses, lessons, and how-to guides.",
    videos: [
      { title: "Learn English in 30 Days — Lesson 1", duration: "20:12", views: "4.5M views" },
      { title: "Math Basics — Complete Course", duration: "35:40", views: "2.8M views" },
      { title: "How to Code — Beginner Series", duration: "28:05", views: "1.6M views" },
      { title: "Science Explained — Short Lessons", duration: "7:55", views: "990K views" },
    ],
  },
  {
    slug: "news",
    title: "News & Entertainment",
    tagline: "Watch news videos online free",
    description:
      "Watch news and entertainment videos online free on NeuroX YT — the lightweight video platform for daily updates, shows, and highlights. A video sharing platform for everyone.",
    videos: [
      { title: "Daily News Roundup — Today", duration: "12:30", views: "1.2M views" },
      { title: "Entertainment Weekly — Highlights", duration: "14:18", views: "780K views" },
      { title: "Tech Updates — This Week", duration: "10:05", views: "650K views" },
      { title: "Sports Highlights — Best Moments", duration: "8:42", views: "2.0M views" },
    ],
  },
];