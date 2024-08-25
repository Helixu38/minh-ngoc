import Link from "next/link";
import React from "react";

const Page2 = () => {
  return (
    <>
      <div>This is page 2</div>
      <div>
        <Link href="/content/page3">Hello</Link>
      </div>
    </>
  );
};

export default Page2;
