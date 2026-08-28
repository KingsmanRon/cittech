import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { solutions } from "@/lib/content";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your organisation."),
  email: z.email("Enter a valid email."),
  phone: z.string().min(7, "Enter a contact number."),
  interest: z.string().min(1, "Select what you need."),
  message: z.string().min(12, "A short brief helps us prepare."),
});

const STORAGE_KEY = "cit-enquiries";

type Enquiry = z.infer<typeof schema> & { submittedAt: string };

function saveEnquiry(entry: Enquiry) {
  const existing: Enquiry[] = JSON.parse(
    localStorage.getItem(STORAGE_KEY) ?? "[]",
  );
  existing.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 20)));
}

const interests = [
  "General briefing",
  ...solutions.map((s) => s.title),
  "Become a channel partner",
  "Training",
  "Warranty / repair",
];

export function ContactForm({
  defaultInterest = "",
  compact = false,
}: {
  defaultInterest?: string;
  compact?: boolean;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    saveEnquiry({ ...parsed.data, submittedAt: new Date().toISOString() });
    form.reset();
    setSent(true);
    toast.success("Briefing request saved. We’ll reply from Pretoria.");
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-elevated p-6">
        <p className="font-display text-lg font-semibold text-fg">
          Received. We’ll come back to you.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Your briefing request is logged. For something urgent, call{" "}
          <a href="tel:+27123464662" className="text-fg underline-offset-4 hover:underline">
            +27 12 346 4662
          </a>{" "}
          or email{" "}
          <a
            href="mailto:info@cit-tech.co.za"
            className="text-fg underline-offset-4 hover:underline"
          >
            info@cit-tech.co.za
          </a>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-5"
          onClick={() => setSent(false)}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field
          label="Organisation"
          name="company"
          error={errors.company}
          autoComplete="organization"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          error={errors.email}
          autoComplete="email"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          error={errors.phone}
          autoComplete="tel"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="interest">What do you need?</Label>
        <select
          id="interest"
          name="interest"
          defaultValue={defaultInterest}
          className="flex h-11 w-full rounded-lg border border-line bg-elevated px-3 text-base text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select…</option>
          {interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.interest ? (
          <p className="text-xs text-danger">{errors.interest}</p>
        ) : null}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Brief</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Site type, number of locations, what you already have in place."
        />
        {errors.message ? (
          <p className="text-xs text-danger">{errors.message}</p>
        ) : null}
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Request a briefing
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} autoComplete={autoComplete} />
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
}
