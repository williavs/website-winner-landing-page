"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Linkedin, Moon, Send, Sun } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="flex justify-start mb-2">
              <Image
                src="/logo.png"
                alt="Showcraft AI logo"
                width={80}
                height={80}
                priority
                style={{ borderRadius: '10px' }}
              />
            </div>
            <p className="mb-2 text-lg font-headline text-accent">Real Training. Real Tools. Real Results.</p>
            <p className="mb-6 text-muted-foreground body-text">
              AI-driven training and SOP automation for law enforcement. Built by field experts for immediate tactical benefit.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Your agency email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-headline">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#features" className="block transition-colors hover:text-accent">Features</a>
              <a href="#pricing" className="block transition-colors hover:text-accent">Pricing</a>
              <a href="#testimonials" className="block transition-colors hover:text-accent">Testimonials</a>
              <a href="#timeline" className="block transition-colors hover:text-accent">Timeline</a>
              <a href="#contact" className="block transition-colors hover:text-accent">Contact</a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-headline">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Email: <a href="mailto:info@showcraftai.com" className="text-accent">info@showcraftai.com</a></p>
              <p>For agencies & training: <a href="mailto:training@showcraftai.com" className="text-accent">training@showcraftai.com</a></p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-headline">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Showcraft AI. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#privacy" className="transition-colors hover:text-accent">Privacy Policy</a>
            <a href="#terms" className="transition-colors hover:text-accent">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function Footer() {
  return (
    <div className="block">
      <Footerdemo />
    </div>
  );
}

export { Footerdemo, Footer };