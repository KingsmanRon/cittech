import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import appCss from "../styles.css?url";

const APP_NAME = "CIT Tech";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Community Investment Technology, distributor of integrated electronic security for South Africa and Africa. Surveillance, access control, intrusion, VMS and asset tracing.",
      },
      { name: "theme-color", content: "#090b0e" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            className: "bg-elevated text-fg border border-line",
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-fg">
          This page is not on the map.
        </h1>
        <p className="mt-3 max-w-md text-sm text-muted">
          The URL does not match a CIT page. Head home, or go straight to
          solutions.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/solutions">Solutions</Link>
          </Button>
        </div>
      </main>
    </SiteShell>
  );
}
