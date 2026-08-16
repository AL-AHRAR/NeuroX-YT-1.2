export type NavItem = {
  label: string;
  href: string;
  section?: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/", section: "top" },
  { label: "Features", href: "/", section: "features" },
  { label: "Download", href: "/download" },
  { label: "About NeuroX YT", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/", section: "features" },
    { label: "Download", href: "/download" },
    { label: "Updates", href: "/changelog" },
  ],
  resources: [
    { label: "Documentation", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/about#contact" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/about#contact" },
    { label: "Privacy", href: "/about#privacy" },
  ],
};
