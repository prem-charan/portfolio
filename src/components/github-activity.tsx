import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function GithubActivity() {
  return (
    <section id="activity" className="py-8">
      <Reveal>
        <SectionHeading title="GitHub activity" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="overflow-x-auto rounded-lg border border-border p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Contributions
            </span>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              @{site.githubUsername}
            </a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/4ade80/${site.githubUsername}`}
            alt={`${site.name}'s GitHub contribution graph`}
            width={722}
            height={112}
            className="hidden min-w-[600px] dark:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/15803d/${site.githubUsername}`}
            alt={`${site.name}'s GitHub contribution graph`}
            width={722}
            height={112}
            className="block min-w-[600px] dark:hidden"
          />
        </div>
      </Reveal>
    </section>
  );
}
