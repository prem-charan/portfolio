import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-8">
      <Reveal>
        <SectionHeading title="Projects" />
      </Reveal>
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <div className="group rounded-lg border border-border p-5 transition-colors hover:border-foreground/25">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-medium">{project.name}</h3>
                  <p className="mt-1 max-w-lg text-sm text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                    >
                      Live
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
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
