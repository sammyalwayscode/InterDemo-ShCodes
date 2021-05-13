import React from "react";
import HeroImgs from "../Image/hero.gif";

function Hero() {
  return (
    <div>
      <img
        src={HeroImgs}
        alt="Background"
        style={{
          height: "300px",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default Hero;
