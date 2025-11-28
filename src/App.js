/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Project } from "./Pages/Project";
import { Skills } from "./Pages/Skills";
import GithubStats from "./component/GithubStats";
import AboutUs from "./Pages/AboutUs";
import NavBar2 from "./component/NaBar2";
import Contact2 from "./Pages/Contact2";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <NavBar2 />
      <Home/>
      <AboutUs />
      <Skills />
      <Project />
      <GithubStats />
      <Contact2 />
      <Footer />
    </div>
  );
}

export default App;
