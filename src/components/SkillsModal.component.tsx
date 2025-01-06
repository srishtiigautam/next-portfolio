import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Skills from "./ProgrammingLanguageSkills.component";

export default function SkillsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-black hover:text-pink-400">Skills</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Skills</DialogTitle>
          <DialogDescription>
            See my fluency in different skills.
          </DialogDescription>
        </DialogHeader>
        <Skills />
      </DialogContent>
    </Dialog>
  );
}
