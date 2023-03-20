/** @format */

import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Compnonte/NavBar";
import { MainRoute } from "./Compnonte/MainRoute";

function App() {
  return (
    <div className="App" style={{display:'flex',gap:'3px'}}>
      <div>
        <NavBar />
      </div>
      <div style={{width:'70p%'}}>
        <MainRoute />
      </div>
    </div>
  );
}

export default App;
