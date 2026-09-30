import { ArrowUpRight } from "lucide-react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-8">
      <Reveal>
        <SectionHeading title="Connect" />
      </Reveal>
      <Reveal delay={0.05}>
        <p className="max-w-lg text-[15px] leading-relaxed text-muted">
          Open to backend and full-stack roles, and to interesting problems in
          general.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={site.emailHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {site.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <CopyEmailButton email={site.email} />
        </div>
      </Reveal>
    </section>
  );
}
