import { industries, partnerLogos, partners } from "@/lib/content";

export function Clients() {
  const extra = partners.filter(
    (item) => !partnerLogos.some((logo) => logo.name === item.name),
  );

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
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-fg">
            Distributed with
          </h2>
          <p className="mt-3 max-w-measure text-sm text-muted">
            The brands on the current cit-tech.co.za homepage, plus the AN4 and
            Veridot layers specified from Pretoria.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {partnerLogos.map((item) => (
              <li key={item.name} className="text-center">
                <div className="flex aspect-square items-center justify-center rounded-xl bg-fg p-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mark max-h-16 w-auto"
                  />
                </div>
                <p className="mt-3 font-display text-sm font-semibold text-fg">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-muted">{item.role}</p>
              </li>
            ))}
          </ul>
          {extra.length > 0 ? (
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {extra.map((item) => (
                <li key={item.name}>
                  <p className="font-display text-base font-semibold text-fg">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted">{item.role}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
