import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function AboutAccordion() {
  return (
    <div className="h-screen flex antialiased pt-10">
      <div className="max-w-2xl mx-auto p-4 mt-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold">How does the website implement accesibility?</AccordionTrigger>
            <AccordionContent>
              We have implemented colour blind modes in order to make the website more accessible to everyone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold">Who is this website for?</AccordionTrigger>
            <AccordionContent>
              Anyone! If you are interested in learning about space then come along for the ride! 
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">How do I use it?</AccordionTrigger>
            <AccordionContent>
              Click on a Planet to learn about it and then once your done rading do a quiz to test yourself!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">Who made the website?</AccordionTrigger>
            <AccordionContent>
              Chris, Romanian Chris, Anthony and Alex made the website! 
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
  
    </div>
  );
}
