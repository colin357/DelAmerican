"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p className="mt-10 border border-accent p-6">Thank you! Your submission has been received!</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
      <input name="name" placeholder="Name" required className="field" autoComplete="name" />
      <input name="email" type="email" placeholder="Email Address" required className="field" autoComplete="email" />
      <input name="phone" type="tel" placeholder="Phone Number" className="field sm:col-span-2" autoComplete="tel" />
      <textarea name="message" placeholder="Message" rows={5} required className="field sm:col-span-2" />
      <label className="flex items-center gap-3 text-sm text-neutral-300 sm:col-span-2">
        <input type="checkbox" name="newsletter" value="yes" className="h-4 w-4 accent-accent" />
        Subscribe to our newsletter
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn btn-solid disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">Oops! Something went wrong while submitting the form.</p>
        )}
      </div>
    </form>
  );
}
