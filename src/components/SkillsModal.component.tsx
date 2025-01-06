import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProgrammingLanguageSkills from "./ProgrammingLanguageSkills.component";
import WebDevSkills from "./WebDevSkills.component";
import DesignSkills from "./DesignSkills.component";

export default function SkillsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-black hover:text-pink-400">Skills</button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[425px] sm:min-h-[500px] md:min-w-max">
        <DialogHeader>
          <DialogTitle>Skills</DialogTitle>
          <DialogDescription>
            See my fluency in different skills.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-5">
          <ProgrammingLanguageSkills />
          <WebDevSkills/>
          <DesignSkills />
        </div>
      </DialogContent>
    </Dialog>
  );
}
