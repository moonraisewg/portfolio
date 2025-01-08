import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Moonraise WG",
  initials: "MWG",
  url: "https://moonraise.xyz",
  location: "Japan",
  locationLink: "https://www.google.com/maps/place/tokyo",
  description:
    "Raise your product from the idea to the moon!",
  summary:
    "We are a group of Web3 builders who have been active since 2019, initially starting as a team focused on developing and running arbitrage and MEV bots. In early 2020, we successfully raised $1M to build a multi-chain portfolio management application, which continues to serve to users this day. Despite the ups and downs of the market, we have remained committed to the future of crypto, continuing to support other teams as they turn their ideas into production-ready solutions.",
  avatarUrl: "/moonraise.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Solana",
    "Ethereum",
    "SUI",
    "Rust",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "Solana"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hi@moonraise.xyz",
    tel: "+84339639540",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/mwg-gh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/mwg-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/mwg-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/mwg-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hi@moonraise.xyz",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "TBA",
      href: "#",
      badges: [],
      location: "Remote",
      title: "TBA",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "TBA",
    },
    {
      company: "TBA",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "TBA",
    }
  ],
  education: [
    {
      school: "TBA",
      href: "https://ibo.org",
      degree: "TBA",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "TBA",
      href: "https://example.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Example",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "TBA.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "TBA",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "TBA.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;
