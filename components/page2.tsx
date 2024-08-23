import React from "react";
import Image from "next/image";

export default function page2() {
  return (
    <div className="relative bg-[url('/img/page2.png')] bg-contain bg-no-repeat h-screen bg-center">
      {/* <Image
        src="/img/page2.png"
        alt="Balloon and Shadow"
        layout="intrinsic"
        width={1980}
        height={1405}
        className="object-contain"
      >
      </Image> */}
      <div className="absolute left-120 bottom-66 text-base text-white">
        <p className="font-helvetica me-67">
          Many people go through life without realizing that certain experiences
          from their childhood were actually forms of abuse. Actions like harsh
          discipline, verbal humiliation, or neglect may have seemed normal at
          the time, often because they were accepted or even encouraged in their
          environment. However, these experiences can leave deep emotional
          scars, shaping how we see ourselves and the world around us. It’s only
          through education and refection that we start to recognize the impact
          of these actions and understand that what we endured wasn’t our fault
          - it was abuse. Acknowledging this truth is the frst step toward
          healing and breaking the cycle for future generations. By bringing
          awareness to these issues, we can help others see their own
          experiences more clearly and support them on their journey to
          recovery.
        </p>
      </div>
    </div>
  );
}
