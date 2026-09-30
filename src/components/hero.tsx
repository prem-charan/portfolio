import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="pt-12 pb-8 sm:pt-16 sm:pb-10">
      <p className="mb-2 font-mono text-sm text-accent">
        {site.role}
      </p>
      <h1 className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
        {site.fullName}
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        {site.tagline}
      </p>
      <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
        <MapPin className="h-3.5 w-3.5" />
        {site.location}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            See my work
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={site.resumeHref}
            download
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/30"
          >
            Resume
            <Download className="h-4 w-4" />
          </a>
        </div>
        <SocialLinks className="flex items-center gap-2" />
      </div>
    </section>
  );
}
