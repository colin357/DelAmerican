import { NextResponse } from "next/server";
import { site } from "@/lib/data";

/**
 * Contact form handler. If RESEND_API_KEY is set, the message is emailed via Resend
 * (https://resend.com) to CONTACT_TO (defaults to info@delamerican.com). Otherwise the
 * submission is logged so the form still works in preview deployments.
 */
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();
  const newsletter = body.newsletter === "yes";

  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !message) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Newsletter: ${newsletter ? "yes" : "no"}`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Del American Website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? site.email],
        reply_to: email,
        subject: `Website inquiry from ${name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Resend error", await res.text());
      return new NextResponse("Email delivery failed", { status: 502 });
    }
  } else {
    console.log("Contact form submission (RESEND_API_KEY not set):\n" + text);
  }

  return NextResponse.json({ ok: true });
}
