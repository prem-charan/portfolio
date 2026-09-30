import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-8">
      <Reveal>
        <SectionHeading title="About" />
      </Reveal>
      <Reveal delay={0.05}>
        <div className="max-w-2xl text-[15px] leading-relaxed text-muted">
          <p>
            I&apos;m interested in backend engineering, distributed systems,
            GPUs, Linux, rockets, and robots.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-col gap-1 border-l-2 border-border pl-4 text-sm">
          <span className="font-medium">
            {education.degree}, {education.school}
          </span>
          <span className="text-muted">
            {education.location} · {education.start} – {education.end}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
