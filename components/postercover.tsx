"use client"
import React, { useRef, useEffect, useState } from "react";

export default function PosterCover() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Specify the type of the ref
  const isDrawing = useRef(false);
  const [color, setColor] = useState("#000000"); // Default color
  const [brushSize, setBrushSize] = useState(5); // Default brush size

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Return early if canvas is null

    const context = canvas.getContext("2d");
    if (!context) return; // Return early if context is null

    // Set canvas dimensions to match the container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const startDrawing = (e: MouseEvent) => {
      isDrawing.current = true;
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.lineWidth = brushSize; // Set brush size
      context.strokeStyle = color; // Set brush color
    };

    const draw = (e: MouseEvent) => {
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
    if (!canvas) return; // Return early if canvas is null
    const context = canvas.getContext("2d");
    if (!context) return; // Return early if context is null
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Save the canvas as an image
  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Return early if canvas is null
    const backgroundImage = new Image();
    backgroundImage.src = '/img/postercover.png'; // Your background image URL

    backgroundImage.onload = () => {
      const saveCanvas = document.createElement("canvas");
      const saveContext = saveCanvas.getContext("2d");

      // Set the dimensions of the new canvas
      saveCanvas.width = canvas.width;
      saveCanvas.height = canvas.height;

          // Check if saveContext is null
    if (!saveContext) {
      console.error("Failed to get canvas context for saving.");
      return; // Exit if context is not available
    }

      // Draw the background image
      saveContext.drawImage(backgroundImage, 0, 0, saveCanvas.width, saveCanvas.height);
      // Draw the current canvas content
      saveContext.drawImage(canvas, 0, 0);

      // Save the composite canvas as an image
      const link = document.createElement("a");
      link.download = "drawing.png";
      link.href = saveCanvas.toDataURL("image/png");
      link.click();
    };
  };

  return (
    <div className="relative bg-[url('/img/postercover.png')] bg-contain bg-no-repeat h-screen bg-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-auto"
        style={{ zIndex: 10 }}
      />
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
            onChange={(e) => setBrushSize(Number(e.target.value))}
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
}