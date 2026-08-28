import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { faqs, partnerBenefits, services } from "@/lib/content";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [{ title: "Support & partners · CIT Tech" }],
  }),
});

function SupportPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src="/images/training.jpg"
            alt="Technical training room"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-bg/55" />
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <Badge>Support</Badge>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              Training, warranty and a channel that can actually deploy it.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              CIT’s job does not end at the invoice. Partners are trained,
              systems are supported, and warranty is handled by the people who
              specified the stack.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-line bg-surface p-6"
              >
                <h2 className="font-display text-xl font-semibold text-fg">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-fg">
              Channel partner programme
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Integrators and resellers get product, demonstration stock,
              training and a path to project finance, so the technology is
              installed the way it was designed.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {partnerBenefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-line bg-bg p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg">
              Questions we hear first
            </h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {faqs.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-medium text-fg marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="text-muted transition-transform duration-150 group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-fg">
              Become a partner
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tell us who you install for and which part of the stack you want
              to carry. Pretoria will follow up.
            </p>
            <div className="mt-6">
              <ContactForm defaultInterest="Become a channel partner" compact />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
