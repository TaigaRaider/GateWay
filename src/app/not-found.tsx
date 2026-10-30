import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex flex-1 flex-col items-center justify-center gap-6 text-center"
      style={{ padding: "var(--section-padding-y) var(--section-padding-x)", minHeight: "100dvh" }}
    >
      <span
        style={{
          fontSize: "clamp(4rem, 15vw, 9rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "var(--primary-text-color)",
          fontFamily: "var(--font-mono), monospace",
        }}
      >
        404
      </span>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-color)", maxWidth: "28rem" }}>
        This route doesn&apos;t hold weight — nothing lives here.
      </p>
      <Link href="/" className="btn btn-primary" data-magnetic>
        Back home
      </Link>
    </main>
  );
}
