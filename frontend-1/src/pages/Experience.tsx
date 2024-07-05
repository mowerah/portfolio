import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex items-center justify-center py-12 mt-20 mb-14"
    >
      <div className="flex flex-col items-center justify-center h-screen">
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
