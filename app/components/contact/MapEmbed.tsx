import { cn } from "@/app/lib/utils";

interface MapEmbedProps {
  className?: string;
}

export default function MapEmbed({ className }: MapEmbedProps) {
  const address = "7001 I-10, Suite 229, San Antonio, TX 78213";
  const encodedAddress = encodeURIComponent(address);
  // Using Google Maps embed without API key (alternative approach)
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className={cn("relative w-full h-[400px] rounded-xl overflow-hidden border border-primary/30", className)}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        title="777 Skills Location"
      />
      <div className="absolute inset-0 pointer-events-none border-2 border-primary-blue/20 rounded-xl" />
    </div>
  );
}
