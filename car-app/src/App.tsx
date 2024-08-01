import Navbar from "./components/Navbar";
import "../src/css/app.css";
import HeroComponent from "./components/HeroComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import InfoComponent from "./components/InfoComponent";
import LocationComponent from "./components/LocationComponent";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <hr />
        <HeroComponent />
        <hr />
        <BenefitsComponent />
        <hr />
        <InfoComponent />
      </div>
      <LocationComponent />
    </div>
  );
}

export default App;
