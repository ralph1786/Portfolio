import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navigation-container">
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={50}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
