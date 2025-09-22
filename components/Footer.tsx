import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
      <footer className="w-full pt-20 pb-10" id="contact">
          {/* background grid */}
          <div className="w-full absolute left-0 -bottom-72 min-h-96">
              <img
                  src="/footer-grid.svg"
                  alt="grid"
                  className="w-full h-full opacity-50 "
              />
          </div>

          <div className="flex flex-col items-center">
              <h1 className="heading lg:max-w-[45vw]">
                  Ready to solve{" "}
                  <span className="text-purple">complex challenges</span> with
                  elegant code?
              </h1>
              <p className="text-white-200 md:mt-10 my-5 text-center">
                  Let's discuss how strong software engineering principles can
                  transform your technical roadmap.
              </p>
              <a href="rawanshubham@gmail.com">
                  <MagicButton
                      title="Let's get in touch"
                      icon={<FaLocationArrow />}
                      position="right"
                  />
              </a>
          </div>
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
              <p className="md:text-base text-sm md:font-normal font-light">
                  Thanks for visiting
              </p>

              <div className="flex items-center md:gap-3 gap-6">
                  {socialMedia.map((info) => (
                      <a
                          key={info.id}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit my ${info.name} profile`}
                          className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-200 hover:scale-110 hover:border-purple-400"
                      >
                          <img
                              src={info.img}
                              alt=""
                              width={20}
                              height={20}
                              className="filter brightness-0 invert"
                          />
                      </a>
                  ))}
              </div>
          </div>
      </footer>
  );
};

export default Footer;
