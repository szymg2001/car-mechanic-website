import Navbar from "./components/Navbar";
import "../src/css/app.css";
import HeroComponent from "./components/HeroComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import InfoComponent from "./components/InfoComponent";
import LocationComponent from "./components/LocationComponent";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
