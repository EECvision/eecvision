"use client";

import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}
