import Link from "next/link";
import React from "react";

const Page1 = () => {
  return (
    <>
      <div>This is page 1</div>
      <div>
        <Link href="/content/page2">Hello</Link>
      </div>
    </>
  );
};

export default Page1;
