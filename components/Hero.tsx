import { FaLocationArrow } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <div className="pb-20 pt-36 relative">
            {/* Spotlight Effects */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            {/* Grid Background */}
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            {/* Main Content */}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Welcome to my portfolio
                    </p>

                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Shubham, a Full Stack Web Developer based
                        in India.
                    </p>

                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                <button
                    onClick={scrollToContent}
                    className="group relative flex flex-col items-center justify-center"
                    aria-label="Scroll to content"
                >
                    {/* Animated circle */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm">
                        {/* Animated chevron */}
                        <FaChevronDown className="text-white text-lg group-hover:text-purple-300 transition-colors duration-300 animate-bounce" />
                    </div>

                    {/* Subtle text */}
                    <span className="text-white/70 text-xs mt-2 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                    </span>

                    {/* Pulse animation effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping group-hover:animate-none"></div>
                </button>
            </div>

            {/* Optional: Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black-100 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Hero;
