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
            <AccordionTrigger className="text-lg font-bold">
              Who is this website for?
            </AccordionTrigger>
            <AccordionContent>
              Anyone! If you are interested in learning about space then come
              along for the ride!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold">
              How do I use it?
            </AccordionTrigger>
            <AccordionContent>
              Click on a Planet to learn about it. Once you are done open up a
              quiz to learn some fun facts!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">
              Who made the website?
            </AccordionTrigger>
            <AccordionContent>
              Laurentiu Cristian Preda (@criseda) and Anthony Nguyen (@a38062an)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-bold">
              What on Earth are these quizzes??
            </AccordionTrigger>
            <AccordionContent>
              These quizzes are supposed to be fun for children, hence some of
              the questions are a bit silly. Throughout those silly questions
              there are also more educational ones to develop the
              children&apos;s knowledge.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
