// components/AnimatedArrow.js
export default function AnimatedArrow() {
  return (
    <div className="relative flex items-center justify-center z-10">
      <div className="absolute bottom-5 right-5 text-6xl sm:text-5xl md:text-5xl lg:text-6xl animate-bounce">→</div>
    </div>
  );
}
