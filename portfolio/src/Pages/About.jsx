/** @format */

import React from "react";

export const About = () => {
  return (
    <div id="about" style={{ height: "650px" }}>
      <h1>About Me</h1>
      <p style={{fontSize:'20px'}}>
        Hello! My name is Ranjan Yadav, I enjoy creating things that live on the
        internet. My interest in web development started back last year when I
        was trying to edit things on the web - taught me a lot about HTML &
        CSS!. Fast forwarding to today, I built a number of web applications and
        3 Major projects. Learned a great deal about teamwork, leadership and
        communication. After months of rigorous training, here I am looking for
        an opportunity as a full stack web developer.
      </p>
      <ul style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',justifyContent:'space-evenly'}}>
        <a style={{textDecoration:'none'}} target='_blank' href="https://ranjan095.github.io/"><li>Ranjan yadav</li></a>
        <a target={'_blank'} href="https://mail.google.com/mail/u/0/#inbox?compose=new" style={{textDecoration:'none'}}><li>iranjan095@gmail.com</li></a>
        <a style={{textDecoration:'none'}} target='_blank' href="https://web.whatsapp.com/"><li>7079062877</li></a>
        <a style={{textDecoration:'none'}} href="https://madhubani.nic.in/hi/" target='_blank'><li>Madhubani Bihar</li></a>
      </ul>
    </div>
  );
};
