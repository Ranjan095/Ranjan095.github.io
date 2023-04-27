import logo from './logo.svg';
import './App.css';
import {NevBar} from "./component/NevBar"
import { About } from './Pages/About';
import { HomePage } from './Pages/HomePage';
import { Project } from './Pages/Project';
import { Skills } from './Pages/Skills';
import { Contact } from './Pages/Contact'

function App() {
  return (
    <div className='App' >
      <NevBar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
