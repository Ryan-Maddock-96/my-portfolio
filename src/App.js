import { useState } from 'react';
import './App.scss';
import Navigation from './Components/Navigation';
import WelcomeHeader from './Components/WelcomeHeader';
import About from './Components/About';

function App() {
  const [menuOpen, openMenu] = useState();

  return (
    <div>
      <Navigation navOpen={menuOpen} openNavMenu={openMenu}/>
      <WelcomeHeader />
      <About/>
    </div>
  );
}

export default App;
