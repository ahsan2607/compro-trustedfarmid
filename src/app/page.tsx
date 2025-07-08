import Timeline from "@/components/ui/Timeline/Timeline";
import TimelineItem from "@/components/ui/Timeline/TimelineItem";
import { CheckCircle, Star, AlarmClock, Bug, Rocket } from "lucide-react";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 space-y-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Timeline Component Test</h1>

      {/* ✅ Vertical Timeline */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Vertical Timeline</h2>
        <Timeline direction="vertical">
          {/* Icon + Label */}
          <TimelineItem
            icon={<CheckCircle className="text-blue-500" />}
            label={<p className="font-bold">Started project</p>}
            direction="vertical"
          />

          {/* Icon only + Tooltip */}
          <TimelineItem
            icon={<Star className="text-yellow-500" />}
            tooltip="Reached milestone"
            direction="vertical"
          />

          {/* Icon + Label again */}
          <TimelineItem
            icon={<AlarmClock className="text-red-500" />}
            label={
              <div>
                <p className="font-bold">Deadline</p>
                <p className="text-sm text-gray-500">Submission phase</p>
              </div>
            }
            direction="vertical"
          />

          {/* Icon only (no tooltip) */}
          <TimelineItem
            icon={<Bug className="text-pink-500" />}
            direction="vertical"
          />
        </Timeline>
      </div>

      {/* ✅ Horizontal Timeline */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Horizontal Timeline</h2>
        <Timeline direction="horizontal"><Timeline direction="horizontal" gap="gap-x-16">
  <TimelineItem
    icon={<Rocket className="text-purple-500" />}
    label="Launch"
    direction="horizontal"
  />
  <TimelineItem
    icon={<Star className="text-yellow-400" />}
    tooltip="Milestone reached"
    direction="horizontal"
  />
  <TimelineItem
    icon={<Bug className="text-red-500" />}
    // no label or tooltip — will use fallbackTooltip
    fallbackTooltip="Bug fix stage"
    direction="horizontal"
  />
</Timeline>

        </Timeline>
      </div>
    </main>
  );
}
