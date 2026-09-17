"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label="Del American home" className="relative h-9 w-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.logo} alt="Del American" className="h-full w-full object-contain object-left" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-display text-[0.8rem] uppercase tracking-[0.25em]">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`py-2 transition-colors hover:text-accent ${pathname === item.href ? "text-accent" : ""}`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="min-w-48 border border-line bg-ink-2 py-2">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block px-5 py-2 hover:bg-ink-3 hover:text-accent">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="lg:hidden flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em]"
        >
          Menu
          <span className="flex flex-col gap-1.5">
            <span className={`block h-px w-6 bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-ink">
          <nav className="container-x flex flex-col py-6 font-display text-lg uppercase tracking-[0.2em]">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 hover:text-accent">
                  {item.label}
                </Link>
                {item.children?.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 pl-6 text-sm text-muted hover:text-accent">
                    {c.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
