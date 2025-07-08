// components/Timeline/Timeline.tsx
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  gap?: string; // Tailwind gap class, e.g., gap-x-10
};

export default function Timeline({ children, direction = "vertical", gap }: Props) {
  const isVertical = direction === "vertical";
  const gapClass = gap || (isVertical ? "gap-y-6" : "gap-x-10");

  return (
    <div className={`relative w-full`}>
      <div
        className={`flex relative z-10 ${isVertical ? "flex-col" : "flex-row"} ${gapClass}`}
      >
        {children}
      </div>

      {/* Timeline line (PIPE) */}
      <div
        className={`absolute bg-gray-300 z-0 ${
          isVertical
            ? "left-5 top-0 w-1 h-full"
            : "top-5 left-0 h-1 w-full"
        }`}
      />
    </div>
  );
}
