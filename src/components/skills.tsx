import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="stack" className="py-8">
      <Reveal>
        <SectionHeading title="Stack" />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div>
              <h3 className="mb-2.5 font-mono text-xs uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border px-2.5 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
