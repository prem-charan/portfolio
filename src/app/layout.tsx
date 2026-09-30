import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClickSpark } from "@/components/click-spark";
import { CommandPalette, CommandPaletteTrigger } from "@/components/command-palette";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.fullName} is a ${site.role.toLowerCase()} based in ${site.location}. ${site.tagline}`,
  keywords: [...site.keywords],
  authors: [{ name: site.fullName, url: site.siteUrl }],
  creator: site.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.siteUrl,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    url: site.siteUrl,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    sameAs: [site.github, site.linkedin, site.x],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="mx-auto w-full max-w-3xl flex-1 px-6">
            {children}
          </main>
          <SiteFooter />
          <div className="fixed bottom-4 right-4 z-30 sm:hidden">
            <CommandPaletteTrigger className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-lg" />
          </div>
          <CommandPalette />
          <ClickSpark />
        </ThemeProvider>
      </body>
    </html>
  );
}
