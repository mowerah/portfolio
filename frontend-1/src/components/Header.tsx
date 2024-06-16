import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const profileSection = document.getElementById("profile");
      const projectsSection = document.getElementById("projects");
      const experienceSection = document.getElementById("experience");
      const cvSection = document.getElementById("cv");

      const scrollPosition = window.scrollY + 150;

      if (cvSection && scrollPosition >= cvSection.offsetTop) {
        setActiveSection("cv");
      } else if (
        experienceSection &&
        scrollPosition >= experienceSection.offsetTop
      ) {
        setActiveSection("experience");
      } else if (
        projectsSection &&
        scrollPosition >= projectsSection.offsetTop
      ) {
        setActiveSection("projects");
      } else if (profileSection && scrollPosition >= profileSection.offsetTop) {
        setActiveSection("profile");
      } else if (homeSection && scrollPosition >= homeSection.offsetTop) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-50 ${
        activeSection !== "home" ? "bg-gray-800 bg-opacity-75" : ""
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <ScrollLink
            to="home"
            smooth={true}
            offset={-70}
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="profile"
            smooth={true}
            offset={-70}
            className={`nav-link ${
              activeSection === "profile" ? "active" : ""
            }`}
          >
            Profile
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            offset={-70}
            className={`nav-link ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            offset={-70}
            className={`nav-link ${
              activeSection === "experience" ? "active" : ""
            }`}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="cv"
            smooth={true}
            offset={-70}
            className={`nav-link ${activeSection === "cv" ? "active" : ""}`}
          >
            CV
          </ScrollLink>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded text-white"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
