import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="flex items-center justify-center py-12 mt-20 mb-14">
      <div className="bg-gray-800 rounded-lg shadow-lg p-60 w-full max-w-7xl mx-auto text-center">
        <h1 className="text-white text-4xl mb-8">Experience</h1>
        <ul className="space-y-4">
          <li className="text-white text-xl">
            Company A: Job Title (Year - Year)
          </li>
          <li className="text-white text-xl">
            Company B: Job Title (Year - Year)
          </li>
          <li className="text-white text-xl">
            Company C: Job Title (Year - Year)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
