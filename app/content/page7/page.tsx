import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import QuestionInput from "@/components/questioninput";

const Page7 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          <QuestionInput question="In what ways do you feel society misunderstands or neglects the needs of adults who were once victims of child abuse? And what is the best way to increase public awareness about the long-term effects of childhood trauma?" />
        </div>

        <div className="relative ms-5 flex-1 flex flex-col">
          <div>
            <Link className="absolute right-0 bottom-0 me-5 mt-11" href="/content/page8">
              <IconMathGreater />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page7;
