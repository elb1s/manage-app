import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonails from "./components/Testimonails";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <Hero />
        <About />
        <Testimonails />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
