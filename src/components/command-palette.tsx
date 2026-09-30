"use client";

import { Command } from "cmdk";
import {
  Download,
  MoonStar,
  Search,
  SunMedium,
  User,
  Briefcase,
  FolderGit2,
  Wrench,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { GithubIcon, GmailIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { site } from "@/lib/site";

const OPEN_EVENT = "command-palette:open";

const sections = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Stack", href: "#stack", icon: Wrench },
];

export function CommandPaletteTrigger({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Open command menu"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={
        className ??
        "inline-flex cursor-pointer items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted transition-colors hover:text-foreground hover:border-foreground/30"
      }
    >
      <Search className="h-3.5 w-3.5 sm:hidden" />
      <span className="hidden sm:inline">Search</span>
      <kbd className="hidden rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] sm:inline">
        &#8984;K
      </kbd>
    </button>
  );
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpenEvent = () => setOpen(true);

    document.addEventListener("keydown", onKeydown);
    window.addEventListener(OPEN_EVENT, onOpenEvent);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      window.removeEventListener(OPEN_EVENT, onOpenEvent);
    };
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Command menu" className="flex flex-col">
          <Command.Input
            autoFocus
            placeholder="Jump to a section, or open a link..."
            className="w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
              No results.
            </Command.Empty>

            <Command.Group
              heading="Navigate"
              className="px-2 py-1.5 text-xs text-muted [&_[cmdk-group-heading]]:mb-1"
            >
              {sections.map(({ label, href, icon: Icon }) => (
                <Command.Item
                  key={href}
                  onSelect={() => go(href)}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
                >
                  <Icon className="h-4 w-4 text-muted" />
                  {label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Links"
              className="px-2 py-1.5 text-xs text-muted [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                onSelect={() => go(site.x)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
              >
                <XIcon className="h-4 w-4 text-muted" />
                Open X
              </Command.Item>
              <Command.Item
                onSelect={() => go(site.github)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
              >
                <GithubIcon className="h-4 w-4 text-muted" />
                Open GitHub
              </Command.Item>
              <Command.Item
                onSelect={() => go(site.linkedin)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
              >
                <LinkedinIcon className="h-4 w-4 text-muted" />
                Open LinkedIn
              </Command.Item>
              <Command.Item
                onSelect={() => go(site.emailHref)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
              >
                <GmailIcon className="h-4 w-4 text-muted" />
                Email {site.email}
              </Command.Item>
              <Command.Item
                onSelect={() => go(site.resumeHref)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
              >
                <Download className="h-4 w-4 text-muted" />
                Download resume
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Theme"
              className="px-2 py-1.5 text-xs text-muted [&_[cmdk-group-heading]]:mb-1"
            >
              <Command.Item
                onSelect={() => {
                  setTheme("light");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
              >
                <SunMedium className="h-4 w-4 text-muted" />
                Light mode
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  setTheme("dark");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-surface"
              >
                <MoonStar className="h-4 w-4 text-muted" />
                Dark mode
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
