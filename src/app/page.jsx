import FeaturedBooks from "@/components/FeaturedBooks";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import React from "react";


export default function Home() {
  return (
    <>
    <div className="">
      <Hero></Hero>
      <FeaturedBooks></FeaturedBooks>
      <Features></Features>
      <Reviews></Reviews>
    </div>
    </>
  );
}