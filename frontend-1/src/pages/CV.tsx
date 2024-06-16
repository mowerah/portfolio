import React from "react";

const CV = () => {
  return (
    <section
      id="cv"
      className="h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="text-center">
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
