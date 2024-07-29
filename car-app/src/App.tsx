import Navbar from "./components/Navbar";
import "../src/css/app.css";
import HeroComponent from "./components/HeroComponent";
import BenefitsComponent from "./components/BenefitsComponent";

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      <HeroComponent />
      <hr />
      <BenefitsComponent />
    </div>
  );
}

export default App;
