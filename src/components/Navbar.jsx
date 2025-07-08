import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if(showMobileMenu) 
      {document.body.style.overflow = "hidden"} 
    else 
      {document.body.style.overflow = "auto"} 
    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts (NEW FOR ME)
    }}, 
    [showMobileMenu]
  )

  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-between bg-transparent px-6 md:px-20 lg:px-32 py-4 gap-12">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
        <img src={assets.menu_icon} className={`${showMobileMenu ? "hidden" : "md:hidden"} w-7 cursor-pointer`} alt="menu" onClick={() => setShowMobileMenu(true)}/>
      </div>
      {/* mobile menu */}
      <div className={`${showMobileMenu ? "fixed w-full" : "w-0 h-0"}  right-0 top-0 bottom-0 overflow-hidden transition-all z-11 bg-white`}> 
        <div className="flex justify-end p-6 cursor-pointer" onClick = {() => setShowMobileMenu(false)}> {/* CLOSE ICON*/}
          <img src={assets.cross_icon} alt="close mobile menu" className="w-6"/>
        </div>
        <ul className="flex flex-col items-center justify-center gap-2 mt-5 px-5 text-lg font-medium">
          <a href="#header" className="px-4 py-2 rounded-full inline-block" onClick = {() => setShowMobileMenu(false)} >Home</a>
          <a href="#about" className="px-4 py-2 rounded-full inline-block" onClick = {() => setShowMobileMenu(false)} >About</a>
          <a href="#projects" className="px-4 py-2 rounded-full inline-block" onClick = {() => setShowMobileMenu(false)} >Projects</a>
          <a href="#testimonials" className="px-4 py-2 rounded-full inline-block" onClick = {() => setShowMobileMenu(false)} >Testimonails</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
