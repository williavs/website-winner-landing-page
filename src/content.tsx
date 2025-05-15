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
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
]; 