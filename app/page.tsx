"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import dynamic from "next/dynamic";

// Dynamically import Grid with SSR disabled
const Grid = dynamic(() => import("@/components/Grid"), {
    ssr: false,
    loading: () => (
        <section id="about" className="w-full py-20">
            <div className="min-h-[400px] flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        </section>
    ),
});

const Home = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <Hero />
                <Grid />
                <RecentProjects />
                <Clients />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </main>
    );
};

export default Home;
