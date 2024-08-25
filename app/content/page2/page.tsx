import Link from "next/link";
import React from "react";
import { IconMathGreater } from "@tabler/icons-react";
import Circle from "@/components/circle";

const Page2 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col"></div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div className="flex justify-center my-auto">
            <div>
              <Circle></Circle>
              <Link
                className="absolute right-0 bottom-0 me-5 mt-11"
                href="/content/page2"
              >
                <IconMathGreater />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
