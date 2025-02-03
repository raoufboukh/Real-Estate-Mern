"use client";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import Context from "@/components/context";
import Residencies from "@/components/Residencies";
import Companies from "@/components/Companies";
import Value from "@/components/value";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "linear",
    });
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
        <div className="absolute size-[20rem] md:size-[26rem] bg-white rounded-full blur-3xl -top-9 -left-9 opacity-40 z-20 pointer-events-none" />
        <Hero />
      </div>
      <Companies />
      <Context>
        <Residencies />
      </Context>
      <Value />
      <Contact />
    </>
  );
}
