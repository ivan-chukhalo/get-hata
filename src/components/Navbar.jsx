import {assets} from '../assets/assets'

const Navbar = () => {
    return (
        <div className ="absolute top-0 left-0 w-full z-10
        flex items-center justify-between bg-transparent px-6 md:px-20 lg:px-32 py-4 gap-12
        "> 
            <img src={assets.logo} alt="logo"/>
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#" className='cursor-pointer hover:text-grey-400'>Home</a>
                <a href="#" className='cursor-pointer hover:text-grey-400'>About</a>
                <a href="#" className='cursor-pointer hover:text-grey-400'>Projects</a>
                <a href="#" className='cursor-pointer hover:text-grey-400'>Testimonials</a>
                <a href="#" className='cursor-pointer hover:text-grey-400'>Home</a>
                <a href="#" className='cursor-pointer hover:text-grey-400'>Home</a>
                <a href="#" className='cursor-pointer hover:text-grey-400'>Home</a>
                <a href="#" className='cursor-pointer hover:text-grey-400'>Home</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        </div>
    )
}

export default Navbar;