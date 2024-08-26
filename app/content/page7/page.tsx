import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInput from "@/components/questioninput";
import AnimatedArrow from "@/components/animatedarrow";

const Page7 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          <QuestionInput question="In what ways do you feel society misunderstands or neglects the needs of adults who were once victims of child abuse? And what is the best way to increase public awareness about the long-term effects of childhood trauma?" />
        </div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div></div>
        </div>
        <Link className="flex justify-end me-5 mt-11" href="/content/page8">
          <AnimatedArrow></AnimatedArrow>
        </Link>
      </div>
    </>
  );
};

export default Page7;
