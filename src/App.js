import { useState } from 'react';
import './App.scss';
import Navigation from './Components/Navigation';
import WelcomeHeader from './Components/WelcomeHeader';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [menuOpen, openMenu] = useState();

  return (
    <div>
      <Navigation navOpen={menuOpen} openNavMenu={openMenu}/>
      <WelcomeHeader />
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
