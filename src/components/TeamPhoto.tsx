"use client";

import Image from "next/image";
import { useState } from "react";

export default function TeamPhoto({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-ink-3">
      {failed ? (
        <div className="flex h-full items-center justify-center font-display text-6xl text-muted">{initials}</div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 33vw, 50vw"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
