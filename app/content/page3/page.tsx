import Link from "next/link";
import React from "react";
import QuestionCheckbox from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";

const Page3 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          <div className="font-casual-sketch text-xl text-blue mb-11">
            How many of the following practices can you recognize as forms of
            child abuse, even though they are often not acknowledged as such?
          </div>
          <div className="mt-11 font-helvetica text-pink-300 flex flex-col">
            <div className="flex justify-start ms-10">
              Corporal punishment in schools.
            </div>
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

        <div className="ms-5 flex-1 flex flex-col">
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
          <div>
            <Link className="flex justify-end me-5 mt-11" href="/content/page4"><IconMathGreater/></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
