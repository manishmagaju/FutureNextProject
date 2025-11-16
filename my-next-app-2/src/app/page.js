import React from "react";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Link from "next/link";
import { MYCOURSES_ROUTE } from "./constants/routes";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Link href={`${MYCOURSES_ROUTE}`}>
        <Card />
      </Link>
    </div>
  );
};

export default page;
