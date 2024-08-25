import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInputBiggerFont from "@/components/questioninputbiggerfont";
import Circle from "@/components/circle";
import DrawingCanvas from "@/components/drawcanvas";

const Page8 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#f0d5df] w-screen min-h-screen">
        <div className="ms-10 flex-1 flex flex-col justify-center items-center">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-casual-sketch text-blue">
            Imagine this is a mirror, can you draw how it would reflect your inner child as they are now
          </div>
        </div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div className="flex justify-center my-auto">
            
            <div className="relative lg:w-[27rem] lg:h-[37rem] md:w-[20rem] md:h-[30rem] sm:w-[20rem] sm:h-[30rem] min-[320px]:w-[15rem] min-[320px]:h-[26.5rem] max-[425px]:w-[15rem] max-[425px]:h-[26.5rem] min-[320px]:text-3xl max-[425px]:text-3xl  text-[#e5b4d6] bg-[#fff9f4] rounded-[60%_60%_60%_60%/60%_60%_60%_60%] flex justify-center items-center text-center p-5">
              <DrawingCanvas />
            </div>
            <Link className="absolute right-0 bottom-0 me-5 mt-11" href="/content/page10">
              <IconMathGreater />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page8;
