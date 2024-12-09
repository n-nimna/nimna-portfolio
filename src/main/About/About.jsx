import React from 'react';
import img1 from '../../assets/pic3.png';
import { FaDownload, FaLinkedin, FaBehance, FaDribbble, FaGithub } from 'react-icons/fa';

import './About.css';

function About() {
  return (
    <section
      id="about"
      className="bg-transparent text-white flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen p-8 lg:p-16 mt-6"
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/3 lg:h-130 overflow-hidden rounded-lg shadow-lg mr-5 mb-6 lg:mb-0">
        <img
          src={img1}
          alt="Undergraduate Student Hero Section"
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Text Sectioon */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6">
        <br />
        <p className="text-lg lg:text-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
          Undergraduate at NSBM Green University<br />
        </p>
        <p className="text-sm lg:text-lg bg-gray-900 bg-opacity-60 backdrop-blur-md p-4 rounded-lg shadow-md">
          I am a dedicated undergraduate student with a passion for UX/UI design and web development. My focus is on blending
          creativity with functionality to build seamless and engaging user interfaces. With a strong attention to detail and a
          commitment to user-centered design, I have completed various design projects and personal coding endeavors. Continuously
          learning and adapting to the evolving digital landscape, I strive to create innovative, user-friendly solutions that
          improve the overall user experience.
        </p>

        {/* Social Media Icons */}
        <div className="counter-wrap ftco-animate d-flex mt-md-3">
          <ul className="social-icons list-unstyled float-md-left mt-5 flex space-x-4 justify-center lg:justify-start">
            <li
              className="icon-circle"
              style={{
                backgroundColor: '#8762F6',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '45px',
                height: '45px',
              }}
            >
              <a href="https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/" aria-label="LinkedIn">
                <FaLinkedin
                  style={{
                    fontSize: '24px',
                    color: '#fff',  // Changed to solid white color
                  }}
                />
              </a>
            </li>
            <li
              className="icon-circle"
              style={{
                backgroundColor: '#8762F6',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '45px',
                height: '45px',
              }}
            >
              <a href="https://www.behance.net/nimeshidilshara" aria-label="Behance">
                <FaBehance
                  style={{
                    fontSize: '24px',
                    color: '#fff',  // Changed to solid white color
                  }}
                />
              </a>
            </li>
            <li
              className="icon-circle"
              style={{
                backgroundColor: '#8762F6',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '45px',
                height: '45px',
              }}
            >
              <a href="https://dribbble.com/nimna7_" aria-label="Dribbble">
                <FaDribbble
                  style={{
                    fontSize: '24px',
                    color: '#fff',  // Changed to solid white color
                  }}
                />
              </a>
            </li>
            <li
              className="icon-circle"
              style={{
                backgroundColor: '#8762F6',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '45px',
                height: '45px',
              }}
            >
              <a href="https://github.com/n-nimna" aria-label="GitHub">
                <FaGithub
                  style={{
                    fontSize: '24px',
                    color: '#fff',  // Changed to solid white color
                  }}
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Download yr CV Button */}
        <div className="md:flex items-center justify-center mt-6">
  <a
    href="/path-to-cv.pdf"
    aria-label="Download CV"
    download="Nimeshi_Dilshara_CV.pdf"
    className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
  >
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
      <FaDownload className="mr-2" />
      Download CV
    </span>
  </a>
</div>

      </div>
    </section>
  );
}

export default About;