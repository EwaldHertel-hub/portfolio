"use client";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { useAppSelector } from "@/lib/store/hooks";

export default function Home() {
  const navItems = useAppSelector((state) => state.data.navbar);
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
