import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="text-center">
        <h1 className="text-white text-4xl mb-8">Experience</h1>
        <ul className="space-y-4">
          <li className="text-white text-xl">Company A: Job Title (Year - Year)</li>
          <li className="text-white text-xl">Company B: Job Title (Year - Year)</li>
          <li className="text-white text-xl">Company C: Job Title (Year - Year)</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
