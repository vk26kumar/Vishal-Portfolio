import React from "react";
import { ContactInfo } from "../types";
import { GithubIcon, LinkedInIcon, EmailIcon } from "./icons/SocialIcons";
import { ArrowDownIcon } from "./icons/GenericIcons";
import Tilt from "react-parallax-tilt";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  contact: ContactInfo;
  profileImage: string;
  accentColor: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  tagline,
  contact,
  profileImage,
  accentColor,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 pt-20 overflow-hidden"
    >
      {/* Soft floating background shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl z-10">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-300">
          {/* Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className={`text-${accentColor}-400 drop-shadow-md`}>
                {name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0">
              {tagline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <a
                href="#contact"
                className={`inline-block bg-${accentColor}-500 hover:bg-${accentColor}-600 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition duration-300 hover:scale-105`}
              >
                Get in Touch
              </a>
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold py-3 px-8 rounded-xl shadow-md transition duration-300 hover:scale-105"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`text-slate-400 hover:text-${accentColor}-400 transition-colors`}
              >
                <LinkedInIcon className="h-7 w-7" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className={`text-slate-400 hover:text-${accentColor}-400 transition-colors`}
              >
                <EmailIcon className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={400}
              className="rounded-full"
            >
              <img
                src={profileImage}
                alt={name}
                className={`w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-${accentColor}-500 shadow-lg`}
              />
            </Tilt>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-${accentColor}-400 transition-colors animate-bounce`}
      >
        <ArrowDownIcon className="h-7 w-7" />
      </a>
    </section>
  );
};

export default Hero;
