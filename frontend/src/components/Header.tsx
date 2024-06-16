import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              CV
            </NavLink>
          </li>
        </ul>
        {isAuthenticated && <Logout onLogout={onLogout} />}
      </nav>
    </header>
  );
};

export default Header;
