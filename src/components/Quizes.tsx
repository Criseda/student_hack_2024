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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function SunQuiz() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="bg-blue-500 text-white">
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
          <RadioGroup name="sunQuiz">
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
          <Button variant={"secondary"} className="bg-red-500 text-white">
            Cancel
          </Button>
          <Button variant={"default"} className="bg-green-500 text-white">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}