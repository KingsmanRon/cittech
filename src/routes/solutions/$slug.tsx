import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSolution, solutions } from "@/lib/content";

export const Route = createFileRoute("/solutions/$slug")({
  component: SolutionDetail,
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.solution.title} · CIT Tech`
          : "Solution · CIT Tech",
      },
    ],
  }),
});

function SolutionDetail() {
  const { solution } = Route.useLoaderData();
  const others = solutions.filter((item) => item.slug !== solution.slug);

  return (
    <SiteShell>
      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src={solution.image}
            alt=""
            className="absolute inset-0 size-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-bg/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[calc(var(--header-h)+5rem)] bg-linear-to-b from-bg/85 to-transparent"
          />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-[calc(5rem+var(--header-h))] sm:px-6">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
            >
              <ArrowLeft className="size-4" />
              All solutions
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>{solution.kicker}</Badge>
              <Badge>{solution.partner}</Badge>
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {solution.lead}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-fg">
              What we specify
            </h2>
            <ul className="mt-6 space-y-3">
              {solution.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-line py-3 text-sm text-fg last:border-0"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-semibold text-fg">
              Typical sites
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {solution.fits.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <a
              href={solution.brochure}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Download the {solution.partner} brochure
              <ArrowUpRight className="size-4" />
            </a>
            <p className="mt-2 text-xs text-subtle">{solution.partnerNote}.</p>
          </div>

          <aside className="rounded-xl border border-line bg-surface p-6">
            <h2 className="font-display text-lg font-semibold text-fg">
              Brief this solution
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tell Pretoria about the site. We’ll come back with a design
              conversation, not a catalogue.
            </p>
            <div className="mt-6">
              <ContactForm defaultInterest={solution.title} compact />
            </div>
          </aside>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl font-semibold text-fg">
              The rest of the stack
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to="/solutions/$slug"
                  params={{ slug: item.slug }}
                  className="overflow-hidden rounded-xl border border-line bg-bg"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <p className="font-display font-semibold text-fg">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted">{item.kicker}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/contact">Talk to an engineer</Link>
            </Button>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
