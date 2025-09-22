"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
    const skills = [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "TypeScript", icon: "📘", level: 85 },
        { name: "JavaScript", icon: "📜", level: 95 },
        { name: "C++", icon: "", level: 95 },
        { name: "Next.js", icon: "⏭️", level: 88 },
        { name: "Node.js", icon: "🟢", level: 82 },
        { name: "CSS", icon: "🎨", level: 93 },
        { name: "Tailwind CSS", icon: "💨", level: 91 },
        { name: "HTML", icon: "🌐", level: 96 },
        { name: "Git", icon: "📦", level: 87 },
        { name: "REST APIs", icon: "🔗", level: 84 },
        { name: "Java", icon: "☕", level: 88 },
        { name: "Spring Boot", icon: "🌱", level: 85 },
        { name: "PostgreSQL", icon: "🐘", level: 83 },
        { name: "MongoDB", icon: "🍃", level: 79 },
        { name: "Express", icon: "🚂", level: 81 },
        { name: "Redux", icon: "🗃️", level: 86 },
    ];
  // this is skill section:--
    return (
        <section id="testimonials" className="py-20 bg-black">
            <div className="flex flex-col items-center max-lg:mt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-center mt-16 mb-10 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-white">
                    Skills I'm Comfortable With
                </h2>

                <div className="w-full max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="relative group bg-gradient-to-br from-gray-900 to-purple-900/30 backdrop-blur-sm rounded-xl p-4 border border-purple-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-float"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationDuration: "6s",
                                }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-2xl mb-2">
                                        {skill.icon}
                                    </div>
                                    <h3 className="font-semibold text-white text-sm md:text-base">
                                        {skill.name}
                                    </h3>
                                    <div className="w-full bg-gray-800 rounded-full h-3 mt-3 relative overflow-hidden">
                                        <div
                                            className="h-3 rounded-full relative"
                                            style={{ width: `${skill.level}%` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>

                                            <div className="absolute top-0.5 right-1 w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
                                        </div>

                                    </div>
                                    <span className="text-xs text-gray-300 mt-1">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Clients;
