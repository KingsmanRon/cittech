import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { industries, partners, type Partner } from "@/lib/content";

export function Clients() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-semibold text-fg">Clients</h2>
        <p className="mt-3 max-w-measure text-base text-muted">
          Specified for public-safety and enterprise operators across South
          Africa and the continent.
        </p>
        <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {industries.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-semibold text-fg">
            Distributed with
          </h2>
          <p className="mt-3 max-w-measure text-sm text-muted">
            The brands behind the range, distributed and supported from
            Pretoria, and specified to run as one system rather than seven.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((partner) => (
              <li key={partner.name}>
                <PartnerCell partner={partner} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const cell =
  "flex h-full flex-col rounded-lg border border-line bg-bg px-5 pb-4 pt-5";

function PartnerCell({ partner }: { partner: Partner }) {
  const body = (
    <>
      <div className="flex h-14 items-center">
        {partner.mark ? (
          <img
            src={partner.mark}
            alt={partner.name}
            className="mark h-auto w-44 max-w-full opacity-90 transition-opacity duration-200 group-hover:opacity-100"
          />
        ) : (
          <span className="font-display text-2xl font-semibold tracking-display text-fg/90 transition-colors duration-200 group-hover:text-fg">
            {partner.name}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3">
        <p className="text-xs text-muted">{partner.role}</p>
        {partner.solution ? (
          <ArrowUpRight
            aria-hidden
            className="size-3.5 shrink-0 text-subtle transition-colors duration-200 group-hover:text-accent"
          />
        ) : null}
      </div>
    </>
  );

  if (!partner.solution) {
    return <div className={cell}>{body}</div>;
  }

  return (
    <Link
      to="/solutions/$slug"
      params={{ slug: partner.solution }}
      className={`${cell} group transition-colors duration-200 hover:border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface`}
    >
      {body}
    </Link>
  );
}
