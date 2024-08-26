import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInputBiggerFont from "@/components/questioninputbiggerfont";
import AnimatedArrow from "@/components/animatedarrow";

const Page8 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col justify-center items-center">
          <div className="relative lg:w-[27rem] lg:h-[37rem] md:w-[20rem] md:h-[30rem] sm:w-[20rem] sm:h-[30rem] min-[320px]:w-[15rem] min-[320px]:h-[26.5rem] max-[425px]:w-[15rem] max-[425px]:h-[26.5rem]  min-[320px]:text-3xl max-[425px]:text-3xl font-casual-sketch md:text-3xl lg:text-5xl text-[#e5b4d6] bg-blue rounded-[60%_60%_60%_60%/60%_60%_60%_60%] flex justify-center items-center text-center p-5">
            <p className="absolute min-[320px]:top-[3.5rem] max-[425px]:top-[3.5rem] md:top-[3rem] lg:top-[4rem]">
              How much
            </p>
            <p className="absolute min-[320px]:top-[6.5rem] max-[425px]:top-[6.5rem] md:top-[7rem] lg:top-[8rem]">
              does an
            </p>
            <p className="absolute min-[320px]:top-[9.5rem] max-[425px]:top-[9.5rem] md:top-[11rem] lg:top-[12rem]">
              apology
            </p>
            <p className="absolute min-[320px]:top-[12.5rem] max-[425px]:top-[12.5rem] md:top-[15rem] lg:top-[16rem]">
              from those
            </p>
            <p className="absolute min-[320px]:top-[15.5rem] max-[425px]:top-[15.5rem] md:top-[19rem] lg:top-[20rem]">
              who caused
            </p>
            <p className="absolute min-[320px]:top-[18.5rem] max-[425px]:top-[18.5rem] md:top-[23rem] lg:top-[24rem]">
              harm mean
            </p>
            <p className="absolute min-[320px]:top-[21.5rem] max-[425px]:top-[21.5rem] md:top-[27rem] lg:top-[28rem]">
              to you?
            </p>
          </div>
        </div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div>
            <QuestionInputBiggerFont question="Write your thoughts here:" />
          </div>
        </div>
        <Link className="flex justify-end me-5 mt-11" href="/content/page9">
          <AnimatedArrow></AnimatedArrow>
        </Link>
      </div>
    </>
  );
};

export default Page8;
