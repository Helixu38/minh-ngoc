import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInput from "@/components/questioninput";
import AnimatedArrow from "@/components/animatedarrow";
import Image from "next/image";

const Page5 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[white-background] w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          <QuestionCheckbox
            question="What is the biggest barrier you face in accessing support for your past trauma?"
            answers={[
              "Financial constraints.",
              "Stigma and judgment.",
              "Lack of available resources.",
              "Not knowing where to start.",
            ]}
            responsive
          />

          <QuestionCheckbox
            question="Which of the following support options do you think would be most beneficial for adults impacted by childhood trauma?"
            answers={[
              "Yes, definitely.",
              "Yes, somewhat.",
              "Not really.",
              "No, not at all.",
            ]}
          />
          <Image
            src="/img/scooter.png"
            alt="Shape 1"
            className="absolute left-[20px] bottom-[-50px]"
            width={550}
            height={550}
            unoptimized
          />
        </div>

        <div className="ms-5 flex-1 flex flex-col">
          <QuestionInput question="Can you share with us a time when you or a friend experienced something, like harsh discipline or neglect, that didn't seem like abuse then but later you realized it was?" />
          <QuestionInput question="How did not recognizing it at the time affect you or those of your friends?" />
          <div></div>
        </div>
        <Link className="flex justify-end me-5 mt-11" href="/content/page6">
          <AnimatedArrow></AnimatedArrow>
        </Link>
      </div>
    </>
  );
};

export default Page5;
