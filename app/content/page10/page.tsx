import Link from "next/link";
import React from "react";
import { IconMathGreater } from "@tabler/icons-react";
import AnimatedArrow from "@/components/animatedarrow";
const Page10 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#5e75e8] w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col"></div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div className="flex justify-center my-auto">
            <div>
            </div>
          </div>
        </div>
        <Link className="flex justify-end me-5 mt-11" href="/content/page10">
          <AnimatedArrow></AnimatedArrow>
        </Link>
      </div>
    </>
  );
};

export default Page10;
