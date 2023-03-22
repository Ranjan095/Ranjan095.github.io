/** @format */

import "./navBar.css";

import React from "react";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
  return (
    <div id="nav-menu">
      <h1 style={{ paddingBottom: "50px", fontFamily: "cursive" }}>Ranjan</h1>
      <NavLink id="st" className="nav-link home" to="/">
        Home
      </NavLink>
      <NavLink   id="st" className="nav-link about" to='about'>
        About
      </NavLink>
      <NavLink id="st" className="nav-link skills" to="skills">
        Skills
      </NavLink>
      <NavLink id="st" className="nav-link projects" to="projects">
        Projects
      </NavLink>
      <NavLink id="st" className="nav-link contact" to="contact">
        Contact
      </NavLink>
    </div>
  );
};
