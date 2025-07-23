import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="header"
    >
      <Navbar />
      <motion.div
        initial={{opacity: 0, y: 100,}} // Initial animation properties
        whileInView={{opacity: 1, y: 0,}} // Fade in when the element enters the viewport:
        transition={{ duration: 1, ease: "easeInOut" }} 
        viewport={{ once: true }}  // It defines how the element is tracked within the viewport. In this case, animation will only happen once when the component is in view
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a href="#contact" className="bg-blue-500 px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
