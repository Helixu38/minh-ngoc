import Link from "next/link";
import React from "react";
import { IconMathGreater } from "@tabler/icons-react";
import AnimatedArrow from "@/components/animatedarrow";
import Circle from "@/components/circle";
import Image from "next/image";

const Page1 = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row bg-[#eebed8] w-screen min-h-screen overflow-hidden">
        <div className=" ms-5 flex-1 flex flex-col"></div>
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
        <Image
          src="/img/oblue.png"
          alt="Shape 1"
          className="absolute"
          width={500}
          height={500}
        />
        <Image
          src="/img/ogreen.png"
          alt="Shape 1"
          className="absolute left-[250px] top-[100px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/swigly.png"
          alt="Shape 1"
          className="absolute left-[320px] top-[100px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/shapeblue.png"
          alt="Shape 1"
          className="absolute left-[520px] "
          width={500}
          height={500}
        />
        <Image
          src="/img/swirlyblue.png"
          alt="Shape 1"
          className="absolute bottom-0 inset-x-0"
          width={500}
          height={500}
        />
        <Image
          src="/img/starorange.png"
          alt="Shape 1"
          className="absolute left-[150px] top-[150px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/rockorange.png"
          alt="Shape 1"
          className="absolute right-[500px] top-[380px]"
          width={500}
          height={500}
        />
        <Image
          src="/img/phoneblue.png"
          alt="Shape 1"
          className="absolute left-[350px] top-[300px]"
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
