import React from 'react';
import HomeBG from '../assets/homebg.png';
import NavBar from './navbar';
import X from '../assets/x.png';
import LinkedIn from '../assets/linkedin.png';
import GitHub from '../assets/github.png';
import YT from '../assets/yt.png';

const homeBg = {
    backgroundImage: `url(${HomeBG})`,
    backgroundSize: 'cover',  // Adjust the sizing as needed
    backgroundRepeat: 'no-repeat'
}

const designerColor = {
    color: '#46CFE5'
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
                    <div className=' pl-48 pt-40'>
                        <a href="https://twitter.com/VishalAakash18" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={X} alt="X" /> </a>
                        <a href="https://github.com/vishalmet" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={GitHub} alt="github" /></a>
                    </div>
                    <div className=" text-6xl pt-16 font-semibold text-shadow-xs col-span-2">
                        <p className='text-white flex justify-center' style={designerColor}>Hi! <span className=' shaking-emoji emoji-container pt-3'>👋</span> I am Vishal Aakash <br /> <br /> </p>
                        <p className='text-white flex justify-center'> Designer - <span style={devColor}>Developer</span> </p>
                        <p className=' flex justify-center text-white' >- <span style={guitarColor}>Guitarist</span> -</p>
                        <p className='text-white flex justify-center'>- <span style={smmColor}>Social-Media Manager</span> -</p>
                    </div>
                    <div className=' pt-40'>
                        <a href="https://www.linkedin.com/in/vishal-aakash" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={LinkedIn} alt="X" /></a>
                        <a href="https://www.youtube.com/@vishalaakash1802" target='_blank' ><img className=' hover:scale-105 transition-transform duration-75' src={YT} alt="github" /></a>
                    </div>
                </div>
        </div>
    );
}
 
export default Home;