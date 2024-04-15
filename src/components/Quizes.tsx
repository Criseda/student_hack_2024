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
export function MercuryQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["sun", "59", "mercury"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Mercury Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Exciting Mercury Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s explore Mercury! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="mercuryQuiz1 " onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is Mercury closest to?</p>
            <div className="mb-1">
              <RadioGroupItem value="sun" id="r1">
                <Label htmlFor="r1">A. The Sun</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="earth" id="r2">
                <Label htmlFor="r2">B. Earth</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moon" id="r3">
                <Label htmlFor="r3">C. The Moon</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="mercuryQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">2. How long is a day on Mercury?</p>
            <div className="mb-1">
              <RadioGroupItem value="59" id="r4">
                <Label htmlFor="r4">A. 59 Earth days</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="24" id="r5">
                <Label htmlFor="r5">B. 24 hours</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="mercuryQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">
              3. Which planet is smaller, Mercury or Earth?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="mercury" id="r6">
                <Label htmlFor="r6">A. Mercury</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="earth" id="r7">
                <Label htmlFor="r7">B. Earth</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function VenusQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["hot", "second", "yellow"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Venus Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fascinating Venus Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s delve into Venus! Choose the best answer for each
            question.
          </p>

          <RadioGroup name="venusQuiz1" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is Venus known for?</p>
            <div className="mb-1">
              <RadioGroupItem value="hot" id="r1">
                <Label htmlFor="r1">A. Being hot</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="rings" id="r2">
                <Label htmlFor="r2">B. Having rings</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moons" id="r3">
                <Label htmlFor="r3">C. Having moons</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="venusQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">
              2. Which planet is Venus from the Sun?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="second" id="r4">
                <Label htmlFor="r4">A. Second</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="third" id="r5">
                <Label htmlFor="r5">B. Third</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="venusQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">3. What is Venus&apos;s color?</p>
            <div className="mb-1">
              <RadioGroupItem value="yellow" id="r6">
                <Label htmlFor="r6">A. Yellow</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="red" id="r7">
                <Label htmlFor="r7">B. Red</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function EarthQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["seven", "water", "lion"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Earth Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fun Earth Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s learn about Earth! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="earthQuiz1" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">
              1. How many continents are there on Earth?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="seven" id="r1">
                <Label htmlFor="r1">A. Seven</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="three" id="r2">
                <Label htmlFor="r2">B. Three</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="ten" id="r3">
                <Label htmlFor="r3">C. Ten</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="earthQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">
              2. What is the Earth mostly covered with?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="water" id="r4">
                <Label htmlFor="r4">A. Water</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="rocks" id="r5">
                <Label htmlFor="r5">B. Rocks</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="earthQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">
              3. Which animal is known as the &apos;King of the Jungle&apos;?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="lion" id="r6">
                <Label htmlFor="r6">A. Lion</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="elephant" id="r7">
                <Label htmlFor="r7">B. Elephant</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function MarsQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["planet", "cold", "no"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Mars Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fun Mars Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s learn about Mars! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="marsQuiz1" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is Mars?</p>
            <div className="mb-1">
              <RadioGroupItem value="planet" id="r1">
                <Label htmlFor="r1">A. A planet</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="star" id="r2">
                <Label htmlFor="r2">B. A star</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moon" id="r3">
                <Label htmlFor="r3">C. A moon</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>

          <RadioGroup name="marsQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">2. Is Mars hot or cold?</p>
            <div className="mb-1">
              <RadioGroupItem value="cold" id="r4">
                <Label htmlFor="r4">A. Cold</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="hot" id="r5">
                <Label htmlFor="r5">B. Hot</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>


          <RadioGroup name="marsQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">3. Does Mars have water?</p>
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
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function JupiterQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["planet", "gas", "13"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Jupiter Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fun Jupiter Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s learn about Jupiter! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="jupiterQuiz" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is Jupiter?</p>
            <div className="mb-1">
              <RadioGroupItem value="planet" id="r1">
                <Label htmlFor="r1">A. A planet</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="star" id="r2">
                <Label htmlFor="r2">B. A star</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moon" id="r3">
                <Label htmlFor="r3">C. A moon</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="jupiterQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">2. What is Jupiter mostly made of?</p>
            <div className="mb-1">
              <RadioGroupItem value="gas" id="r4">
                <Label htmlFor="r4">A. Gas</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="rock" id="r5">
                <Label htmlFor="r5">B. Rock</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="jupiterQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">
              3. How many moons does Jupiter have?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="79" id="r6">
                <Label htmlFor="r6">A. 79</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="13" id="r7">
                <Label htmlFor="r7">B. 13</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function SaturnQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["planet", "rings", "7"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Saturn Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fun Saturn Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s learn about Saturn! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="saturnQuiz1" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is Saturn?</p>
            <div className="mb-1">
              <RadioGroupItem value="planet" id="r1">
                <Label htmlFor="r1">A. A planet</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="star" id="r2">
                <Label htmlFor="r2">B. A star</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moon" id="r3">
                <Label htmlFor="r3">C. A moon</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="saturnQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">2. What is Saturn known for?</p>
            <div className="mb-1">
              <RadioGroupItem value="rings" id="r4">
                <Label htmlFor="r4">A. Its rings</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="size" id="r5">
                <Label htmlFor="r5">B. Its size</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="saturnQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">
              3. How many rings does Saturn have?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="7" id="r6">
                <Label htmlFor="r6">A. 7</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="3" id="r7">
                <Label htmlFor="r7">B. 3</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function UranusQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["planet", "13", "blue"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Uranus Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fun Uranus Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s learn about Uranus! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="uranusQuiz1" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is Uranus?</p>
            <div className="mb-1">
              <RadioGroupItem value="planet" id="r1">
                <Label htmlFor="r1">A. A planet</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="star" id="r2">
                <Label htmlFor="r2">B. A star</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moon" id="r3">
                <Label htmlFor="r3">C. A moon</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="uranusQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">
              2. How many rings does Uranus have?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="13" id="r4">
                <Label htmlFor="r4">A. 13</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="0" id="r5">
                <Label htmlFor="r5">B. 0</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="uranusQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">3. What is the color of Uranus?</p>
            <div className="mb-1">
              <RadioGroupItem value="blue" id="r6">
                <Label htmlFor="r6">A. Blue</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="red" id="r7">
                <Label htmlFor="r7">B. Red</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function NeptuneQuiz({
  onQuizResult,
}: {
  onQuizResult: (isPassed: boolean) => void;
}) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const correctAnswers = ["planet", "14", "blue"];
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
        <Button variant={"default"} className="bg-blue-500 text-white" onClick={() => {
            setIsOpen(true);
          }}>
          Start Neptune Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fun Neptune Quiz!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg">
          <p className="mb-4">
            Let&apos;s learn about Neptune! Choose the best answer for each
            question.
          </p>
          <RadioGroup name="neptuneQuiz1" onValueChange={setAnswer1}>
            <p className="font-bold mb-2">1. What is Neptune?</p>
            <div className="mb-1">
              <RadioGroupItem value="planet" id="r1">
                <Label htmlFor="r1">A. A planet</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-1">
              <RadioGroupItem value="star" id="r2">
                <Label htmlFor="r2">B. A star</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="moon" id="r3">
                <Label htmlFor="r3">C. A moon</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="neptuneQuiz2" onValueChange={setAnswer2}>
            <p className="font-bold mb-2">
              2. How many moons does Neptune have?
            </p>
            <div className="mb-1">
              <RadioGroupItem value="14" id="r4">
                <Label htmlFor="r4">A. 14</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="2" id="r5">
                <Label htmlFor="r5">B. 2</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <RadioGroup name="neptuneQuiz3" onValueChange={setAnswer3}>
            <p className="font-bold mb-2">3. What is Neptune&apos;s color?</p>
            <div className="mb-1">
              <RadioGroupItem value="blue" id="r6">
                <Label htmlFor="r6">A. Blue</Label>
              </RadioGroupItem>
            </div>
            <div className="mb-4">
              <RadioGroupItem value="red" id="r7">
                <Label htmlFor="r7">B. Red</Label>
              </RadioGroupItem>
            </div>
          </RadioGroup>
        </DialogDescription>
        <DialogFooter>
          <Button variant={"secondary"} className="bg-red-500 text-white" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
