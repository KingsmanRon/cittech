import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { company } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact · CIT Tech" }],
  }),
});

function ContactPage() {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=28.268%2C-25.815%2C28.295%2C-25.795&layer=mapnik&marker=-25.805%2C28.281`;

  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Badge>Contact</Badge>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Brief Pretoria. We’ll come back with a design conversation.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Sales, system design, partner onboarding, training and warranty:
            one desk. Free consultation on {company.phone}.
          </p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-5">
          <div className="rounded-xl border border-line bg-surface p-6 sm:p-8 lg:col-span-3">
            <h2 className="font-display text-xl font-semibold text-fg">
              Request a briefing
            </h2>
            <p className="mt-2 text-sm text-muted">
              Include the site type and what you already have installed. It
              shortens the first call.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-line bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-fg">
                Direct
              </h2>
              <ul className="mt-4 space-y-4 text-sm text-muted">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 text-accent" />
                  <a href={company.phoneHref} className="hover:text-fg">
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 text-accent" />
                  <a href={company.emailHref} className="hover:text-fg">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 text-accent" />
                  <span>
                    {company.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl border border-line">
              <iframe
                title="Ashlea Gardens Office Park, Pretoria"
                src={mapSrc}
                className="h-64 w-full border-0 grayscale"
                loading="lazy"
              />
              <a
                href={`https://www.openstreetmap.org/?mlat=-25.805&mlon=28.281#map=15/-25.805/28.281`}
                className="block bg-elevated px-4 py-3 text-xs text-muted hover:text-fg"
                target="_blank"
                rel="noreferrer"
              >
                Open map · Ashlea Gardens, Pretoria
              </a>
            </div>
          </aside>
        </section>
      </main>
    </SiteShell>
  );
}
