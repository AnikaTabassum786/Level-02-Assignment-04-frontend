

"use client";

import { MinusIcon, PlusIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const title = "Medicine FAQ Accordion";

const data = [
  {
    value: "1",
    title: "What is Paracetamol used for?",
    content:
      "Paracetamol is used to relieve mild to moderate pain such as headaches, toothaches, and to reduce fever.",
  },
  {
    value: "2",
    title: "How should I take antibiotics?",
    content:
      "Antibiotics should be taken exactly as prescribed by your doctor. Always complete the full course even if you feel better.",
  },
  {
    value: "3",
    title: "Can I take medicine on an empty stomach?",
    content:
      "Some medicines can be taken on an empty stomach, while others should be taken with food. Always follow the instructions on the label.",
  },
  {
    value: "4",
    title: "What should I do if I miss a dose?",
    content:
      "Take the missed dose as soon as you remember. If it's close to the next dose, skip it. Do not double the dose.",
  },
  {
    value: "5",
    title: "Do medicines have side effects?",
    content:
      "Yes, some medicines may cause side effects like nausea, dizziness, or allergic reactions. Consult a doctor if symptoms are severe.",
  },
];

const AccordionDesign = () => {
  return (
    <>
     

      <h2 className="text-2xl font-bold text-center mb-4">
        Frequent Question and Answer
      </h2>

    <div className="flex justify-center p-4">
     
      <Accordion
        className="flex w-full max-w-md flex-col gap-2"
        collapsible
        defaultValue={data[0].value}
        type="single"
      >
        {data.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="overflow-hidden rounded-lg border bg-background px-4 last:border-b"
          >
            <AccordionTrigger className="group hover:no-underline [&>svg]:hidden">
              <div className="flex w-full items-center gap-3">
                {/* Icon */}
                <div className="relative size-4 shrink-0">
                  <PlusIcon className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-data-[state=open]:opacity-0" />
                  <MinusIcon className="absolute inset-0 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
                </div>

                {/* Title */}
                <span className="flex-1 text-left font-medium">
                  {item.title}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="ps-7 pb-3">
              <p className="text-sm text-muted-foreground">
                {item.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </>
  );
};

export default AccordionDesign;