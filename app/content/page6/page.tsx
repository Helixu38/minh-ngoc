import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInput from "@/components/questioninput";
import AnimatedArrow from "@/components/animatedarrow";

const Page6 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          <QuestionInput question="How has your experience of child abuse affected your life as an adult?" />
          <QuestionInput question="What coping mechanisms or strategies have you developed to deal with the trauma from your childhood?" />
        </div>

        <div className="ms-5 flex-1 flex flex-col">
          <QuestionInput question="What would you say to your younger self, knowing what you know now as an adults victim of child abuse?" />
          <QuestionInput question="What are some of the biggest challenges you face today as result of your past experience?" />
          <div></div>
        </div>
        <Link className="flex justify-end me-5 mt-11" href="/content/page7">
          <AnimatedArrow></AnimatedArrow>
        </Link>
      </div>
    </>
  );
};

export default Page6;
