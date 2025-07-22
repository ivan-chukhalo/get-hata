import {useEffect, useState} from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react"; // Importing motion for animations

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(()=> {
    const updateCardsToShow = () => {
      if(window.innerWidth >= 1024){
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      };
    }
    updateCardsToShow(); // Initial call to set the correct number of cards
    window.addEventListener("resize", updateCardsToShow); // Update on resize
    return () => {
      window.removeEventListener("resize", updateCardsToShow); // Cleanup listener on unmount
    };
  }, [])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length); {/* cool solution */}
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{opacity: 0, x: -200,}} // Initial animation properties
      whileInView={{opacity: 1, x: 0,}} // Fade in when the element enters the viewport:
      transition={{ duration: 1, ease: "easeInOut" }} 
      viewport={{ once: true }}  // It defines how the element is tracked within the viewport. In this case, animation will only happen once when the component is in view
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
      {/* SLIDER BUTTONS */}
      <div className="flex items-center mb-8 justify-end">
        {/* aria-label provides an accessible name for screen readers. Useful when there's no visible text (e.g. icon buttons). */}
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300 mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300 mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* SLIDER CONTAINER */}
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-300 ease-in-out"
          style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span> - </span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
