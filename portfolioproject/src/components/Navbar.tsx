import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex">
      <Link href="/">
        <button>Luca Ferraresso</button>
      </Link>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/Projects">
        <button>Projects</button>
      </Link>
    </div>
  );
};
export default Navbar;
