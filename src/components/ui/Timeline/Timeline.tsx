import React from "react";

type TimelineItem = {
  icon: React.ReactNode;
  header?: string;
  text?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  orientation?: "horizontal" | "vertical";
  contentPosition?: "above" | "below" | "left" | "right";

  // Custom styling
  lineColor?: string; // Tailwind class, e.g. 'bg-gray-400'
  lineThickness?: string; // Tailwind class, e.g. 'w-0.5' or 'h-0.5'
  circleColor?: string; // Tailwind class, e.g. 'bg-black'
  circleSize?: string; // Tailwind class, e.g. 'w-8 h-8'
  iconColor?: string; // Tailwind class, e.g. 'text-white'
  headerClassName?: string; // class for header text
  textClassName?: string; // class for description text
  tooltipClassName?: string; // floating window style class
};

export const Timeline: React.FC<TimelineProps> = ({
  items,
  orientation = "horizontal",
  contentPosition = orientation === "horizontal" ? "below" : "right",
  lineColor = "bg-black",
  lineThickness = orientation === "horizontal" ? "h-0.5" : "w-0.5",
  circleColor = "bg-black",
  circleSize = "w-8 h-8",
  iconColor = "text-white",
  headerClassName = "font-semibold text-base leading-tight",
  textClassName = "text-sm text-gray-500 leading-snug",
  tooltipClassName = "bg-white border rounded-md shadow-md px-3 py-2 text-sm text-gray-800",
}) => {
  const isHorizontal = orientation === "horizontal";
  const isContentFirst = contentPosition === "above" || contentPosition === "left";

  if (isHorizontal) {
    return (
      <table className="table-fixed w-full text-center">
        <tbody>
          <tr>
            {items.map((item, i) => {
              const isFirst = i === 0;
              const isLast = i === items.length - 1;
              const justify = isFirst ? "justify-start" : isLast ? "justify-end" : "justify-center";

              return (
                <td key={i} className="align-top">
                  <div className={`relative flex items-center ${justify}`}>
                    {/* Line before */}
                    {!isFirst && (
                      <div
                        className={`absolute left-0 top-1/2 -translate-y-1/2 ${lineColor} ${lineThickness}`}
                        style={{ width: "100%" }}
                      />
                    )}

                    {/* Round with floating info */}
                    <div className="group relative z-10">
                      <div
                        className={`${circleSize} ${circleColor} ${iconColor} rounded-full flex items-center justify-center`}
                      >
                        {item.icon}
                      </div>

                      {(item.header || item.text) && (
                        <div
                          className={`absolute ${
                            isContentFirst ? "bottom-full mb-2" : "top-full mt-2"
                          } left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none ${tooltipClassName}`}
                        >
                          {item.header && <div className={headerClassName}>{item.header}</div>}
                          {item.text && <div className={textClassName}>{item.text}</div>}
                        </div>
                      )}
                    </div>

                    {/* Line after */}
                    {!isLast && (
                      <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 ${lineColor} ${lineThickness}`}
                        style={{ width: "100%" }}
                      />
                    )}
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  }

  // Vertical orientation
  return (
    <table className="table-fixed">
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            {/* Content before icon (no longer used when tooltip is active) */}
            {isContentFirst && <td className={item.header || item.text ? "pr-2" : ""} />}

            {/* Icon + lines */}
            <td className={`${item.header || item.text ? "px-2" : ""} align-middle`}>
              <div className="relative flex flex-col items-center justify-center" style={{ minHeight: "4rem" }}>
                {/* Line before */}
                {i > 0 && (
                  <div
                    className={`absolute top-0 ${lineColor} ${lineThickness}`}
                    style={{ height: "50%" }}
                  />
                )}

                {/* Round with floating info */}
                <div className="group relative z-10">
                  <div
                    className={`${circleSize} ${circleColor} ${iconColor} rounded-full flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>

                  {(item.header || item.text) && (
                    <div
                      className={`absolute ${
                        isContentFirst ? "right-full mr-2" : "left-full ml-2"
                      } top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none ${tooltipClassName}`}
                    >
                      {item.header && <div className={headerClassName}>{item.header}</div>}
                      {item.text && <div className={textClassName}>{item.text}</div>}
                    </div>
                  )}
                </div>

                {/* Line after */}
                {i < items.length - 1 && (
                  <div
                    className={`absolute bottom-0 ${lineColor} ${lineThickness}`}
                    style={{ height: "50%" }}
                  />
                )}
              </div>
            </td>

            {/* Content after icon (not needed, since info is in hover) */}
            {!isContentFirst && <td className={item.header || item.text && tooltipClassName ? "" : "pl-2"} />}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
