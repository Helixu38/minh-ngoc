"use client";
import React, { useRef, useEffect, useState } from "react";
import DrawingToolbox from "@/components/drawingtoolbox"; // Adjust the import path as necessary
import { IconBrush } from "@tabler/icons-react";

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [color, setColor] = useState("#000000");
  const [isToolboxVisible, setToolboxVisible] = useState(true); // State to manage toolbox visibility

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.lineCap = "round";
        context.strokeStyle = color; // Set initial color
        context.lineWidth = 5; // Set initial line width
      }
      contextRef.current = context;
    }
  }, [color]); // Update context when color changes

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    draw(event);
  };

  const endDrawing = () => {
    isDrawing.current = false;
    contextRef.current?.beginPath(); // Reset the path
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || !contextRef.current) return;

    contextRef.current.lineTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
    contextRef.current.stroke();
    contextRef.current.beginPath();
    contextRef.current.moveTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    if (contextRef.current) {
      contextRef.current.strokeStyle = newColor; // Update stroke color
    }
  };

  const toggleToolboxVisibility = () => {
    setToolboxVisible((prev) => !prev);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current; // Get the current canvas reference
    if (canvas && contextRef.current) {
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <>
      {isToolboxVisible && (
        <DrawingToolbox
          onColorChange={handleColorChange}
          onClose={toggleToolboxVisibility}
          onClearCanvas={clearCanvas}
        />
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-[60%_60%_60%_60%/60%_60%_60%_60%] absolute"
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onMouseMove={draw}
      />
      <button
        onClick={toggleToolboxVisibility}
        className="fixed top-4 left-2 bg-blue-500 text-white p-2 rounded-md z-10"
      >
        {isToolboxVisible ? "" : <IconBrush color="green"></IconBrush>}
      </button>
    </>
  );
};

export default DrawingCanvas;
