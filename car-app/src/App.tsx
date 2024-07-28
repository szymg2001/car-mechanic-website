import Navbar from "./components/Navbar";
import "../src/css/app.css";
import HeroComponent from "./components/HeroComponent";

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      <HeroComponent />
      <hr />
    </div>
  );
}

export default App;
