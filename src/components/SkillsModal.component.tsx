import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import GenericPieChart from "./GenericPieChart.component";
import { PieChartDataItem, PieChartConfig } from "./GenericPieChart.component";

const programmingLanguageDesktopData: PieChartDataItem[] = [
  { key: "javascript", value: 85, fill: "var(--color-pink)" },
  { key: "python", value: 80, fill: "var(--color-blue)" },
  { key: "java", value: 90, fill: "var(--color-purple)" },
];
const programmingLanguageChartConfig: PieChartConfig = {
  javascript: { label: "Javascript", color: "#ff6384" },
  python: { label: "Python", color: "#36a2eb" },
  java: { label: "Java", color: "#cc65fe" },
};

const webDevDesktopData: PieChartDataItem[] = [
  { key: "html", value: 85, fill: "var(--color-pink)" },
  { key: "css", value: 80, fill: "var(--color-blue)" },
  { key: "reactjs", value: 90, fill: "var(--color-purple)" },
  { key: "nextjs", value: 173, fill: "var(--color-orange)" },
  { key: "nodejs", value: 209, fill: "var(--color-green)" },
];
const webDevChartConfig: PieChartConfig = {
  html: {
    label: "HTML",
    color: "#ff6384",
  },
  css: {
    label: "CSS",
    color: "#36a2eb",
  },
  reactjs: {
    label: "React.js",
    color: "#cc65fe",
  },
  nextjs: {
    label: "Next.js",
    color: "#e88c30",
  },
  nodejs: {
    label: "Node.js",
    color: "#2eb88a",
  },
};

const designDesktopData: PieChartDataItem[] = [
  { key: "adobexd", value: 85, fill: "var(--color-pink)" },
  { key: "figma", value: 80, fill: "var(--color-blue)" },
  { key: "qtdesigner", value: 90, fill: "var(--color-purple)" },
];
const designChartConfig: PieChartConfig = {
  adobexd: {
    label: "Adobe XD",
    color: "#ff6384",
  },
  figma: {
    label: "Figma",
    color: "#36a2eb",
  },
  qtdesigner: {
    label: "QT Designer",
    color: "#cc65fe",
  },
};

export default function SkillsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-black hover:text-pink-400">Skills</button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[425px] sm:min-h-[500px] md:min-w-max max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Skills</DialogTitle>
          <DialogDescription>
            See my fluency in different skills.
          </DialogDescription>
        </DialogHeader>
        <div
          className="grid gap-5 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ alignItems: "stretch" }}
        >
          <GenericPieChart
            data={programmingLanguageDesktopData}
            config={programmingLanguageChartConfig}
            title="Programming Languages"
          />
          <GenericPieChart
            data={webDevDesktopData}
            config={webDevChartConfig}
            title="Web Development"
          />
          <GenericPieChart
            data={designDesktopData}
            config={designChartConfig}
            title="UI/UX Designing Skills"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}


