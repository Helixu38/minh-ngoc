import Link from "next/link";
import React from "react";
import { IconMathGreater } from "@tabler/icons-react";
import Circle from "@/components/circle";
import AnimatedArrow from "@/components/animatedarrow";
import Image from "next/image";

const Page2 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#8fbae2] w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col"></div>
        <Image
          src="/img/ballonblue.png"
          alt="Shape 1"
          className="absolute bottom-0"
          width={500}
          height={500}
        />

        <div className="relative ms-5 flex-1 flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <div className="font-helvetica text-white me-[50px] text-center text-lg bg-[#6486d0] rounded-md">
              Many people go through life without realizing that certain
              experiences from their childhood were actually forms of abuse.
              Actions like harsh discipline, verbal humiliation, or neglect
              may have seemed normal at the time, often because they were
              accepted or even encouraged in their environment. However, these
              experiences can leave deep emotional scars, shaping how we see
              ourselves and the world around us. It’s only through education
              and reflection that we start to recognize the impact of these
              actions and understand that what we endured wasn’t our fault -
              it was abuse. Acknowledging this truth is the first step toward
              healing and breaking the cycle for future generations. By
              bringing awareness to these issues, we can help others see their
              own experiences more clearly and support them on their journey
              to recovery.
            </div>
            <Link
              className="absolute right-0 bottom-0 me-5 mt-11"
              href="/content/page3"
            >
              <AnimatedArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;