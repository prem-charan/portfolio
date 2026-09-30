import { GithubIcon, GmailIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { site } from "@/lib/site";

// Icons shown in their real colors at all times (not hover-revealed):
// - X and GitHub are genuinely monochrome brands (their own guidelines just
//   invert black/white with the surface), so they use the theme foreground.
// - LinkedIn and Gmail carry their own fixed brand-color fills baked into
//   the icon itself (see icons.tsx), independent of theme.
const links = [
  { label: "X", href: site.x, icon: XIcon, iconClass: "text-foreground" },
  { label: "GitHub", href: site.github, icon: GithubIcon, iconClass: "text-foreground" },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedinIcon, iconClass: "" },
  { label: "Email", href: site.emailHref, icon: GmailIcon, iconClass: "" },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {links.map(({ label, href, icon: Icon, iconClass }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 hover:border-foreground/30 active:scale-95 active:translate-y-0"
        >
          <Icon className={`h-4 w-4 ${iconClass}`} />
        </a>
      ))}
    </div>
  );
}
