export const SITE_CONFIG = {
  name: "Pro Impact Intel",
  tagline: "Amplify Your Presence",
  description:
    "Strategic marketing and corporate communications for North American businesses. Elevating brands with integrity and precision.",
  url: "https://proimpactintel.com",
  email: "connect@proimpactintel.com",
  phone: "+1 (416) 613-7612",
  phoneExt: "1",
  address: {
    street: "207 Queens Quay W., Suite 401",
    city: "Toronto",
    province: "ON",
    postalCode: "M5J 1A7",
    country: "Canada",
  },
  social: {
    instagram: "https://www.instagram.com/proimpactintel",
    facebook: "https://www.facebook.com/ProImpactIntel",
    linkedin: "https://www.linkedin.com/company/proimpactintel",
  },
} as const;

export const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  "Strategic Marketing",
  "Social Media Management",
  "Corporate Communications",
  "Brand Visibility",
  "Investor Relations",
  "Compliance Messaging",
  "Content Strategy",
  "Reputation Building",
  "Capital Markets Exposure",
  "Press Releases",
  "Crisis Communications",
  "Due Diligence",
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Companies Advised" },
  { value: 2.5, suffix: "B+", label: "Market Cap Supported", prefix: "$" },
  { value: 500, suffix: "+", label: "Press Releases Crafted" },
  { value: 98, suffix: "%", label: "Client Retention" },
] as const;

export const ANIMATION = {
  stagger: 0.12,
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
} as const;
