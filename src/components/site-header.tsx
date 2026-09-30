import { CommandPaletteTrigger } from "@/components/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium">
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CommandPaletteTrigger className="hidden sm:inline-flex cursor-pointer items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted transition-colors hover:text-foreground hover:border-foreground/30" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
