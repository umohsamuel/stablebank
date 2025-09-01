export const appRoutes = {
  auth: {
    signIn: "/signin",
    signUp: "/signup",
    bankTag: "/bankTag",
  },
  dashboard: {
    user: {
      home: "/u/home",
      send: "/u/send",
      vcard: "/u/vcard",
      invest: "/u/invest",
      rewards: "/u/rewards",
      settings: "/u/settings",
    },
  },
};

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const UFooterLinks = [
  { label: "Help", route: "/help" },
  { label: "Email", route: "mailto:support@stablebank" },
  { label: "Twitter", route: "https://twitter.com/stablebank" },
  { label: "Discord", route: "https://discord.gg/stablebank" },
];
