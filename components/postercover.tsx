import Link from 'next/link'
import React from 'react'
import AnimatedArrow from './animatedarrow';

export default function postercover() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#4b69c6]">
      <div className="bg-[#f6f1ed] p-8 sm:p-16 lg:p-24 rounded-md">
        <div className="text-center">
          <div className="text-7xl font-bold">
            <span className="inline-block text-[#efb969] relative">
              i
            </span>
            <span className="inline-block text-[#e07632]">t</span>
            <span className="inline-block text-[#64bf90]">I</span>
            <span className="inline-block text-[#fc5f57]">S</span>
            <span className="inline-block text-[#e7a3d8]">N</span>
            <span className="inline-block text-[#b598f8]">’t</span>
          </div>
          <div className="text-7xl font-bold mt-6">
            <span className="inline-block text-[#83c0bb]">y</span>
            <span className="inline-block text-[#fc5f57] relative">
              O
            </span>
            <span className="inline-block text-[#f7d179]">U</span>
            <span className="inline-block text-[#4a68cb]">r</span>
          </div>
          <div className="text-7xl font-bold mt-6">
            <span className="inline-block text-[#efb969]">F</span>
            <span className="inline-block text-[#e7a3d8]">A</span>
            <span className="inline-block text-[#4a68cb]">U</span>
            <span className="inline-block text-[#83c0bb]">L</span>
            <span className="inline-block text-[#fc5f57]">T</span>
          </div>
        </div>
      </div>
    </div>
  );
};
