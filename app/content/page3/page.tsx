"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import AnimatedArrow from "@/components/animatedarrow";
import Image from "next/image";

const Page3 = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Specify the type
  const isDrawingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  const [style, setStyle] = useState("flex justify-start ms-10 z-10");
  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("text-black flex justify-start ms-10");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Check if canvas is null
    const context = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseDown = (event: MouseEvent) => {
      isDrawingRef.current = true;
      [lastXRef.current, lastYRef.current] = [event.offsetX, event.offsetY];
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDrawingRef.current) return;
      if (!context) return; // Check if context is null
      context.strokeStyle = "black"; // Set drawing color
      context.lineWidth = 2; // Set line width
      context.beginPath();
      context.moveTo(lastXRef.current, lastYRef.current);
      context.lineTo(event.offsetX, event.offsetY);
      context.stroke();
      [lastXRef.current, lastYRef.current] = [event.offsetX, event.offsetY];
    };

    const handleMouseUp = () => {
      isDrawingRef.current = false;
    };

    const handleMouseOut = () => {
      isDrawingRef.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseout", handleMouseOut);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          <div className="font-casual-sketch text-xl text-blue mb-11">
            How many of the following practices can you recognize as forms of
            child abuse, even though they are often not acknowledged as such?
          </div>
          <div className="mt-11 font-helvetica text-pink-300 flex flex-col ">
            <button onClick={changeStyle} className={style}>
              Corporal punishment in schools.
            </button>
            <div className="flex justify-end me-6">
              Denying education for work or marriage.
            </div>
            <div className="flex justify-start ms-5">Child labor.</div>
            <div className="flex justify-center text-5xl font-casual-sketch text-blue">
              Circle your Answers
            </div>
            <div className="flex justify-end me-10">Forcing strict diets.</div>
            <div className="flex justify-start">
              Public shaming for discipline.
            </div>
            <div className="flex justify-end me-5">Gender-based neglect.</div>
            <div className="flex justify-center">
              Insulting or verbally humiliating a child.
            </div>
          </div>
        </div>

        <div className="ms-5 flex-1 flex flex-col z-10">
          <QuestionCheckbox
            question="How aware are you of the long-term effects of child abuse on adults?"
            answers={[
              "Very aware.",
              "Somewhat aware.",
              "Not very aware.",
              "Not aware at all.",
            ]}
          />

          <QuestionCheckbox
            question="Where do you primarily get information about child abuse and its long-term effects?"
            answers={[
              "News outlets.",
              "Social media.",
              "Personal experience.",
              "Educational institutions.",
            ]}
          />
          <QuestionCheckbox
            question="Have you ever sought professional help to deal with the effects of childhood trauma?"
            answers={[
              "Yes, I currently receive help.",
              "Yes, I have in the past",
              "No, but I'm considering it",
              "No, I haven't and I'm not interested",
            ]}
            responsive
          />
          <div></div>
        </div>
        <Image
          src="/img/marimba.png"
          alt="Shape 1"
          className="absolute right-5 bottom-[-10px]"
          width={350}
          height={350}
        />
        <Link className="flex justify-end me-5 mt-11" href="/content/page4">
          <AnimatedArrow></AnimatedArrow>
        </Link>
      </div>
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
    </>
  );
};

export default Page3;
