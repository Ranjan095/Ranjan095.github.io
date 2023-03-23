/** @format */
import styled from 'styled-components';
import "./navBar.css";

import React from "react";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
  return (
    <Div id="nav-menu" >
      <h1 style={{ paddingBottom: "50px", fontFamily: "cursive" }}>Ranjan</h1>
      <a id='st' href="#home"> Home</a>  
      <a id='st' href="#about">About</a>  
      <a id='st' href="#skills">Skills</a>
      <a id='st' href="#project">Project</a>
      <a id='st' href="#contact">Contact</a>
      
      <button  id='myid' className="nav-link.resume my"  >Resume <i class="fa fa-download" aria-hidden="true"></i></button>
    </Div>

// style={{padding:'10px',borderRadius:'20px',background:'green',color:'white',border:'none',hover:{background:'red'}}}
  );
};
const Div = styled.div`
background-color:#C8E6C9;


.my{
  background-color: green;
 padding: 10px;
 border-radius: 20px;
 width: 100px;
 border: none;
 color: white;
 
}
.my:hover{
  background-color:#00E676;
  color: white;
  cursor: pointer;
  font-size:16px;
}
`

