import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
// import image from "@/assets/image.png";

const features = [
  {
    // Icon: FileTextIcon,
    name: "Accumitt",
    description: "We automatically save your files as you type.",
    href: "https://www.figma.com/design/fGYgGacZFTItWI8VX0PyBf/Untitled?t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    background: (
      <Image
        src="/accumitt.png"
        alt="avatar"
        fill={true}
        className="object-center object-contain opacity-50"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    // Icon: InputIcon,
    name: "Restore Health",
    description: "Search through all your files in one place.",
    href: "https://www.figma.com/design/USgPAameY3uPyQhce7jU8d/Untitled?t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    background: (
      <Image
        src="/restoreHealth.png"
        alt="avatar"
        fill={true}
        className="object-center object-contain opacity-50"
      />
    ),
    className: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-4",
  },
  {
    // Icon: GlobeIcon,
    name: "Trademarkia Pro",
    description: "Supports 100+ languages and counting.",
    href: "https://www.figma.com/design/P60X9mhllmVBG2S4RGJT45/trademarkiaPro?t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    background: (
      <Image
        src="/trademarkia.png"
        alt="avatar"
        fill={true}
        className="object-center object-contain -z-50 opacity-50"
      />
    ),
    className: "lg:row-start-4 lg:row-end-6 lg:col-start-1 lg:col-end-3",
  },
  {
    // Icon: CalendarIcon,
    name: "Ticketing Arc",
    description: "Use the calendar to filter your files by date.",
    href: "https://www.figma.com/design/YNEOxEWflBIz28f74yJuRn/Untitled?node-id=0-1&p=f&t=6emmmBwEY3oaD0i6-0",
    cta: "Learn more",
    background: (
      <Image
        src="/ticketingArc.png"
        alt="avatar"
        fill={true}
        className="object-center object-contain opacity-50"
      />
    ),
    className: "lg:row-start-4 lg:row-end-7 lg:col-start-3 lg:col-end-4",
  },
];

export function UiUxDesignCard() {
  return (
    <BentoGrid className="lg:grid-rows-[repeat(7,_minmax(200px,_1fr))] lg:grid-cols-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
