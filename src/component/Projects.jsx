import React from 'react'
import P1 from '../assets/P1.png'
import P2 from '../assets/P2.png'
import P3 from '../assets/P3.png'
import P4 from '../assets/P4.png'
import P5 from '../assets/P5.png'
import P6 from '../assets/P6.png'

const projects = [
    {
      id: 1,
      name: "Event Management Tool",
      technologies: "MERN Stack",
      image: P1,
      github: "https://github.com/harishraajaa/Capstone-1/tree/frontend",
      depurl:"https://harishevents.netlify.app"
    },
    {
      id: 2,
      name: "Blog App",
      technologies: "MERN Stack",
      image: P2,
      github: "https://github.com/harishraajaa/FSD-Demo/tree/frontend",
      depurl:"https://harishblogs.netlify.app"
    },
    {
      id: 3,
      name: "Landing Page",
      technologies: "React",
      image: P3,
      github: "https://github.com/harishraajaa/Day-22/tree/landingpage?tab=readme-ov-file",
      depurl:"https://home-harishcorp.netlify.app"
    },
    {
      id: 4,
      name: "Recipe App",
      technologies: "MERN Stack",
      image: P4,
      github: "https://github.com/harishraajaa/Day-38/tree/master",
      depurl:"https://harishfoods.netlify.app"
    },
    {
      id: 5,
      name: "UMS App",
      technologies: "MERN Stack",
      image: P5,
      github: "https://github.com/harishraajaa/Day-27/tree/axios-crud",
      depurl:"https://axioscrud-harishcorp.netlify.app"
    },
    {
      id: 6,
      name: "To-Do App",
      technologies: "React",
      image: P6,
      github: "https://github.com/harishraajaa/Day-23/tree/react-todo",
      depurl:"https://todo-harishcorp.netlify.app/"
    },
  ];


function Projects() {
  return <>
  <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.depurl} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">App Link</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}

export default Projects