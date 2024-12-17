import React, { useState } from "react";
import "./Projects.css";
import flowerShopImage from "../../assets/UI_DESIGN/flowershop.png";
import YogaImage from "../../assets/UI_DESIGN/yogaclass.png";
import MedicalImage from "../../assets/UI_DESIGN/medical.png";
import LeisuImage from "../../assets/UI_DESIGN/lr.png";




const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("UI Designs");
  
    const projects = [

  /*    {
        id: 5,
        image: MedicalImage,
        title: "Website Design Medical Center",
        category: "UI Designs",
        links: [
          {
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/posts/example",
          },
          {
            icon: "fab fa-behance",
            url: "https://www.behance.net/example",
          },
          {
            icon: "fab fa-dribbble",
            url: "",
          },
        ],
      },*/

     {
          id: 4,
            image: LeisuImage,
            title: "Redesign Design Leisure World Website",
            category: "UI Designs",
            links: [
              {
                icon: "fab fa-linkedin",
                url: "https://www.linkedin.com/posts/example",
              },
              {
                icon: "fab fa-behance",
                url: "https://www.behance.net/gallery/212455075/LeisureWorld-Redesign-Website",
              },
              {
                icon: "fab fa-dribbble",
                url: "",
              },
            ],
          },

      {
        id: 3,
        image: MedicalImage,
        title: "Website Design Medical Center",
        category: "UI Designs",
        links: [
          {
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/posts/example",
          },
          {
            icon: "fab fa-behance",
            url: "https://www.behance.net/gallery/208523379/Beauty-Clinic-Website-Design",
          },
          {
            icon: "fab fa-dribbble",
            url: "",
          },
        ],
      },

      {
        id: 2,
        image: YogaImage,
        title: "Website Design Yoga Institute ",
        subtitle: "",
        category: "UI Designs", // Add category to project
        links: [
          {
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uxdesign-uidesign-webdesign-activity-7224998346023714816-npQq?utm_source=share&utm_medium=member_desktop",
          },
          {
            icon: "fab fa-behance",
            url: "https://www.behance.net/gallery/208132257/Yoga-Studio-Website-Design",
          },
          {
            icon: "fab fa-dribbble",
            url: "",
          },
        ],
      },

      {
        id: 1,
        image: flowerShopImage,
        title: "Website Design Flower Shop",
        subtitle: "",
        category: "UI Designs", // Add a category to project
        links: [
          {
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uxdesign-uidesign-webdesign-activity-7221179796414734336-VA59?utm_source=share&utm_medium=member_desktop",
          },
          {
            icon: "fab fa-behance",
            url: "https://www.behance.net/gallery/208526013/Flower-Shop-Website-Design",
          },
          {
            icon: "fab fa-dribbble",
            url: "",
          },
        ],
      },


      // ... other projects
    ];
  
    return (
      <section id="project" className="bg-black p-5 md:p-[20px]">
      <br /><br /><br /><br /><br />
      {/* Header Section */}
      <div className="text-center mb-5 md:mb-[20px]">
        <h1 className="text-4xl font-bold text-center mb-20 text-white p-2">My Projects</h1>
        {/* Navigations */}
        <div className="flex justify-center flex-wrap gap-6 mt-8 text-white">
          {["UI Designs", "Web Development"].map((category) => (
            <span
              key={category}
              className={`cursor-pointer pb-2 text-base md:text-lg lg:text-xl relative
                ${activeCategory === category ? 'font-bold' : ''}
                hover:text-white transition-colors duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-sm" />
              )}
            </span>
          ))}
        </div>
      </div>
      <br />
    
      {/* Projects Grid */}
      <div className="mx-auto px-8 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
        {projects
          .filter((project) => project.category === activeCategory)
          .map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px]"
              onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
            >
              {/* Project Image */}
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
    
              {/* Overlay */}
              <div className={`absolute inset-0 bg-[rgba(50,0,90,0.7)] backdrop-blur-sm flex flex-col justify-center items-center
                transition-opacity duration-300
                ${activeProject === project.id ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-medium text-white mb-5">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <span className="text-sm md:text-base text-white/80 mb-5">
                    {project.subtitle}
                  </span>
                )}
    
                {/* Social Iconss */}
                <div className="flex justify-center gap-4">
                  {project.links.map((link, index) => (
                    link.url && (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[50px] h-[50px] md:w-[40px] md:h-[40px] bg-white/20 rounded-full
                          flex items-center justify-center transition-all duration-300
                          hover:bg-white/40 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className={`${link.icon} text-base md:text-lg text-white
                          group-hover:text-black transition-colors duration-300`}
                        />
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
    

    );
  };
  
  export default Projects;