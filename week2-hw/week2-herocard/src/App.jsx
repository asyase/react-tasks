import React from "react";
import HeroCard from "./Components/HeroCard";
import hero1 from "./assets/hero1.webp";
import hero2 from "./assets/hero2.jpg";

function App() {
  return (
    <div className="app">
      <h1>Heroes</h1>
      <div className="hero-list">
        <HeroCard
          name="Superman"
          image={hero1}
          power="Superpower, flight"
          description="Powerful hero, defender of humanity."
        />
        
        <HeroCard
          name="Batman"
          image={hero2}
          power="High intelligence, fighting skills"
          description="The Dark Knight guards Gotham."
        />
      </div>
    </div>
  );
}

export default App;
