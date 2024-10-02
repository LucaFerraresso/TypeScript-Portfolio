import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex">
      <Link href="/">
        <button>© 2024 - All rights reserved</button>
      </Link>
      <Link href="/Contacts">
        <button>Contacts</button>
      </Link>
      <Link href="/AboutMe">
        <button>AboutMe</button>
      </Link>
    </div>
  );
};
export default Footer;
