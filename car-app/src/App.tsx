import Navbar from "./components/Navbar";
import "../src/css/app.css";
import HeroComponent from "./components/HeroComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import InfoComponent from "./components/InfoComponent";

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      <HeroComponent />
      <hr />
      <BenefitsComponent />
      <hr />
      <InfoComponent />
    </div>
  );
}

export default App;
