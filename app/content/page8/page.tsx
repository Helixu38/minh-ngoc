import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInputBiggerFont from "@/components/questioninputbiggerfont";

const Page8 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          
        </div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div>
          <QuestionInputBiggerFont question="Write your thoughts here:" />
            <Link className="absolute right-0 bottom-0 me-5 mt-11" href="/content/page8">
              <IconMathGreater />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page8;
