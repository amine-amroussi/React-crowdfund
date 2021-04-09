import React from "react"
import HeroImage from "./components/HeroImage"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  return (
    <div className="hero" >
      <HeroImage />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
