import React from "react";
import { Link as ScrollLink } from "react-scroll";
import profileImage from "../assets/profile.jpeg"; // Import profile image
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component
import Profile from "./Profile";
import Projects from "./Projects";
import Experience from "./Experience";
import CV from "./CV";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <main className="flex-grow mt-14"> */}
      <section
        id="home"
        className="flex items-center justify-center py-12 mt-20 mb-14"
      >
        <div className="bg-gray-800 rounded-lg shadow-lg p-60 w-full max-w-7xl mx-auto text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-white text-4xl">Home Page</h1>
          <p className="text-white text-xl mt-2">Software Engineer</p>
        </div>
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <CV />
      </section>
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default Home;
