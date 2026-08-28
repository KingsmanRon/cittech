import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-elevated/80 px-3 py-1 text-xs font-medium tracking-label text-muted backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
