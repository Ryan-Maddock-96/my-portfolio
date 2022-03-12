import { useState } from 'react';
import './App.scss';
import Navigation from './Components/Navigation';
import WelcomeHeader from './Components/WelcomeHeader';

function App() {
  const [menuOpen, openMenu] = useState();

  return (
    <div>
      <Navigation navOpen={menuOpen} openNavMenu={openMenu}/>
      <WelcomeHeader />
    </div>

  );
}

export default App;
