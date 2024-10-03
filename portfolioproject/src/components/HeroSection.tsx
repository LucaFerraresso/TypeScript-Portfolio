import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Image src="/images/myFoto.jpg" alt="myFoto" width={200} height={200} />
      <h1>Hero Section</h1>
      <p>Some text about me.</p>
      <button>linkedin personale</button>
      <button>github personale</button>
    </div>
  );
};
export default HeroSection;
