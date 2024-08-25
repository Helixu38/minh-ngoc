import Link from "next/link";
import React from "react";
import { IconMathGreater } from "@tabler/icons-react";
const Page10 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#5e75e8] w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col"></div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div className="flex justify-center my-auto">
            <div>
              <Link
                className="absolute right-0 bottom-0 me-5 mt-11"
                href="/content/page11"
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

export default Page10;
