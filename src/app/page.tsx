'use client';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/timeline";
import { Hero } from "@/components/ui/hero-designali-landing";
import { Footer } from "@/components/ui/footer-section";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { PricingSection } from "@/components/blocks/pricing-section";
import { Zap, ArrowDownToDot, Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import React from "react";
import { useTheme } from "@/components/ui/theme-provider";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { testimonials, featuresContent } from "@/content";
import {
  IconBadge,
  IconListDetails,
  IconFileText,
  IconShieldCheck,
  IconPresentation,
  IconUserCheck,
  IconGlobe,
  IconStar,
} from "@tabler/icons-react";

const pricingTiers = [
  {
    name: "🟢 Good\nField-Ready Toolkit",
    price: 297,
    description: "AI Prompt Packs (3), 1 SOP Template, 1 Micro Course (on-demand)",
    includes: [
      "AI Prompt Packs (3)",
      "1 SOP Template",
      "1 Micro Course (on-demand)",
    ],
    badge: "Most Popular",
    highlight: false,
    icon: null,
  },
  {
    name: "🟡 Better\nTactical Training Pass",
    price: 997,
    description: "Everything in Toolkit, Access to 1 Live Training, Extra SOP Pack, Replay access",
    includes: [
      "Everything in Toolkit",
      "Access to 1 Live Training",
      "Extra SOP Pack",
      "Replay access",
    ],
    badge: "Best Value",
    highlight: true,
    icon: null,
  },
  {
    name: "🔴 Best\nCustom SOP Sprint",
    price: 3000,
    description: "2-week engagement, Custom SOP development, Workflow Audit, Department briefing deck",
    includes: [
      "2-week engagement",
      "Custom SOP development",
      "Workflow Audit",
      "Department briefing deck",
    ],
    badge: "Premium",
    highlight: false,
    icon: null,
  },
];

const iconMap: { [key: string]: React.ReactNode } = {
  IconBadge: <IconBadge />,
  IconListDetails: <IconListDetails />,
  IconFileText: <IconFileText />,
  IconShieldCheck: <IconShieldCheck />,
  IconPresentation: <IconPresentation />,
  IconUserCheck: <IconUserCheck />,
  IconGlobe: <IconGlobe />,
  IconStar: <IconStar />,
};

export default function Home() {
  // Demo data for Timeline
  const timelineData = [
    {
      title: "Launch",
      content: <p>We launched our product and got our first users!</p>,
    },
    {
      title: "Growth",
      content: <p>We grew to 10,000 users and expanded our team.</p>,
    },
    {
      title: "Today",
      content: <p>We continue to innovate and serve our community.</p>,
    },
  ];

  const { theme, setTheme } = useTheme();

  // Split testimonials into columns
  const firstColumn = testimonials.slice(0, testimonials.length / 3 );
  const secondColumn = testimonials.slice(testimonials.length / 3, (testimonials.length / 3) * 2);
  const thirdColumn = testimonials.slice((testimonials.length / 3) * 2);

  return (
    <main className="flex flex-col items-center gap-16 py-8">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Toggle
          variant="outline"
          className="group size-9 data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted"
          pressed={theme === "dark"}
          onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            strokeWidth={2}
            className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            strokeWidth={2}
            className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
            aria-hidden="true"
          />
        </Toggle>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="w-full flex flex-col items-center">
        <FeaturesSectionWithHoverEffects
          features={featuresContent.map((feature) => ({
            ...feature,
            icon: iconMap[feature.icon as keyof typeof iconMap] || null,
          }))}
        />
      </section>

      <Separator className="w-1/2" />

      {/* Pricing Section */}
      <section className="w-full flex flex-col items-center">
        <PricingSection tiers={pricingTiers} />
      </section>

      <Separator className="w-1/2" />

      {/* Testimonials Section */}
      <section className="w-full flex flex-col items-center">
        <div className="bg-background my-20 relative w-full">
          <div className="container z-10 mx-auto">
            <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
              <div className="flex justify-center">
                <div className="border py-1 px-4 rounded-lg">Testimonials</div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                What our users say
              </h2>
              <p className="text-center mt-5 opacity-75">
                See what our customers have to say about us.
              </p>
            </div>
            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
            </div>
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="w-full flex flex-col items-center">
        <Timeline data={timelineData} />
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
