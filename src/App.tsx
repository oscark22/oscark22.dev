import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="relative z-0">
      <div className="relative w-full h-screen mx-auto bg-[#030D1F] bg-wave-pattern bg-cover bg-no-repeat bg-centers">
        <Navbar />
        <Home />
      </div>
      <Aboutme />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
