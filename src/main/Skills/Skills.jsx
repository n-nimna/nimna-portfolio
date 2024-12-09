import React from 'react';

// Import imageses
import javaIcon from '../../assets/Tech_Icon/java.png';
import nodejsIcon from '../../assets/Tech_Icon/nodejs.png';
import reactIcon from '../../assets/Tech_Icon/react.png';
import cssIcon from '../../assets/Tech_Icon/css.png';
import htmlIcon from '../../assets/Tech_Icon/html.png';
import jsIcon from '../../assets/Tech_Icon/js.png';
import phpIcon from '../../assets/Tech_Icon/php.png';
import mongodbIcon from '../../assets/Tech_Icon/mongodb.png';
import gitHubIcon from '../../assets/Tech_Icon/github.png';
import ms365Icon from '../../assets/Tech_Icon/ms365.png';
import figmaIcon from '../../assets/Tech_Icon/figma.png';
import photoshopIcon from '../../assets/Tech_Icon/photoshop3.png';

const technicalSkills = [
  { name: "Java", icon: javaIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "PHP", icon: phpIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Photoshop", icon: photoshopIcon },
  { name: "Microsoft 365", icon: ms365Icon },
  { name: "GitHub", icon: gitHubIcon }
];

function Skills() {
  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add('scale-105', 'shadow-lg');
    e.currentTarget.querySelector('img').classList.add('scale-110');
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove('scale-105', 'shadow-lg');
    e.currentTarget.querySelector('img').classList.remove('scale-110');
  };

  return (
    <section id="skills" className="mt-24 p-4 max-w-7xl mx-auto"> {/* Reduced margin-top */}
   <br /><br />   <h1 className="text-4xl font-bold text-center text-white p-2 mb-10">
        My Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:bg-gray-800/30"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-image w-16 h-16 object-contain mb-2 transition-transform duration-300 ease-in-out"
            />
            <p className="text-white text-sm font-semibold text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
