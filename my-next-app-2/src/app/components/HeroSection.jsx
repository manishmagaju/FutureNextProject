import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="py-12 md:py-14 bg-gradient-to-r from-primary/70 to-secondary/70">
      <div className="container mx-auto px-4">
        {/*text*/}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 mb-10">
            <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl">
              Welcome Back
            </h1>
            <p className="text-xl my-2 px-3 text-white">
              Always stay updated in your student portal
            </p>
          </div>
          {/*-image*/}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/photo.jpg"
              alt="not-found"
              height={400}
              width={400}
              className="h-auto w-1/2 md:w-2/4 rounded-xl shadow float-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
