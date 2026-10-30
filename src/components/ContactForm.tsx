"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error" | "mailto";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Client-side validation
    const nextErrors: Record<string, string> = {};
    if (!data.name?.trim()) nextErrors.name = "Name is required";
    if (!data.email?.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      nextErrors.email = "Enter a valid email";
    if (!data.message?.trim()) nextErrors.message = "Message is required";
    else if (data.message.trim().length < 10)
      nextErrors.message = "Tell me a little more (10+ characters)";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; fallback?: string };
      if (!res.ok || !json.ok) throw new Error("request failed");

      if (json.fallback === "mailto") {
        // No email provider configured — open the visitor's mail client instead
        const body = `${data.message}\n\n— ${data.name} (${data.email})`;
        window.location.href = `mailto:adetunji.timothy@gmail.com?subject=${encodeURIComponent(
          `Portfolio enquiry from ${data.name}`,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("mailto");
      } else {
        setStatus("sent");
        form.reset();
      }
    } catch {
      setStatus("error");
    }
  };

  const field = (name: string) => ({
    name,
    style: {
      width: "100%",
      padding: "0.625rem 0.75rem",
      border: "1px solid var(--border-color)",
      background: "var(--bg-color)",
      color: "var(--primary-text-color)",
      fontSize: "var(--text-sm)",
      fontFamily: "inherit",
    },
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4" style={{ maxWidth: "32rem", width: "100%" }}>
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-name" style={{ fontSize: "var(--text-xs)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary-text-color)" }}>
          Name
        </label>
        <input id="cf-name" type="text" placeholder="Your name" {...field("name")} />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-email" style={{ fontSize: "var(--text-xs)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary-text-color)" }}>
          Email
        </label>
        <input id="cf-email" type="email" placeholder="you@example.com" {...field("email")} />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-message" style={{ fontSize: "var(--text-xs)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary-text-color)" }}>
          Message
        </label>
        <textarea id="cf-message" rows={5} placeholder="What are you building?" {...field("message")} />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === "sending"} data-magnetic style={{ alignSelf: "flex-start" }}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && <p className="form-note">Message sent — I&apos;ll get back to you shortly.</p>}
      {status === "mailto" && <p className="form-note">Opened your mail app with the message pre-filled.</p>}
      {status === "error" && <p className="form-error">Something went wrong — email me directly instead.</p>}
    </form>
  );
}
