import manifest from "@/lib/image-manifest.json";

const widthsFor: Record<string, number[] | undefined> = manifest;

/**
 * Serves the photography from the AVIF/WebP ladder built by
 * `npm run images`, so a phone downloads a phone-sized file rather than the
 * ~1792px master.
 *
 * `sizes` is required because every one of these sits in a different grid, and
 * a wrong `sizes` is worse than none: the browser picks its rung from this, not
 * from the rendered box.
 */
export function ResponsiveImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
}: {
  /** Path to the master, e.g. `/images/hero.jpg`. */
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  /** Set on the LCP image of a page: loads eagerly and at high priority. */
  priority?: boolean;
}) {
  const name = src.slice(src.lastIndexOf("/") + 1).replace(/\.jpg$/, "");
  const widths = widthsFor[name];

  // An image with no derivatives still has to render; fall back to the master.
  if (!widths?.length) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    );
  }

  const srcSet = (ext: string) =>
    widths.map((w) => `/images/r/${name}-${w}.${ext} ${w}w`).join(", ");

  return (
    // `contents` keeps <picture> out of the layout so the class list on the
    // <img> behaves exactly as it did before the element was wrapped.
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`/images/r/${name}-${Math.min(1280, widths[widths.length - 1])}.jpg`}
        alt={alt}
        sizes={sizes}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}
