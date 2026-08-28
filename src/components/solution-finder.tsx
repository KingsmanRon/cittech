import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sites = [
  { id: "city", label: "Municipal / public space" },
  { id: "campus", label: "Office or campus" },
  { id: "industrial", label: "Mine, plant or warehouse" },
  { id: "fleet", label: "Fleet, freight or assets" },
] as const;

const priorities = [
  { id: "see", label: "See everything that happens", slug: "surveillance" },
  { id: "door", label: "Control who comes in", slug: "access-control" },
  { id: "alarm", label: "Detect intrusion at the perimeter", slug: "intrusion" },
  { id: "track", label: "Tag and recover assets", slug: "asset-tagging" },
  { id: "unify", label: "Run it all from one platform", slug: "vms-psim" },
] as const;

export function SolutionFinder() {
  const [site, setSite] = useState<string | null>(null);
  const [priority, setPriority] = useState<(typeof priorities)[number] | null>(
    null,
  );

  return (
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-widest text-muted">
        Solution finder
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg">
        What are you protecting?
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        Two questions. We'll point you at the right CIT stack, then you can
        brief Pretoria with context already in hand.
      </p>

      <fieldset className="mt-8">
        <legend className="text-sm font-medium text-fg">1. The site</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {sites.map((item) => (
            <Choice
              key={item.id}
              selected={site === item.id}
              onClick={() => setSite(item.id)}
              label={item.label}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-sm font-medium text-fg">2. The priority</legend>
        <div className="mt-3 grid gap-2">
          {priorities.map((item) => (
            <Choice
              key={item.id}
              selected={priority?.id === item.id}
              onClick={() => setPriority(item)}
              label={item.label}
            />
          ))}
        </div>
      </fieldset>

      {site && priority ? (
        <div className="mt-8 rounded-lg bg-elevated p-5">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            Recommended
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-fg">
            {priority.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {copyFor(site, priority.slug)}
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Button asChild>
              <Link to="/solutions/$slug" params={{ slug: priority.slug }}>
                View this solution
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/contact">Talk to Pretoria</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Choice({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "min-h-11 rounded-lg border px-4 py-3 text-left text-sm transition-[border-color,background-color,transform] duration-100 ease-out active:scale-[0.97]",
        selected
          ? "border-accent bg-elevated text-fg"
          : "border-line bg-bg text-muted hover:border-accent/40 hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}

function copyFor(site: string, slug: string) {
  if (slug === "vms-psim") {
    return "A unified VMS/PSIM layer is the right spine: cameras, access and alarms on one operating picture, which is how safe-city and multi-site programmes actually run.";
  }
  if (site === "city" && slug === "surveillance") {
    return "Public-space video plus a command-centre VMS is the usual starting point for municipal work. We can layer access and intrusion once the picture is live.";
  }
  if (site === "fleet") {
    return "Start with identification and tracing so assets can be proven and recovered, then add yard video and gate control around the movement.";
  }
  if (slug === "access-control") {
    return "Biometric access and time attendance at the doors you already have. Then we decide what video and intrusion need to sit around them.";
  }
  if (slug === "intrusion") {
    return "Electronic detection on the perimeter and after-hours envelope, designed to raise a real alarm rather than a camera you only watch after the fact.";
  }
  return "We’ll specify cameras and coverage for the way this site is actually used, then plug them into the platform your operators will sit in front of.";
}
