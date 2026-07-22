"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export default function Logo({ size = "md", className, href = "/" }: LogoProps) {
  const sizes = {
    sm: { img: "h-9 w-9", text: "text-lg" },
    md: { img: "h-10 w-10 sm:h-16 sm:w-16", text: "text-2xl sm:text-3xl" },
    lg: { img: "h-14 w-14 sm:h-20 sm:w-20", text: "text-3xl sm:text-4xl" },
  };

  const s = sizes[size];

  const content = (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <Image
        src="/logo.png"
        alt="777 Skills Logo"
        width={64}
        height={64}
        className={cn("flex-shrink-0", s.img)}
        priority
      />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-black tracking-tight",
            s.text
          )}
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
          }}
        >
          777
        </span>
        <span
          className="font-semibold tracking-[0.25em] text-muted-foreground text-xs"
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
          }}
        >
          SKILLS
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="777 Skills — Home">
        {content}
      </Link>
    );
  }

  return content;
}
