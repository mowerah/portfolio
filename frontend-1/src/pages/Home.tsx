import React from "react";
import { Link as ScrollLink } from "react-scroll";
import profileImage from "../assets/profile.jpeg"; // Import profile image

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen flex items-center justify-center"
        style={{
          backgroundColor: "crimson",
          margin: "90px",
          border: "1px solid #ccc",
        }}
      >
        <div className="text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-4xl">Home Page</h1>
          <p className="text-xl mt-2">Software Engineer</p>
        </div>
      </section>
      <section
        id="profile"
        className="h-screen flex items-center justify-center"
        style={{
          backgroundColor: "crimson",
          margin: "90px",
          border: "1px solid #ccc",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl">Profile</h1>
          <p className="text-xl mt-2">John Doe</p>
          <p className="text-xl mt-2">Software Engineer</p>
        </div>
      </section>
      <section
        id="projects"
        className="h-screen flex items-center justify-center"
        style={{
          backgroundColor: "crimson",
          margin: "90px",
          border: "1px solid #ccc",
        }}
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
      <section
        id="experience"
        className="h-screen flex items-center justify-center"
        style={{
          backgroundColor: "crimson",
          margin: "90px",
          border: "1px solid #ccc",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl mb-8">Experience</h1>
          <ul className="space-y-4">
            <li className="text-xl">Company A: Job Title (Year - Year)</li>
            <li className="text-xl">Company B: Job Title (Year - Year)</li>
            <li className="text-xl">Company C: Job Title (Year - Year)</li>
          </ul>
        </div>
      </section>
      <section
        id="cv"
        className="h-screen flex items-center justify-center"
        style={{
          backgroundColor: "crimson",
          margin: "90px",
          border: "1px solid #ccc",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl mb-8">Curriculum Vitae</h1>
          <p className="text-xl">
            Download my CV:{" "}
            <a href="/path-to-your-cv.pdf" className="text-blue-500 underline">
              Click Here
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
