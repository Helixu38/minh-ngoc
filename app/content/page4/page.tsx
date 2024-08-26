import Link from "next/link";
import React from "react";
import QuestionRadio from "@/components/questioncheckbox";
import { IconMathGreater } from "@tabler/icons-react";
import AnimatedArrow from "@/components/animatedarrow";

const Page4 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white-background w-screen min-h-screen">
        <div className="ms-5 flex-1 flex flex-col">
          <QuestionRadio
            question="How would you describe your current emotional well-being in relation to your past experiences?"
            answers={[
              "I'm thriving and at peace.",
              "I'm managing, but it's a struggle.",
              "I'm struggling and need more support.",
              "I feel overwhelmed by my past.",
            ]}
            responsive
          />

          <QuestionRadio
            question="Which of the following support options do you think would be most beneficial for adults impacted by childhood trauma?"
            answers={[
              "Access to counseling and therapy.",
              "Support groups with peers.",
              "Educational resources and workshops.",
              "Legal and financial support.",
              "All of the above",
            ]}
            responsive
          />
        </div>

        <div className="ms-5 flex-1 flex flex-col">
          <QuestionRadio
            question="Do you feel that there are enough resources available to help adults who were impacted by childhood trauma?"
            answers={[
              "Yes, there are plenty of resources.",
              "There are some, but not enough.",
              "No,there are very few resources.",
              "I'm not sure.",
            ]}
            responsive
          />
          <QuestionRadio
            question="How supported do you feel by your community in dealing with the effects of childhood trauma?"
            answers={[
              "Very supported.",
              "Somewhat supported.",
              "Not very supported.",
              "Not supported at all.",
              "I'm not sure",
            ]}
            responsive
          />

          <div></div>
        </div>
        <Link className="flex justify-end me-5 mt-11" href="/content/page5">
          <AnimatedArrow></AnimatedArrow>
        </Link>
      </div>
    </>
  );
};

export default Page4;
