import React from "react";
import Image from "next/image";
import Header from "../Header";

function Hero() {
  return (
    <div className="relative w-full h-[760px] text-primary">
      <Image
        src="/hero.png"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10 opacity-90 blur-[2px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <div className="w-full h-full px-4 md:px-16 z-10">
        <Header />
        <div className="w-full h-[80%] flex items-center ">
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl font-semibold">
              Discover GC City by NADI
            </h1>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-normal italic">
              A Rare Gem in Phom Penh
            </h1>
            <p className="text-sm md:text-base lg:text-xl italic w-[600px] lg:w-[900px]">
              A prestigious 34-hectare community in Chroy Changvar, blending
              modern elegance with lush greenery and flowing waterways.
              Experience iconic living in the heart of Phnom Penh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
