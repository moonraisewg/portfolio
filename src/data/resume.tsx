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
      company: "POLYQUEST",
      href: "https://polyquest.xyz/",
      badges: ["Solana", "Gaming", "On-chain Quests", "Web3"],
      location: "KR",
      title: "Polyquest",
      logoUrl: "https://polyquest.xyz/favicon.ico",
      start: "2024",
      end: "Present",
      description:
        "Polyquest is an on-chain quest platform powered by Solana, designed for gamers and Web3 communities to engage with decentralized applications through gamified experiences.",
    },
    {
      company: "UNKOMON",
      href: "https://x.com/unkomon_xyz",
      badges: ["SocialFi", "NFT", "Solana", "Web3"],
      location: "JP",
      title: "UNKOMON",
      logoUrl: "https://pbs.twimg.com/profile_images/1879805337710350336/WPGCPRvv_400x400.jpg",
      start: "2024",
      end: "Present",
      description:
        "UNKOMON is a SocialFi project on Solana blending NFTs and social engagement, aiming to create a unique decentralized identity and interaction experience.",
    },
    {
      company: "Solid",
      href: "https://mysolid.io/",
      badges: ["KYC", "Web3", "Privacy"],
      location: "US",
      title: "Solid",
      logoUrl: "https://mysolid.io/logo_black.svg",
      start: "2024",
      end: "Present",
      description:
        "Solid is a Web3 platform offering privacy-first KYC services that empower users to verify identities while maintaining control over personal data.",
    },
    {
      company: "DePocket",
      href: "https://www.depocket.com/",
      badges: ["DeFi", "Multi-chain", "NFT", "Web3"],
      location: "VN",
      title: "DePocket",
      logoUrl: "https://www.depocket.com/favicon.ico",
      start: "2019",
      end: "2023",
      description:
        "DePocket is a multi-chain DeFi dashboard that allows users to manage crypto assets, DeFi protocols, and NFTs across multiple blockchains in one place.",
    },
    {
      company: "Bullbot",
      href: "https://bullbot.ai/",
      badges: ["Telegram Bot", "Solana", "DEX & CEX", "Web3"],
      location: "UK",
      title: "Bullbot",
      logoUrl: "/bullbot.png",
      start: "2021",
      end: "2023",
      description:
        "Bullbot is an advanced Telegram bot integrated with Solana and both DEX & CEX platforms, providing users with trading tools and alerts within chat.",
    },
    {
      company: "pie.fun",
      href: "https://www.pie.fun/en",
      badges: ["DeFi", "Solana", "ETF", "Web3"],
      location: "KR",
      title: "pie.fun",
      logoUrl: "https://www.pie.fun/favicon.ico",
      start: "2024",
      end: "Present",
      description:
        "pie.fun is an on-chain ETF platform built on Solana that lets users invest in narrative-driven token baskets through a single transaction.",
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
      title: "Moon Wallet",
      href: "https://gokei.xyz/",
      dates: "2025 - Present",
      active: true,
      description:
        "Moon Wallet is a secure, user-friendly multisignature wallet designed for Web3 users. It offers advanced features for complete control over digital assets, ensuring a safe and seamless experience for managing cryptocurrencies and decentralized applications.",
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
          href: "https://gokei.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/video/videodemo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Jaction - backbone for Solana Actions & Blinks",
      dates: "2025",
      location: "",
      description:
        "Build your Actions & Blinks effortlessly in seconds without any worries about infrastructure!",
      image:
        "https://jaction.xyz/_next/image?url=%2Fimages%2Fdegen.jpeg&w=1080&q=75",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links:[
        {
          title: "Website",
          href: "https://jaction.xyz/",
          icon: <Icons.globe className="size-3" />,
        }
      ]
    },
  ],
} as const;
