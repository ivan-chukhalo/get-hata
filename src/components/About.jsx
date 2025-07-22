import { assets } from "../assets/assets";
import {motion} from "motion/react";

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, x: 200,}} // Initial animation properties
    whileInView={{opacity: 1, x: 0,}} // Fade in when the element enters the viewport:
    transition={{ duration: 1, ease: "easeInOut" }} 
    viewport={{ once: true }}  // It defines how the element is tracked within the viewport. In this case, animation will only happen once when the component is in view
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="decoration image"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            beatae modi ducimus? Alias deserunt, nemo debitis laboriosam non
            corrupti quas quibusdam minima a, consequatur mollitia veritatis
            maiores totam. Dolor, officiis. Nesciunt rerum illo libero
            provident, dolores fugiat, nulla amet culpa eos magni omnis laborum
            possimus eius excepturi officiis quos repellendus praesentium
            incidunt expedita. Mollitia repellendus omnis nam! Et, cupiditate
            consequatur?
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
