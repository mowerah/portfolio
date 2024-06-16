import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="text-center">
        <h1 className="text-4xl mb-8">Projects</h1>
        <ul className="space-y-4">
          <li className="text-xl">Project 1: Description</li>
          <li className="text-xl">Project 2: Description</li>
          <li className="text-xl">Project 3: Description</li>
          <li className="text-xl">Project 4: Description</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
