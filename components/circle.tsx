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
    <div className="relative w-[30rem] h-[37rem]  font-casual-sketch text-2xl text-blue bg-[#e5b4d6] rounded-full flex justify-center items-center text-center p-5">
      <p className="absolute top-[2rem]">This study</p>
      <p className="absolute top-[4rem]">seeks insights into the</p>
      <p className="absolute top-[6rem]">awareness, perceptions, and</p>
      <p className="absolute top-[8rem]">support systems available for</p>
      <p className="absolute top-[10rem]">adult victims of child abuse. While</p>
      <p className="absolute top-[12rem]">child abuse is recognized, the</p>
      <p className="absolute top-[14rem]">long-term effects or victims are often</p>
      <p className="absolute top-[16rem]">overlooked as they grow into adulthood.</p>
      <p className="absolute top-[18rem]">Your responses will help us understand</p>
      <p className="absolute top-[20rem]">the needs of adults victims and how </p>
      <p className="absolute top-[22rem]">society can better support them. The</p>
      <p className="absolute top-[24rem]">information you provide will shape</p>
      <p className="absolute top-[26rem]">campaigns, and create resources</p>
      <p className="absolute top-[28rem]">aimed at fostering healing and</p>
      <p className="absolute top-[30rem]">empowerment for those who</p>
      <p className="absolute top-[32rem]">have endured such</p>
      <p className="absolute top-[34rem]">experiences</p>
    </div>
  );
}
