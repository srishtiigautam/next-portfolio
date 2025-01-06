import ProjectCard from "@/components/ProjectCard";

const designs = [
  {
    name: "Accumitt",
    description:
      "Accumitt is an AI-powered accupressure glove that targets specific points based on symptoms.",
    redirectUrl:
      "https://www.figma.com/design/fGYgGacZFTItWI8VX0PyBf/Untitled?t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    imageUrl: "/accumitt.jpeg",
  },
  {
    name: "Restore Health",
    description:
      "A desktop application for comprehensive patient data management, including patient history and more.",
    redirectUrl:
      "https://www.figma.com/design/USgPAameY3uPyQhce7jU8d/Untitled?t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    imageUrl: "/restoreHealth.jpeg",
  },
  {
    name: "Trademarkia Pro",
    description: "Supports 100+ languages and counting.",
    redirectUrl:
      "https://www.figma.com/design/P60X9mhllmVBG2S4RGJT45/trademarkiaPro?t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    imageUrl: "/trademarkia.jpeg",
  },
  {
    name: "Ticketing Arc",
    description: "Use the calendar to filter your files by date.",
    redirectUrl:
      "https://www.figma.com/design/YNEOxEWflBIz28f74yJuRn/Untitled?node-id=0-1&p=f&t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    imageUrl: "/ticketingArc.jpeg",
  },
];

export function UiUxDesignCard() {
  return (
    <div className="max-w-6xl my-5 flex justify-center flex-wrap gap-5">
      {designs.map((design) => (
        <ProjectCard key={design.name} {...design} buttonLabel="View Designs" />
      ))}
    </div>
  );
}
