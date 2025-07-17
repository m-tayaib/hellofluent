import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MeetCreator: React.FC = () => {
  return (
    <section className="md:p-16 p-8   flex justify-center items-center">
      <div className=" bg-gradient-to-r from-logo to-primary  rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center   w-full">
        <img
          src="/assets/creator_profile.png"
          alt="Creator"
          className="w-32 h-32 rounded-full object-cover  mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-white/60">Muhamad Tayyab </h2>
          <h3 className="text-lg text-white mb-4">Creator of HelloFluent</h3>
          <p className="text-white/70 mb-4">
            Welcome to HelloFluent! I'm Tayiab, and I created this app to make language learning engaging, interactive, and accessible for everyone. Here, you'll find tools and resources designed to help you practice, improve, and enjoy your language journey every day. Let's learn and grow together!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/m-tayaib"
              className="text-white hover:text-"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-tayaib/"
              className="text-white hover:text-"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tayyabdeveloper15@gmail.com"
              className="text-white hover:text-"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="w-6 h-6" />
            </a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCreator;
