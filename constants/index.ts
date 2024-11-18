import { IconName } from "@/types/icons";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/home", key: "home", label: "Home" },
  { href: "/dashboard", key: "dashboard", label: "Dashboard" },
  { href: "/user-profile", key: "user_profile", label: "User Profile" },
  { href: "/table-list", key: "table_list", label: "Table List" },
  { href: "/notifications", key: "notifications", label: "Notifications" },
  { href: "/contacts", key: "contact_us", label: "Contact Us" },
];

export const FOOTER_LINKS = [
  {
    title: "About Us",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const SOCIAL_MEDIA_LINKS: { icon: IconName; href: string }[] = [
  { icon: "faSquareFacebook", href: "https://facebook.com" },
  { icon: "faSquareXTwitter", href: "https://twitter.com" },
  { icon: "faSquareInstagram", href: "https://instagram.com" },
  { icon: "faLinkedin", href: "https://linkedin.com" },
];
