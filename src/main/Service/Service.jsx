import React from "react";
import './Service.css';


const Service = () => {
  return (
    <div id="service"><br />
<div className="py-8">
  <div className="container mx-auto px-4">
  <h1 className="text-4xl font-bold text-center mb-20 text-white p-2">Services</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-20">
  <div className="service-card p-10 text-sm font-light rounded-lg">
  <i className="fa-solid fa-crop text-5xl mb-8"></i>
  <h2 className="text-2xl text-[#fff] font-medium mb-4">UI/UX Design</h2>
  <p className="mb-4">
    I focus on creating user-centered designs that are both functional
    and visually appealing.
  </p>
</div>
<div className="service-card p-10 text-sm font-light rounded-lg">
  <i className="fa-solid fa-code text-5xl mb-8"></i>
  <h2 className="text-2xl font-medium mb-4 text-[#fff]">Web Design</h2>
    <p className="mb-4 text-[#fff]">
      Crafting intuitive, modern, and user-friendly web designs with creativity.
    </p>
</div>

<div className="service-card p-10 text-sm font-light rounded-lg">
  <i className="fa-brands fa-app-store text-5xl mb-8"></i>
  <h2 className="text-2xl text-[#fff] font-medium mb-4">App Design</h2>
  <p className="mb-4 text-[#fff]">
    Designing engaging, functional, and visually appealing mobile app experiences.
    </p>
</div>
        </div>
      </div>
    </div></div>
  );
};

export default Service;
/*u*/