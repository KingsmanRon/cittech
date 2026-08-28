import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function KineticLines({
  lines,
  as: Tag = "h1",
  className,
}: {
  lines: string[];
  as?: "h1" | "h2";
  className?: string;
}) {
  const Comp = Tag;
  return (
    <Comp className={className}>
      {lines.map((line, i) => (
        <span
          key={line}
          className="sc-kinetic block"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          {line}
        </span>
      ))}
    </Comp>
  );
}

export function OperatingPicture() {
  const wall = solutions.find((s) => s.slug === "vms-psim") ?? solutions[0];
  const [active, setActive] = useState(wall.slug);
  const current = solutions.find((s) => s.slug === active) ?? wall;

  return (
    <section className="bg-bg lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
        <h2 className="max-w-measure font-display text-3xl font-semibold text-fg sm:text-4xl">
          One desk. Five systems.
        </h2>
        <p className="mt-4 max-w-measure text-base text-muted">
          Cameras, doors, alarms and assets only earn their keep if an operator
          can act on them together. That is the AN4 VMS and PSIM layer CIT
          specifies for metros, estates and multi-site enterprises.
        </p>
        <div
          role="radiogroup"
          aria-label="Security layers"
          className="mt-10 divide-y divide-line border-y border-line"
        >
          {solutions.map((item) => {
            const on = item.slug === active;
            return (
              <button
                key={item.slug}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => setActive(item.slug)}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setActive(item.slug);
                }}
                className="pressable flex w-full items-baseline justify-between gap-4 py-4 text-left"
              >
                <span
                  className={cn(
                    "font-display text-lg font-semibold",
                    on ? "text-fg" : "text-muted",
                  )}
                >
                  {item.title}
                </span>
                <span className="shrink-0 text-sm text-subtle">{item.partner}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-6 max-w-measure text-sm text-muted">{current.summary}</p>
        <Button asChild className="mt-8 w-fit">
          <Link to="/solutions/$slug" params={{ slug: current.slug }}>
            {current.partner} range
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="relative min-h-96 lg:min-h-dvh">
        {solutions.map((item) => (
          <img
            key={item.slug}
            src={item.image}
            alt=""
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-200 ease-out",
              item.slug === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
    </section>
  );
}

export function SolutionRail() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-measure font-display text-3xl font-semibold text-fg">
            Five layers. One system.
          </h2>
          <Link
            to="/solutions"
            className="text-sm font-medium text-muted transition-colors duration-100 hover:text-fg"
          >
            All solutions
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {solutions.map((item, i) => (
            <Link
              key={item.slug}
              to="/solutions/$slug"
              params={{ slug: item.slug }}
              className={cn(
                "pressable overflow-hidden rounded-xl bg-bg",
                i < 3 ? "lg:col-span-2" : "lg:col-span-3",
              )}
            >
              <img
                src={item.image}
                alt=""
                className="aspect-video w-full object-cover"
              />
              <div className="border-t border-line p-4">
                <p className="text-xs tracking-label text-muted">{item.partner}</p>
                <p className="mt-1 font-display text-lg font-semibold text-fg">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted">{item.kicker}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
