"use client";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import Residencies from "@/components/Residencies";
import Companies from "@/components/Companies";
import Value from "@/components/Value";
import Contact from "@/components/Contact";
import Start from "@/components/Start";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "linear",
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="absolute size-[20rem] md:size-[26rem] bg-white rounded-full blur-3xl -top-9 -left-9 opacity-40 z-20 pointer-events-none" />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Start />
      <Footer />
      <Toaster />
    </>
  );
}
