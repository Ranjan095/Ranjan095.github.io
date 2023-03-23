/** @format */

import logo from "./logo.svg";
import "./App.css";
import { SideBar } from "./Compnonte/SideBar";
import { HomePage } from "./Pages/HomePage";
import { About } from "./Pages/About";
import { Project } from "./Pages/Project";
import { Skills } from "./Pages/Skills";
import { Conact } from "./Pages/Conact";

function App() {
  return (
    <div className="App" style={{display:'flex'}}>
      <div style={{position: "fixed",}}>
        <SideBar />
      </div>
      <div  style={{width:'70%', marginLeft:'280px'}}>
        <HomePage/>
        <About/>
        <Skills/>
        <Project/>
        <Conact/>
      </div>
    </div>
  );
}

export default App;
