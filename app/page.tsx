import AnimatedArrow from "@/components/animatedarrow";
import Postercover from "@/components/postercover";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Postercover></Postercover>
      <Link className="flex justify-end me-5" href="/content/page1">
        <AnimatedArrow></AnimatedArrow>
      </Link>
    </>
  );
}
