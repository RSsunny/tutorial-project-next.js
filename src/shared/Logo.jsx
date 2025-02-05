import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <span className="text-3xl  font-bold">Next</span>. js{" "}
        <span className="text-sm">(v.15.1.6)</span>
      </Link>
    </div>
  );
};

export default Logo;
