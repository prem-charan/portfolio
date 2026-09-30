import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-8">
      <Reveal>
        <SectionHeading title="Experience" />
      </Reveal>
      <div className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-base font-medium">{job.role}</h3>
                  <p className="text-sm text-accent">{job.company}</p>
                </div>
                <div className="whitespace-nowrap text-sm text-muted">
                  {job.start} – {job.end}
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
