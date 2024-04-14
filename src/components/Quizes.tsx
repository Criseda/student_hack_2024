"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function SunQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["star", "hot", "yes"];
    const userAnswers = [answer1, answer2, answer3];
    const isCorrect = correctAnswers.every(
      (answer, index) => answer === userAnswers[index]
    );

    if (isCorrect) {
      onQuizResult(true);
    } else {
      onQuizResult(false);
    }

    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"default"}
          className="bg-blue-500 text-white"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Start Sun Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fun Sun Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s learn about the Sun! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="sunQuiz1" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is the Sun?</p>
            <div className="mb-1">
              <RadioGroupItem value="star" id="r1">
                <Label htmlFor="r1">A. A star</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="planet" id="r2">
                <Label htmlFor="r2">B. A planet</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moon" id="r3">
                <Label htmlFor="r3">C. A moon</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>

          <RadioGroup name="sunQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">2. Is the Sun hot or cold?</p>
            <div className="mb-1">
              <RadioGroupItem value="hot" id="r4">
                <Label htmlFor="r4">A. Hot</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="cold" id="r5">
                <Label htmlFor="r5">B. Cold</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>

          <RadioGroup name="sunQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">3. Does the Sun give us light?</p>
            <div className="mb-1">
              <RadioGroupItem value="yes" id="r6">
                <Label htmlFor="r6">A. Yes</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="no" id="r7">
                <Label htmlFor="r7">B. No</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button
            variant={"secondary"}
            className="bg-red-500 text-white"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant={"default"}
            className="bg-green-500 text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
