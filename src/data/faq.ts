export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "what",
    question: "What is NeuroX YT 1.2?",
    answer:
      "NeuroX YT 1.2 is a lightweight YouTube-style video app for Android. It is designed for low-end devices — small, fast, and smooth on hardware that struggles with heavier apps.",
  },
  {
    id: "free",
    question: "Is NeuroX YT free?",
    answer:
      "NeuroX YT 1.2 is free to download and use. No subscriptions, no forced accounts, and no ads that interrupt your watching.",
  },
  {
    id: "platforms",
    question: "What platforms are supported?",
    answer:
      "NeuroX YT 1.2 currently ships for Android 5.0 (Lollipop) and higher. It is optimized for low-end devices with 1 GB of RAM or less.",
  },
  {
    id: "install",
    question: "How do I install NeuroX YT?",
    answer:
      "Download the NeuroX YT 1.2 APK on your Android device, allow “Install unknown apps” for your browser, then open the APK and confirm the install. Installation typically takes less than a minute.",
  },
  {
    id: "requirements",
    question: "What are the system requirements?",
    answer:
      "Android 5.0 or higher, a 1 GHz dual-core processor or better, 1 GB of RAM (2 GB recommended), and about 50 MB of free storage. An internet connection is required for streaming.",
  },
  {
    id: "updates",
    question: "Will there be updates?",
    answer:
      "Yes. NeuroX YT is actively developed. Version 1.2 focuses on speed, stability, and a more refined watching experience. Future releases will appear on the Updates page with a full changelog.",
  },
  {
    id: "latest",
    question: "How do I get the latest version?",
    answer:
      "Download NeuroX YT 1.2 from the Download page on this site. When a newer version is released, it will replace 1.2 as the latest build and appear at the top of the changelog.",
  },
  {
    id: "privacy",
    question: "Does NeuroX YT collect my data?",
    answer:
      "NeuroX YT is designed local-first. Watch history and saved videos stay on your device. We do not sell data, and we do not track you across the web.",
  },
];