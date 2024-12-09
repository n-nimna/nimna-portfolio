import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';

const Hero = () => {
  const settings = {
    dots: true, // Adds a navigation dots
    infinite: true, // Loops through slides
    speed: 1000, // Transition speed (1 second)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automaticallys transition slides
    autoplaySpeed: 1500, // Time between slides (2 seconds)
    fade: true, // Adds a fading animation
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '4px', width: '100%' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>{dots}</ul>
      </div>
    ), // Custom dots positioning
  };

  return (
    <section id="hero1"
      className="relative text-white h-[60vh] flex items-center justify-center">
      <style>
        {`
          /* Default styles for larger screens */
          #hero1 {
            margin-top: 200px;
            margin-bottom: -160px;
          }

          /* Adjust position for mobile screens only */
          @media (max-width: 768px) {
            #hero1 {
              margin-top: 100px; /* Move it up */
              margin-bottom: -50px; /* Adjust bottom margin */
            }
          }

          @media (max-width: 480px) {
            #hero1 {
              margin-top: 80px; /* Further adjustment for very small screens */
              margin-bottom: -120px;
            }
          }

          .slider-container {
            position: relative;
          }

          .slick-dots {
            bottom: 55px !important;
          }

          .slick-dots li {
            width: 15px; /* Increase dot width */
            height: 15px; /* Increase dot height */
            margin: 0 5px; /* Add space between dots */
          }

          .slick-dots li button:before {
            font-size: 0; /* Hide default font size */
            content: ''; /* Remove default content */
            display: block;
            width: 100%; /* Set width of dot */
            height: 100%; /* Set height of dot */
            border-radius: 50%; /* Make dots round */
            background: #ffffff; /* Default inactive dot color */
          }

          .slick-dots li.slick-active button:before {
            background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6); /* Apply gradient for active dot */
          }

          /* Responsive adjustments for mobile view */
          @media (max-width: 768px) {
            .slick-dots li {
              width: 10px; /* Smaller dots for mobile */
              height: 10px; /* Smaller dots for mobile */
            }

            .slick-dots {
              top: 190px !important; /* Adjust top for mobile */
            }
          }

          @media (max-width: 480px) {
            .slick-dots li {
              width: 12px; /* Even smaller dots for small screens */
              height: 12px;
            }

            .slick-dots {
              bottom: 10px !important; /* Adjust bottom even further */
            }
          }
        `}
      </style>

      <Slider {...settings} className="w-full relative">
        {/* First Slider Item */}
        <div className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute w-full h-full bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 text-center">
            <span className="block text-xl lg:text-2xl text-pink-300 font-semibold tracking-widest mb-4">
              Hello!
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-snug text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text">
              <span className="text-white">I'm </span>
              <span className="decoration-purple-300">Nimeshi Dilshara</span>
            </h1>
          </div>
        </div>

        {/* Second Slider Item */}
        <div className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute w-full h-full bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 text-center">
            <span className="block text-xl lg:text-2xl text-pink-300 font-semibold tracking-widest mb-4">
              Hello!
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-snug text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text">
              <span className="text-white">I'm </span>
              <span className="text-white">a </span>
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                UI/UX Designer
              </span>
              <br />
              <span className="text-white">and </span>
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                Web Designer
              </span>
            </h1>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
