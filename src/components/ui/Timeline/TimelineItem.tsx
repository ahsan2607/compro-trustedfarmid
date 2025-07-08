'use client'
// components/Timeline/TimelineItem.tsx
import { ReactNode, useState } from "react";

type Props = {
  icon?: ReactNode;
  label?: ReactNode; // optional
  tooltip?: string; // optional
  fallbackTooltip?: string; // default if no label or tooltip
  direction?: "vertical" | "horizontal";
};

export default function TimelineItem({
  icon,
  label,
  tooltip,
  fallbackTooltip = "Detail not available",
  direction = "vertical",
}: Props) {
  const isVertical = direction === "vertical";
  const showTooltip = !label && (tooltip || fallbackTooltip);
  const tooltipText = tooltip || fallbackTooltip;

  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={`relative flex ${
        isVertical ? "flex-row items-start" : "flex-col items-center"
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative z-10 group">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-4 border-blue-500 shadow-lg">
          {icon}
        </div>

        {/* Tooltip */}
        {showTooltip && hovering && (
          <div
            className={`absolute z-50 whitespace-nowrap text-sm bg-gray-800 text-white px-2 py-1 rounded shadow-lg
            ${isVertical ? "left-12 top-1/2 -translate-y-1/2" : "top-12 left-1/2 -translate-x-1/2"}
            group-hover:opacity-100 opacity-0 transition-opacity duration-200`}
          >
            {tooltipText}
          </div>
        )}
      </div>

      {label && <div className="text-gray-700 mt-2">{label}</div>}
    </div>
  );
}
