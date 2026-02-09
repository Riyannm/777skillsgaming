"use client";

interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  className?: string;
}

export default function PlaceholderImage({
  width,
  height,
  text,
  className = "",
}: PlaceholderImageProps) {
  const bgColor = "#020617"; // background
  const textColor = "#00B4D8"; // primary
  const fontSize = Math.min(width / 10, 24);

  return (
    <svg
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={bgColor} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontSize={fontSize}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
      >
        {text}
      </text>
    </svg>
  );
}
