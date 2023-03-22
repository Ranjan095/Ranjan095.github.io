/** @format */

import React from "react";
import { NavBar } from "../Compnonte/SideBar";

export const HomePage = () => {
  return (
    <div style={{ marginLeft: "20px" ,display:'flex',height:'1000px'}}>
      <div>
      <h1>Hello my name is</h1>
      <h1 id="user-detail-name" style={{ fontFamily: "cursive", color: "red" }}>Ranjan Yadav</h1>
      <h1>I'm a full stack web developer</h1>
      <p id="user-detail-intro">
        Passionate Full Stack Web Developer with a specialization in MERN stack.
        Skilled, collaborative and attentive developer with a drive to develop
        the most relevant products. Always looking forward to learning something
        new to strengthen skills learned.
      </p>
      </div>
      <div style={{width:'800px'}}>
        <img style={{width:'100%',marginTop:'100px',borderRadius:'200px'}} src='https://avatars.githubusercontent.com/u/113471389?v=4' alt="" />
        
      </div>
    </div>
  );
};
