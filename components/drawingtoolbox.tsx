import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";

// Define the props interface
interface DrawingToolboxProps {
  onColorChange: (color: string) => void; // Function that accepts a string color
  onClose: () => void; // Function to handle closing the toolbox
  onClearCanvas: () => void; // Function to clear the canvas
}

const DrawingToolbox: React.FC<DrawingToolboxProps> = ({
  onColorChange,
  onClose,
  onClearCanvas,
}) => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div className="fixed top-4 left-4 bg-white p-4 rounded-md shadow-md z-10">
      <div className="relative flex justify-between items-center mb-2">
        <h3 className="text-lg font-helvetica">Drawing Toolbox</h3>
        <button
          onClick={onClose}
          className="absolute top-[-13px] right-[-10px] text-red-500 hover:text-red-700"
        >
          <IconX width={15} height={15}></IconX>
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="color-picker" className="text-base">
          Color:
        </label>
        <input
          type="color"
          id="color-picker"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-6 h-6 shadow-none"
        />
      </div>
      <button
        onClick={onClearCanvas}
        className="flex justify-start mt-2 w-full pt-2 pl-5 h-10 text-base bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Clear Canvas
      </button>
    </div>
  );
};

export default DrawingToolbox;
