"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function Banner({title}) {
  return (
    <div className="h-[10rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-5xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
        {title}
      </h1>
    </div>
  );
}
