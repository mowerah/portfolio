import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="flex items-center justify-center py-12 mt-20 mb-14">
      <div className="bg-gray-800 rounded-lg shadow-lg p-60 w-full max-w-7xl mx-auto text-center">
        <h1 className="text-white text-4xl mb-8">Projects</h1>
        <ul className="space-y-4">
          <li className="text-white text-xl">Project 1: Description</li>
          <li className="text-white text-xl">Project 2: Description</li>
          <li className="text-white text-xl">Project 3: Description</li>
          <li className="text-white text-xl">Project 4: Description</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
