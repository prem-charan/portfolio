import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-3xl flex-col-reverse items-center gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-muted">
          &copy; {new Date().getFullYear()} {site.fullName}
        </span>
        <SocialLinks className="flex items-center gap-2" />
      </div>
    </footer>
  );
}
