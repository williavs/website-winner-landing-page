// Centralized content for the landing page and all major components
import { Zap, ArrowDownToDot } from "lucide-react";
import React from "react";

export const heroContent = {
  talkAbout: [
    "AI Training for Law Enforcement",
    "Operational Intelligence",
    "SOP Automation",
    "Prompt Engineering",
    "Corrections Intelligence",
    "Inmate Manipulation Prevention",
    "Digital Force Multipliers",
  ],
  intro: "Welcome to ShieldCraft AI.",
  introLink: "/features",
  introLinkText: "Explore Features",
  headline: "AI-Driven Training & SOP Systems for Law Enforcement.",
  subheadline: "Modernize operations. Train smarter. Reduce risk.",
  description:
    "We help agencies train their workforce and optimize workflows with AI. Learn how to streamline intelligence, reduce human error, and prevent manipulation.",
  cta: {
    primary: { text: "Start Free", href: "/signup" },
    secondary: { text: "Book a Consultation", href: "/contact" },
  },
  backgroundImg:
    "https://raw.githubusercontent.com/designali-in/designali/refs/heads/main/apps/www/public/images/gradient-background-top.png",
};

export const featuresContent = [
  {
    title: "Law Enforcement Ready",
    description: "Tailored specifically for policing, corrections, and federal operations.",
    icon: "IconBadge",
  },
  {
    title: "Fast SOP Generation",
    description: "Quickly create, update, and standardize procedures using AI prompts.",
    icon: "IconListDetails",
  },
  {
    title: "Prompt Libraries",
    description: "Use tested prompt templates for incident reports, debriefs, intel logs, and more.",
    icon: "IconFileText",
  },
  {
    title: "Risk Mitigation",
    description: "Reduce liability and manipulation risk through standardized AI workflows.",
    icon: "IconShieldCheck",
  },
  {
    title: "Instructor Tools",
    description: "Train-the-trainer toolkits and slide decks for AI integration.",
    icon: "IconPresentation",
  },
  {
    title: "One-on-One Consulting",
    description: "Get custom training and prompt engineering support from field experts.",
    icon: "IconUserCheck",
  },
  {
    title: "Works Everywhere",
    description: "No software to install. Use on web, secure desktop, or mobile devices.",
    icon: "IconGlobe",
  },
  {
    title: "Backed by Experience",
    description: "Built by law enforcement for law enforcement — we speak your language.",
    icon: "IconStar",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: {
      monthly: 19,
      yearly: 180,
    },
    description: "For solo trainers, officers, and new users.",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-500/30 blur-2xl rounded-full" />
        <Zap className="w-7 h-7 relative z-10 text-blue-500 dark:text-blue-400 animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "Prompt Library Access",
        description: "Use ready-made templates for common tasks.",
        included: true,
      },
      {
        name: "Self-paced Training Course",
        description: "Learn the basics of AI in law enforcement.",
        included: true,
      },
      {
        name: "Email Support",
        description: "Get answers within 24 hours.",
        included: true,
      },
      {
        name: "Custom SOP Builder",
        description: "Generate new procedures with AI assistance.",
        included: false,
      },
    ],
  },
  {
    name: "Pro",
    price: {
      monthly: 79,
      yearly: 750,
    },
    description: "For agencies, instructors, and training units.",
    highlight: true,
    badge: "Most Popular",
    icon: (
      <div className="relative">
        <ArrowDownToDot className="w-7 h-7 relative z-10" />
      </div>
    ),
    features: [
      {
        name: "All Starter Features",
        description: "Includes everything in the Starter tier.",
        included: true,
      },
      {
        name: "Custom SOP Builder",
        description: "Draft and revise protocols using AI.",
        included: true,
      },
      {
        name: "Live Webinar Access",
        description: "Attend exclusive monthly training events.",
        included: true,
      },
      {
        name: "Consultation Credits",
        description: "Monthly expert sessions included.",
        included: true,
      },
    ],
  },
];

export const timelineData = [
  {
    title: "Founding",
    content: <p>ShieldCraft AI launched to modernize training in high-risk environments.</p>,
  },
  {
    title: "Early Adoption",
    content: <p>Secured partnerships with law enforcement instructors and corrections agencies.</p>,
  },
  {
    title: "Next Phase",
    content: <p>Scaling through webinars, SOP libraries, and on-demand consulting.</p>,
  },
];

export const cardDemo = {
  title: "Explore ShieldCraft",
  description: "See how we help agencies scale AI training with ease.",
  content: "AI prompt libraries, SOP automation, and real-world use cases — all in one.",
  button: "Discover More",
};

export const testimonials = [
  {
    text: "ShieldCraft AI gave our instructors the tools they needed to integrate AI into daily operations.",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Lt. Greg Mason",
    role: "Training Director, State DOC",
  },
  {
    text: "The SOP builder and prompt guides cut our admin time by 50%. Huge for field supervisors.",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Captain Rachel Lopez",
    role: "Field Operations, Sheriff's Office",
  },
  {
    text: "We use ShieldCraft to teach AI literacy to cadets. It's become a staple in our academy curriculum.",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Chief Ed Harmon",
    role: "Academy Director",
  },
  {
    text: "Outstanding support. The consulting package gave us exactly what we needed to roll out AI across units.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Angela Ray",
    role: "Intelligence Coordinator, Federal Agency",
  },
  // Additional testimonials
  {
    text: "Our agency's onboarding process is now seamless thanks to ShieldCraft's prompt packs.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Sgt. Mike Thompson",
    role: "Onboarding Lead, City Police",
  },
  {
    text: "The micro courses are perfect for busy officers. Training is now on our schedule.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Officer Dana Kim",
    role: "Patrol Officer, Metro PD",
  },
  {
    text: "We saw a measurable drop in SOP-related errors after adopting ShieldCraft.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Chief Robert Ellis",
    role: "Chief of Police, County PD",
  },
  {
    text: "The consulting team understood our unique needs and delivered actionable solutions.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Commander Lisa Patel",
    role: "Operations Commander, State Police",
  },
  {
    text: "Prompt engineering support was a game changer for our investigations unit.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Detective Mark Rivera",
    role: "Investigations, City PD",
  },
  {
    text: "The live training was engaging and directly relevant to our daily work.",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    name: "Lt. Sarah O'Connor",
    role: "Training Supervisor, Sheriff's Office",
  },
  {
    text: "ShieldCraft's SOP automation saved us countless hours each month.",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Capt. James Wu",
    role: "Administrative Captain, State DOC",
  },
  {
    text: "We now have a single source of truth for all our procedures. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    name: "Deputy Emily Carter",
    role: "Policy Coordinator, County Sheriff's Office",
  },
]; 