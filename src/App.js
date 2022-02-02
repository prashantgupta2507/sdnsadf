import React from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import NavbarMain from './Components/NavbarMain';

function App() {
  return (
    <>
    <div className="App" style={{height:'90vh'}}>
      <NavbarMain/>
    </div>
    <About/>
    <Contact/>
    </>
  );
}

export default App;