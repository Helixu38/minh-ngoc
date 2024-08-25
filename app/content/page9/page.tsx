import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInputBiggerFont from "@/components/questioninputbiggerfont";
import Circle from "@/components/circle";

const Page8 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-casual-sketch text-blue">Imagine this is a mirror, can you draw how it would reflect your inner child as they are now</div>
          
        </div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div className="flex justify-center my-auto">
            <Circle></Circle>
            <Link className="absolute right-0 bottom-0 me-5 mt-11" href="/content/page9">
              <IconMathGreater />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page8;
