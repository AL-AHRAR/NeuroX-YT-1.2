export type DemoMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export const demoSeed: DemoMessage[] = [
  {
    id: "s1",
    role: "user",
    content: "Search NeuroX YT",
  },
  {
    id: "s2",
    role: "assistant",
    content:
      "Welcome to NeuroX YT 1.2 — ready when you are. Search any video, or start with a suggestion below.",
  },
];

export const suggestions = [
  "Search NeuroX YT",
  "Nature documentaries",
  "Cooking tutorials",
  "Music videos",
];

export function mockReply(input: string): string {
  const text = input.trim().toLowerCase();

  if (!text) {
    return "Whenever you’re ready, I’m here.";
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("hey") || text.includes("search neuroxyt")) {
    return "NeuroX YT 1.2 is online. Type a topic — music, tutorials, documentaries — and I’ll find videos for it.";
  }

  if (text.includes("who are you") || text.includes("what are you")) {
    return "I’m NeuroX YT, a lightweight video app designed to sit quietly beside your day. Fast, private, and built to feel inevitable rather than impressive.";
  }

  if (text.includes("nature") || text.includes("documentary")) {
    return "Top results for “nature documentaries”:\n1. Planet Earth — 4K · 52 min\n2. The Blue Planet — 48 min\n3. Wild Africa — 44 min\nTap any result to start watching instantly.";
  }

  if (text.includes("cook") || text.includes("recipe") || text.includes("food")) {
    return "Top results for “cooking tutorials”:\n1. 10-Minute Pasta — 8 min\n2. Perfect Omelette — 6 min\n3. Easy Bread at Home — 12 min\nTap any result to start watching instantly.";
  }

  if (text.includes("music") || text.includes("song") || text.includes("video")) {
    return "Top results for “music videos”:\n1. Midnight Drive — 4 min\n2. Golden Hour — 3 min\n3. City Lights — 5 min\nTap any result to start watching instantly.";
  }

  if (text.includes("download") || text.includes("install")) {
    return "NeuroX YT 1.2 is ready for Android. Open the Download page, install the APK, and you’ll be watching in under a minute.";
  }

  return `I read that as a request to find videos with you — not just answer you.\n\n“${input.trim()}”\n\nIf this is a topic, I’ll search it. If it’s a question, I’ll answer it cleanly. Tell me which way you want to go.`;
}