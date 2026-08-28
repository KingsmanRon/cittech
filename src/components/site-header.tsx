import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Drawer } from "vaul";
import { CitWordmark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { company, nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="material sticky top-0 z-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-full h-3 bg-linear-to-b from-bg/40 to-transparent"
      />
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          to="/"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setOpen(false)}
        >
          <CitWordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium tracking-label transition-colors duration-100",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={company.phoneHref}
            className="text-sm tracking-label text-muted transition-colors duration-100 hover:text-fg"
          >
            {company.phone}
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Request a briefing</Link>
          </Button>
        </div>

        <Drawer.Root
          open={open}
          onOpenChange={setOpen}
          direction="bottom"
        >
          <Drawer.Trigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative size-4">
                <Menu
                  className={cn(
                    "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200 ease-out",
                    open
                      ? "scale-[0.25] opacity-0 blur-sm"
                      : "scale-100 opacity-100 blur-none",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200 ease-out",
                    open
                      ? "scale-100 opacity-100 blur-none"
                      : "scale-[0.25] opacity-0 blur-sm",
                  )}
                />
              </span>
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-50 bg-bg/50" />
            <Drawer.Content className="material-heavy fixed inset-x-0 bottom-0 z-50 mt-24 flex flex-col rounded-t-xl outline-none">
              <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-muted/50" />
              <Drawer.Title className="visually-hidden">
                Menu
              </Drawer.Title>
              <Drawer.Description className="visually-hidden">
                Site sections
              </Drawer.Description>
              <nav
                className="flex flex-col gap-1 px-4 pb-10 pt-5"
                aria-label="Mobile"
              >
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-lg font-medium text-fg hover:bg-elevated"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-3">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Request a briefing
                  </Link>
                </Button>
              </nav>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </header>
  );
}
