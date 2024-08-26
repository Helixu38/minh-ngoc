import Link from "next/link";
import React from "react";
import { IconMathGreater } from "@tabler/icons-react";
import AnimatedArrow from "@/components/animatedarrow";
import Circle from "@/components/circle";
import Image from "next/image";

const Page1 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#eebed8] w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col"></div>
        <Image
          src="/img/texas.png"
          alt="Shape 1"
          className="absolute right-0 top-[-220px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/swirlorange.png"
          alt="Shape 1"
          className="absolute right-[400px] top-[-180px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/teeth.png"
          alt="Shape 1"
          className="absolute left-[280px] top-[-160px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/starpink.png"
          alt="Shape 1"
          className="absolute left-[450px] top-[-200px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/starblue.png"
          alt="Shape 1"
          className="absolute left-[370px] top-[-130px]"
          width={500}
          height={500}
        />

        <div className="relative ms-5 flex-1 flex flex-col">
          <div className="flex justify-center my-auto">
            <div>
              <Circle></Circle>
              <Link
                className="absolute right-0 bottom-0 me-5 mt-11"
                href="/content/page2"
              >
                <AnimatedArrow></AnimatedArrow>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
