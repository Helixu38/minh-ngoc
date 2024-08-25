import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CircleProp {
  text: string;
}

export default function Circle() {
  return (
    <div className="relative lg:w-[27rem] lg:h-[37rem] md:w-[25rem] md:h-[35rem] sm:w-[20rem] sm:h-[30rem] min-[320px]:w-[15rem] min-[320px]:h-[26.5rem] max-[425px]:w-[15rem] max-[425px]:h-[26.5rem]  min-[320px]:text-base max-[425px]:text-base font-casual-sketch md:text-2xl lg:text-3xl text-blue bg-[#e5b4d6] rounded-[60%_60%_60%_60%/60%_60%_60%_60%] flex justify-center items-center text-center p-5">
      {/* Wrinkled Paper Background */}
      <div className="absolute bg-cover bg-center inset-0 rounded-[60%_60%_60%_60%/60%_60%_60%_60%] bg-[url('/img/h.jfif')]" />

      <p className="absolute min-[320px]:top-[0.5rem] max-[425px]:top-[0.5rem] md:top-[0.5rem] lg:top-[2rem]">
        This study
      </p>
      <p className="absolute min-[320px]:top-[2rem] max-[425px]:top-[2rem] md:top-[2rem] lg:top-[4rem]">
        seeks insights into the
      </p>
      <p className="absolute min-[320px]:top-[3.5rem] max-[425px]:top-[3.5rem] md:top-[4rem] lg:top-[6rem]">
        awareness, perceptions, and
      </p>
      <p className="absolute min-[320px]:top-[5rem] max-[425px]:top-[5rem] md:top-[6rem] lg:top-[8rem]">
        support systems available for
      </p>
      <p className="absolute min-[320px]:top-[6.5rem] max-[425px]:top-[6.5rem] md:top-[8rem] lg:top-[10rem]">
        adult victims of child abuse. While
      </p>
      <p className="absolute min-[320px]:top-[8rem] max-[425px]:top-[8rem] md:top-[10rem] lg:top-[12rem]">
        child abuse is recognized, &nbsp;&nbsp;&nbsp; the
      </p>
      <p className="absolute min-[320px]:top-[9.5rem] max-[425px]:top-[9.5rem] md:top-[12rem] lg:top-[14rem]">
        long-term effects or victims are often
      </p>
      <p className="absolute min-[320px]:top-[11rem] max-[425px]:top-[11rem] md:top-[14rem] lg:top-[16rem]">
        overlooked as they grow into adulthood.
      </p>
      <p className="absolute min-[320px]:top-[12.5rem] max-[425px]:top-[12.5rem] md:top-[16rem] lg:top-[18rem]">
        Your responses will help us understand
      </p>
      <p className="absolute min-[320px]:top-[14rem] max-[425px]:top-[14rem] md:top-[18rem] lg:top-[20rem]">
        the needs of adults victims and how{" "}
      </p>
      <p className="absolute min-[320px]:top-[15.5rem] max-[425px]:top-[15.5rem] md:top-[20rem] lg:top-[22rem]">
        society can better support them. The
      </p>
      <p className="absolute min-[320px]:top-[17rem] max-[425px]:top-[17rem] md:top-[22rem] lg:top-[24rem]">
        information you provide will shape
      </p>
      <p className="absolute min-[320px]:top-[18.5rem] max-[425px]:top-[18.5rem] md:top-[24rem] lg:top-[26rem]">
        campaigns, and create resources
      </p>
      <p className="absolute min-[320px]:top-[20rem] max-[425px]:top-[20rem] md:top-[26rem] lg:top-[28rem]">
        aimed at fostering healing and
      </p>
      <p className="absolute min-[320px]:top-[21.5rem] max-[425px]:top-[21.5rem] md:top-[28rem] lg:top-[30rem]">
        empowerment for those who
      </p>
      <p className="absolute min-[320px]:top-[23rem] max-[425px]:top-[23rem] md:top-[30rem] lg:top-[32rem]">
        have endured such
      </p>
      <p className="absolute min-[320px]:top-[24.5rem] max-[425px]:top-[24.5rem] md:top-[32rem] lg:top-[34rem]">
        experiences
      </p>
    </div>
  );
}
