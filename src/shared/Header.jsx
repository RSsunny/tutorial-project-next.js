import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-32 py-3 border-b flex justify-between gap-5">
      <div>
        <Logo />
      </div>
      <div className="flex gap-5">
        <Link href={"/doc"}>Doc</Link>
        <Link href={"/service"}>Service</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Header;
