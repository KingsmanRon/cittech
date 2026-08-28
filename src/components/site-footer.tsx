import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CitWordmark } from "@/components/logo";
import { company, nav, solutions } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <CitWordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Distributor of seamlessly integrated electronic security for South
            Africa and the rest of Africa. A member of the {company.group}.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-fg">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted transition-colors duration-150 hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-fg">
            Solutions
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {solutions.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: item.slug }}
                  className="text-muted transition-colors duration-150 hover:text-fg"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-fg">Pretoria</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href={company.phoneHref} className="hover:text-fg">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent" />
              <a href={company.emailHref} className="hover:text-fg">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {company.legal}. {company.bee}.
          </p>
          <p>Member of the {company.group}.</p>
        </div>
      </div>
    </footer>
  );
}
