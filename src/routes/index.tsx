import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Clients } from "@/components/clients";
import {
  KineticLines,
  OperatingPicture,
  SolutionRail,
} from "@/components/scroll-craft";
import { SiteShell } from "@/components/site-shell";
import { SolutionFinder } from "@/components/solution-finder";
import { Button } from "@/components/ui/button";
import { company, services } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative isolate min-h-[calc(100dvh+var(--header-h))] overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="Dusk skyline over a South African city"
            className="absolute inset-0 size-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-bg/30" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[calc(var(--header-h)+5rem)] bg-linear-to-b from-bg/85 to-transparent"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/45 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100dvh+var(--header-h))] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
            <KineticLines
              lines={["Integrated security.", "One picture."]}
              className="max-w-3xl font-display text-4xl font-semibold text-fg sm:text-5xl"
            />
            <p className="mt-5 max-w-measure text-base text-muted sm:text-lg">
              Specified from Pretoria for public safety and enterprise across
              Africa.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a briefing
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative z-0 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="max-w-measure text-sm text-muted">
              Level 2 B-BBEE. Member of the CIH Group. Specified from Pretoria
              for Africa.
            </p>
            <h2 className="mt-10 max-w-measure font-display text-3xl font-semibold text-fg sm:text-4xl">
              The distributor of choice for integrated security.
            </h2>
            <p className="mt-3 max-w-measure text-base text-muted">
              CIT specifies cameras, biometrics, intrusion, video management
              and asset intelligence as one system. Built for smart and
              safe-city platforms, and for private sites that need the same
              discipline.
            </p>
            <ol className="mt-14 max-w-3xl divide-y divide-line border-y border-line">
              {services.map((service, i) => (
                <li
                  key={service.title}
                  className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-8"
                >
                  <p className="text-sm tabular-nums tracking-label text-muted">
                    0{i + 1}
                  </p>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{service.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <SolutionRail />
        <Clients />
        <OperatingPicture />

        <section className="relative z-0 border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SolutionFinder />
          </div>
        </section>

        <section className="relative z-0 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="max-w-measure font-display text-3xl font-semibold text-fg">
            Integrators and resellers, trained to deploy it properly.
          </h2>
          <p className="mt-3 max-w-measure text-base text-muted">
            Product, training, warranty and project finance, so what leaves
            Pretoria is installed the way it was specified.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link to="/support">Partner programme</Link>
            </Button>
            <p className="mt-4 text-sm text-muted">
              Or call{" "}
              <a href={company.phoneHref} className="text-fg underline-offset-4 hover:underline">
                {company.phone}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
