import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 254, message: 5000 };

export async function POST(req: Request) {
  let body: { name?: unknown; email?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const { name, email, message } = body ?? {};
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(cleanEmail)) {
    return NextResponse.json({ ok: false, error: "invalid email" }, { status: 400 });
  }
  if (
    cleanName.length > LIMITS.name ||
    cleanEmail.length > LIMITS.email ||
    cleanMessage.length > LIMITS.message
  ) {
    return NextResponse.json({ ok: false, error: "payload too large" }, { status: 413 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "adetunji.timothy@gmail.com";

  // No provider configured — tell the client to fall back to mailto
  if (!apiKey) {
    return NextResponse.json({ ok: true, fallback: "mailto" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: cleanEmail,
        subject: `Portfolio enquiry from ${cleanName}`,
        text: `${cleanMessage}\n\n— ${cleanName} (${cleanEmail})`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "provider error" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "network error" }, { status: 502 });
  }
}
