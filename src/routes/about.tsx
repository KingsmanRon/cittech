import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/responsive-image";
import {
  bbee,
  company,
  industries,
  partnerBenefits,
  services,
} from "@/lib/content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About · CIT Tech" }],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative isolate overflow-hidden">
          <ResponsiveImage
            src="/images/office.jpg"
            alt="Pretoria office park at dusk"
            className="absolute inset-0 size-full object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-bg/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[calc(var(--header-h)+5rem)] bg-linear-to-b from-bg/85 to-transparent"
          />
          <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-[calc(6rem+var(--header-h))] sm:px-6">
            <Badge>About CIT</Badge>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              Recognised leadership in electronic security, from Pretoria to the
              rest of Africa.
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Vision
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-fg">
              Holistic solutions, a unified platform.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              CIT aims to be the recognised leader in the electronic security
              sector, offering holistic solutions to markets in South Africa as
              well as the rest of Africa. Through continuous development with
              our technology partners, we provide seamlessly integrated
              technology managed through a unified platform.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Mission
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-fg">
              The distributor of choice.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Deliver excellent customer service with world-class solutions.
              Ongoing product development and customisation. Be the distributor
              of choice for integrated security products and solutions.
            </p>
          </div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Transformation
            </p>
            <h2 className="mt-3 max-w-measure font-display text-3xl font-semibold tracking-tight text-fg">
              {company.bee}. Skills as operating practice.
            </h2>
            <p className="mt-4 max-w-measure text-base leading-relaxed text-muted">
              Community Investment Technology is committed to empowerment and
              transformation across the organisation. We invest in skills
              development because it is how future leaders, and future
              deployments, are built.
            </p>
            <div className="mt-10 rounded-xl border border-line bg-bg p-6 sm:p-8">
              <div className="flex flex-wrap gap-x-12 gap-y-6 border-b border-line pb-6">
                <div>
                  <p className="font-display text-4xl font-semibold text-fg">
                    {bbee.level}
                  </p>
                  <p className="mt-1 text-sm text-muted">{bbee.status}</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-semibold text-accent">
                    {bbee.recognition}
                  </p>
                  <p className="mt-1 text-sm text-muted">{bbee.recognitionOf}</p>
                </div>
              </div>
              <dl className="mt-6 grid gap-x-12 gap-y-6 text-sm sm:grid-cols-2">
                {[
                  { t: "What it is worth to you", d: bbee.forBuyers },
                  { t: "Ownership", d: bbee.ownership },
                  { t: "Skills development", d: bbee.skills },
                ].map((row) => (
                  <div key={row.t}>
                    <dt className="font-medium text-fg">{row.t}</dt>
                    <dd className="mt-1 leading-relaxed text-muted">{row.d}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-medium text-fg">Certificate</dt>
                  <dd className="mt-1 leading-relaxed text-muted">
                    {bbee.certificate}:{" "}
                    <a
                      href={company.emailHref}
                      className="tap text-accent underline-offset-4 hover:underline"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg">
            What we actually do
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-line bg-surface p-6"
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
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-fg">
              Markets we specify for
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-line bg-bg p-5"
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

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg">
            Benefits of partnering
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {partnerBenefits.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-line bg-surface p-6"
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
          <Button asChild className="mt-10">
            <Link to="/support">Become a partner</Link>
          </Button>
        </section>
      </main>
    </SiteShell>
  );
}
