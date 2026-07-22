"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface MapEmbedProps {
  className?: string;
}

/**
 * Privacy-friendly map: nothing is requested from Google until the visitor
 * explicitly clicks to load it, so no IP/referrer is shared on page view.
 */
export default function MapEmbed({ className }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  const address = "7001 I-10, Suite 229, San Antonio, TX 78213";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <div
      className={cn(
        "relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/30",
        className
      )}
    >
      {loaded ? (
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full"
          title="777 Skills Location"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-muted/30 p-6 text-center transition-colors hover:bg-muted/50"
          aria-label="Load interactive Google map"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
            <MapPin className="h-7 w-7" />
          </span>
          <span className="font-semibold text-foreground">View Interactive Map</span>
          <span className="max-w-xs text-sm text-muted-foreground">{address}</span>
          <span className="mt-1 text-xs text-muted-foreground/70">
            Loads Google Maps — sets Google cookies on click.
          </span>
        </button>
      )}

      {/* Directions link stays privacy-safe (opens in a new tab, no embed) */}
      {!loaded && (
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 rounded-lg border border-border bg-background/80 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm hover:border-primary/40"
        >
          Get Directions
        </a>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-primary/20" />
    </div>
  );
}
