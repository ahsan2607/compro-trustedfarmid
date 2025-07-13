"use client";

import { useRef, useState } from "react";
import { Timeline } from "@/components";
import { Boxes, ChefHat, Factory, Leaf, ShoppingCart, Sprout, Tractor, Truck, Utensils, Wheat, Hand, Music, Play, Pause } from "lucide-react";

export default function Home() {
  const iconSize = 24;

  // Refs for each audio
  const harvestRef = useRef<HTMLAudioElement | null>(null);
  const rainRef = useRef<HTMLAudioElement | null>(null);
  const solarRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState<"harvest" | "rain" | "solar" | null>(null);

  const handleToggle = (type: "harvest" | "rain" | "solar") => {
    // Pause all first
    harvestRef.current?.pause();
    rainRef.current?.pause();
    solarRef.current?.pause();

    if (playing === type) {
      setPlaying(null);
      return;
    }

    const ref = {
      harvest: harvestRef,
      rain: rainRef,
      solar: solarRef,
    }[type];

    ref.current?.play();
    setPlaying(type);
  };

  const buttons = [
    {
      icon: <Music className="w-6 h-6" />,
      label: "Harvest Beat",
      bg: "bg-green-600 hover:bg-green-800",
      type: "harvest" as const,
      ref: harvestRef,
      audio: "/sounds/Ceddin Deden.mp3",
    },
    {
      icon: <Music className="w-6 h-6" />,
      label: "Rain Rhythm",
      bg: "bg-blue-500 hover:bg-blue-700",
      type: "rain" as const,
      ref: rainRef,
      audio: "/sounds/Der Königgrätzer.mp3",
    },
    {
      icon: <Music className="w-6 h-6" />,
      label: "Solar Sounds",
      bg: "bg-yellow-500 hover:bg-yellow-700 text-yellow-900",
      type: "solar" as const,
      ref: solarRef,
      audio: "/sounds/La Marseillaise.mp3",
    },
  ];

  return (
    <main className="min-h-[100vh] px-12 lg:px-24 flex flex-row-reverse gap-4 lg:gap-0 lg:block ">
      <section className="w-[80vh] lg:h-[80vh] lg:w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center lg:items-center">
        <div className="w-2/3">
          <h1 className="text-5xl lg:text-9xl font-['Trebuchet_MS','sans-serif'] text-white">TRUSTED FARM ID</h1>
        </div>

        <div className="w-1/3 flex flex-row lg:flex-col items-end gap-4">
          {buttons.map((btn, index) => (
            <div key={index} className="group relative">
              {/* Audio element (hidden) */}
              <audio ref={btn.ref} src={btn.audio} preload="auto" />

              {/* Button */}
              <button onClick={() => handleToggle(btn.type)} className={`p-5 rounded-full text-white flex items-center justify-center shadow-md transition ${btn.bg}`}>
                {playing === btn.type ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>

              {/* Tooltip */}
              <div
                className="absolute 
                          bottom-full mb-2 left-1/2 -translate-x-1/2
                          lg:bottom-auto lg:mb-0
                          lg:left-auto lg:right-full lg:mr-2 
                          lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0
                          opacity-0 group-hover:opacity-100 
                          pointer-events-none 
                          transition duration-200 
                          bg-gray-800 text-white
                          px-3 py-1 rounded whitespace-nowrap shadow-lg"
              >
                {btn.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="h-[100vh] lg:h-[20vh] flex justify-center items-center">
        <div className="hidden lg:block">
          <Timeline
            orientation="horizontal"
            contentPosition="above"
            circleColor="bg-green-600 hover:bg-green-900"
            circleSize="w-12 h-12"
            iconColor="text-white"
            lineColor="bg-green-400"
            lineThickness="h-2"
            tooltipClassName="bg-gray-800 rounded-md shadow-md px-3 py-2 text-sm text-white"
            items={[
              { icon: <Wheat size={iconSize} />, header: "Seeds & Supplies" },
              { icon: <Tractor size={iconSize} />, header: "Land Prep" },
              { icon: <Leaf size={iconSize} />, header: "Planting & Growing" },
              { icon: <Sprout size={iconSize} />, header: "Crop Care" },
              { icon: <Hand size={iconSize} />, header: "Harvesting" },
              { icon: <Boxes size={iconSize} />, header: "Post-Harvest Handling" },
              { icon: <Truck size={iconSize} />, header: "Transportation" },
              { icon: <Factory size={iconSize} />, header: "Processing" },
              { icon: <ShoppingCart size={iconSize} />, header: "Retail & Markets" },
              { icon: <ChefHat size={iconSize} />, header: "Cooking & Prep" },
              { icon: <Utensils size={iconSize} />, header: "On the Plate" },
            ]}
          />
        </div>
        <div className="block lg:hidden">
          <Timeline
            orientation="vertical"
            contentPosition="right"
            circleColor="bg-green-600 hover:bg-green-900"
            circleSize="w-12 h-12"
            iconColor="text-white"
            lineColor="bg-green-400"
            lineThickness="w-2"
            tooltipClassName="bg-gray-800 rounded-md shadow-md px-3 py-2 text-sm text-white"
            items={[
              { icon: <Wheat size={iconSize} />, header: "Seeds & Supplies" },
              { icon: <Tractor size={iconSize} />, header: "Land Prep" },
              { icon: <Leaf size={iconSize} />, header: "Planting & Growing" },
              { icon: <Sprout size={iconSize} />, header: "Crop Care" },
              { icon: <Hand size={iconSize} />, header: "Harvesting" },
              { icon: <Boxes size={iconSize} />, header: "Post-Harvest Handling" },
              { icon: <Truck size={iconSize} />, header: "Transportation" },
              { icon: <Factory size={iconSize} />, header: "Processing" },
              { icon: <ShoppingCart size={iconSize} />, header: "Retail & Markets" },
              { icon: <ChefHat size={iconSize} />, header: "Cooking & Prep" },
              { icon: <Utensils size={iconSize} />, header: "On the Plate" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
