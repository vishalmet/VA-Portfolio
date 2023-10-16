import React from 'react';
import HomeBG from '../assets/homebg2.png';
import NavBar from './navbar';
import X from '../assets/x.png';
import LinkedIn from '../assets/linkedin.png';
import GitHub from '../assets/github.png';
import YT from '../assets/yt.png';
import ME from '../assets/astronaut.png';
import Scroll from '../assets/scroll.png'
import Earth from '../assets/earth.png';

const homeBg = {
    backgroundImage: `url(${HomeBG})`,
    backgroundSize: 'cover',  // Adjust the sizing as needed
    backgroundRepeat: 'no-repeat'
}

const devColor = {
    color: '#F7F554'
}

const guitarColor = {
    color: '#67F2A4'
}

const smmColor = {
    color: '#E00000'
}


function Home() {
    return (
        <div className="h-screen bg-cover bg-center" style={homeBg}>
                <NavBar />
                <div className='grid grid-cols-4'>
                    <div className='hidden md:inline pl-48 pt-40'>
                        <a href="https://twitter.com/VishalAakash18" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={X} alt="X" /> </a>
                        <a href="https://github.com/vishalmet" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={GitHub} alt="github" /></a>
                    </div>
                    <div className="  text-6xl kaushan-font pt-16 text-shadow-xs lg:col-span-2 ">
                        <p className='text-xl  bg-gradient-to-b from-sky-500 to-white bg-clip-text text-transparent flex justify-center md:text-4xl lg:text-6xl'>Hi! <p className=' text-white pl-1 shaking-emoji emoji-container pt-3'>👋</p> I am Vishal Aakash <br /> <br /> </p>
                        <div className=" animate-pulse">
                        <p className=' flex justify-center bg-gradient-to-b from-green-600 to-green-100 bg-clip-text text-transparent'> Designer <span className='text-white pl-1'>-</span> <span className='bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-yellow-100 pb-3 pr-2 '>Developer </span> </p>
                        <p className=' flex justify-center text-white pb-3' >- Guitarist -</p>
                        <p className='text-white flex justify-center'>- <span className='bg-gradient-to-b from-red-100 via-red-300 to-red-600 bg-clip-text text-transparent pb-3 pr-2'>Social Media Manager</span> -</p>
                        </div>
                        <div className=" flex justify-center pt-4 animate-bounce ">
                            <img src={ME} alt="Astronaut" />
                        </div>
                        {/* <div className=" animate-spin duration-[50%]">
                            <img src={Earth} alt="Earth" />
                        </div> */}
                    </div>
                    <div className='hidden md:inline pt-40'>
                        <a href="https://www.linkedin.com/in/vishal-aakash" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={LinkedIn} alt="X" /></a>
                        <a href="https://www.youtube.com/@vishalaakash1802" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={YT} alt="github" /></a>
                    </div>
                </div>
                
                {/* <div className=" absolute animate-bounce right-0 bottom-0 pr-6 pb-6">
                    <img src={Scroll} alt="Scroll" />    
                </div>     */}
        </div>
    );
}
 
export default Home;