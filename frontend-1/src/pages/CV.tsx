import React from "react";

const CV = () => {
  return (
    <section id="cv" className="flex items-center justify-center py-12 mt-20 mb-0">
      <div className="bg-gray-800 rounded-lg shadow-lg p-60 w-full max-w-7xl mx-auto text-center">
        <h1 className="text-white text-4xl mb-8">Curriculum Vitae</h1>
        <p className="text-white text-xl">
          Download my CV:{" "}
          <a href="/path-to-your-cv.pdf" className="text-blue-500 underline">
            Click Here
          </a>
        </p>
      </div>
    </section>
  );
};

export default CV;
