import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface QuestionCheckboxProps {
  question: string;
  answers: string[];
  responsive?: boolean;
}

const QuestionCheckbox: React.FC<QuestionCheckboxProps> = ({ question, answers, responsive = false }) => {
  // Split answers into two columns
  const midIndex = Math.ceil(answers.length / 2);
  const leftColumn = answers.slice(0, midIndex);
  const rightColumn = answers.slice(midIndex);

  return (
    <div className="flex flex-col mb-8">
      <div className="flex font-casual-sketch text-2xl text-blue mb-4">
        {question}
      </div>
      <div className={`flex ${responsive ? 'md:flex-col' : 'space-x-11'}`}>
        <div className="flex flex-col">
          {leftColumn.map((answer, index) => (
            <div key={index} className="flex items-center mb-4">
              <Checkbox className="border-blue rounded-none mr-2" />
              <span className="font-helvetica text-lg text-blue">{answer}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {rightColumn.map((answer, index) => (
            <div key={index} className="flex items-center mb-4">
              <Checkbox className="border-blue rounded-none mr-2" />
              <span className="font-helvetica text-lg text-blue">{answer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCheckbox;