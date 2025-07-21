import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/> 
      {/* Remember to render the ToastContainer once in your application tree. */}
      {/* If you can't figure out where to put it, rendering it in the application root would be the best bet. */}
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
    </div>
  );
};

export default App;
