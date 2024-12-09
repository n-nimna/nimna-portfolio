// Footer.jsx
import React from 'react';
import { FaLinkedin, FaBehance, FaDribbble, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8 mt-20">
      <div className="container mx-auto text-center">
        <p className="mb-2">©2024 Nimeshi Dilshara. All Rights Reserved.</p>
        
        <div className="counter-wrap ftco-animate d-flex mt-md-3">
  <ul className="social-icons list-unstyled flex justify-center space-x-4 mt-5">
    <li
      className="icon-circle"
      style={{
        backgroundColor: '#8762F6',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',  // Reduced sizes
        height: '40px',  // Reduced size
      }}
    >
      <a href="https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/" aria-label="LinkedIn">
        <FaLinkedin
          style={{
            fontSize: '20px',  // Reduced size
            color: '#fff',
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
        width: '40px',  // Reduced size
        height: '40px',  // Reduced size
      }}
    >
      <a href="https://www.behance.net/nimeshidilshara" aria-label="Behance">
        <FaBehance
          style={{
            fontSize: '20px',  // Reduced size
            color: '#fff',
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
        width: '40px',  // Reduced size
        height: '40px',  // Reduced size
      }}
    >
      <a href="https://dribbble.com/nimna7_" aria-label="Dribbble">
        <FaDribbble
          style={{
            fontSize: '20px',  // Reduced size
            color: '#fff',
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
        width: '40px',  // Reduced size
        height: '40px',  // Reduced size
      }}
    >
      <a href="https://github.com/n-nimna" aria-label="GitHub">
        <FaGithub
          style={{
            fontSize: '20px',  // Reduced size
            color: '#fff',
          }}
        />
      </a>
    </li>
  </ul>
</div>


      </div>
    </footer>
  );
};

export default Footer;
