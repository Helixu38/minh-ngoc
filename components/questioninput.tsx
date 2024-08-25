// components/QuestionInput.tsx
import React from "react";

interface QuestionInputProps {
  question: string;
  placeholder?: string;
}

const QuestionInput: React.FC<QuestionInputProps> = ({
  question,
  placeholder,
}) => {
  return (
    <div className="flex flex-col mb-8">
      <label className="font-casual-sketch text-2xl text-blue mb-2">
        {question}
      </label>
      <textarea
        className="font-helvetica p-2 h-60 text-blue resize-none bg-white-background focus:border-blue-500 focus:outline-none me-10"
        placeholder={placeholder}
        style={{
          background:
            "repeating-linear-gradient(to bottom, transparent, transparent 26px, #33d 27px)",
          backgroundAttachment: "local",
          paddingTop: "6px", // Adjust this value to move the text above the lines
          lineHeight: "1.5", // Adjust line height for better spacing
        }}
      />
    </div>
  );
};

export default QuestionInput;
