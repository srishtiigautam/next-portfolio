import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import GenericPieChart from "./GenericPieChart.component";
import { PieChartDataItem, PieChartConfig } from "./GenericPieChart.component";

interface SkillCategory {
  category: string;
  displayName: string;
  skills: PieChartDataItem[];
  config: PieChartConfig;
}

export default function SkillsModal() {
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        if (!response.ok) {
          throw new Error('Failed to fetch skills');
        }
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid gap-5 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[300px] w-full rounded-xl" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <Alert variant="destructive">
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      );
    }

    return (
      <div
        className="grid gap-5 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ alignItems: "stretch" }}
      >
        {skills.map((category) => (
          <GenericPieChart
            key={category.category}
            data={category.skills}
            config={category.config}
            title={category.displayName}
          />
        ))}
      </div>
    );
  };

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
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}