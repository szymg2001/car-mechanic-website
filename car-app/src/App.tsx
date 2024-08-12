import React from "react";
import Navbar from "./components/Navbar";
import "../src/css/app.css";
import HeroComponent from "./components/HeroComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import InfoComponent from "./components/InfoComponent";
import LocationComponent from "./components/LocationComponent";
import Footer from "./components/Footer";
import AnimationComponent from "./components/AnimationComponent";

function App() {
  const locationRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className="app">
      <AnimationComponent />
      <div className="container">
        <Navbar />
        <hr />
        <HeroComponent
          callback={() =>
            locationRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <hr />
        <BenefitsComponent />
        <hr />
        <InfoComponent />
      </div>
      <div ref={locationRef}>
        <LocationComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
