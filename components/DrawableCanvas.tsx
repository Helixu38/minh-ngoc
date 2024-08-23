"use client"
import React, { useRef, useEffect, useState } from "react";

const DrawableCanvas = ({ backgroundImage }) => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [color, setColor] = useState("#000000"); // Default color
  const [brushSize, setBrushSize] = useState(5); // Default brush size

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match the container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const startDrawing = (e) => {
      isDrawing.current = true;
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.lineWidth = brushSize; // Set brush size
      context.strokeStyle = color; // Set brush color
    };

    const draw = (e) => {
      if (!isDrawing.current) return;
      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
    };

    const stopDrawing = () => {
      isDrawing.current = false;
      context.closePath();
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, [color, brushSize]);

  // Clear the canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Save the canvas as an image
  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-auto"
        style={{ zIndex: 10 }}
      />
      {backgroundImage && (
        <div
          className={'absolute top-0 left-0 w-full h-full bg-cover ${backgroundImage}'}
        />
      )}
      <div className="fixed top-4 left-4 z-20 bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-2">Drawing Tools</h2>
        <label className="block mb-2">
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="ml-2"
          />
        </label>
        <label className="block mb-2">
          Brush Size:
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
            className="ml-2"
          />
        </label>
        <button
          onClick={clearCanvas}
          className="bg-red-500 text-white px-4 py-2 rounded mb-2"
        >
          Clear
        </button>
        <button
          onClick={saveCanvas}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DrawableCanvas;