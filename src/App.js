import "./App.css";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Hero from "./components/sections/Hero.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
