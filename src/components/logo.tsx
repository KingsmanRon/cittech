import { cn } from "@/lib/utils";

export function CitWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/images/cit-logo.png"
        alt=""
        className="h-9 w-auto"
      />
      <span className="font-display text-base font-semibold tracking-tight text-fg">
        CIT Tech
      </span>
    </span>
  );
}
