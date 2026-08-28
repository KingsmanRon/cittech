import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SolutionFinder } from "@/components/solution-finder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { solutions } from "@/lib/content";

export const Route = createFileRoute("/solutions/")({
  component: SolutionsPage,
  head: () => ({
    meta: [{ title: "Solutions · CIT Tech" }],
  }),
});

function SolutionsPage() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-[calc(4rem+var(--header-h))] sm:px-6">
          <Badge>Product & solutions</Badge>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Customised security, specified as a system.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Surveillance, access, intrusion, VMS/PSIM and asset tracing,
            distributed for every market segment, and designed to run together
            rather than as five separate vendors.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <div className="grid gap-6">
            {solutions.map((item, i) => (
              <article
                key={item.slug}
                className="grid overflow-hidden rounded-xl border border-line bg-surface md:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={item.image}
                    alt=""
                    className="aspect-video size-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    {item.kicker} · {item.partner}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-fg">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  <Button asChild className="mt-6 w-fit">
                    <Link to="/solutions/$slug" params={{ slug: item.slug }}>
                      More on {item.partner}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SolutionFinder />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
