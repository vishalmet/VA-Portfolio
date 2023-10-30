import React from 'react';
import WorkBG from '../assets/aboutbg.png';
import FR from '../assets/FundRaiz.jpeg';
import GR from '../assets/grfolio.jpeg';
import DC from '../assets/DeCric.jpeg';
import T3 from '../assets/ticket3.jpeg';
import Tesla from '../assets/tesla.png';
import IG from '../assets/IG.png';

const BackGround = {
    backgroundImage: `url(${WorkBG})`,
    backgroundSize: 'cover',  // Adjust the sizing as needed
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    overflow: 'auto'
};

const Navcolor ={
    backgroundColor: '#17042799',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const designerColor = {
  color: '#46CFE5'
};

const textShadowStyle = {
    textShadow: '3px 4px 4px rgba(255, 255, 255, 0.25)',
};

const Works = () => {
    return ( 

        <div className="h-screen bg-cover bg-center" style={BackGround}>
            {/* <NavBar /> */}

            <div className=" flex justify-center mx-[22%] pb-6">
                <div className=' lg:w-[880px] h-[58px] rounded-full flex  items-center flex-shrink-0 orbitron-font  'style={Navcolor} >
                    <ul className='hidden md:flex flex-wrap items-center space-x-2 font- md:space-x-4 font-bold text-xl lg:space-x-12 tracking-wider text-shadow-xs' style={designerColor}>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/about">About Me</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                            <a href="/experience">Experience</a>
                        </li>
                        <li className='py-1 px-3 underline hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                            <a href="/works">My Works</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Contact</li>
                    </ul>
                </div>
            </div>

            <div className="">
                <p className='kaushan-font text-yellow-600 text-4xl flex justify-center text-with-stroke md:text-6xl pt-6' style={textShadowStyle}>My Works✨</p>
            </div>  
            <div className=" pt-10 pl-20 pr-20 flex justify-center  ">
                <div className="flex-rows justify-center h-screen space-y-6 space-x-28 md:grid grid-cols-3 grid-rows-3">
                    <a href="https://devfolio.co/projects/fundraiz-7b6e" className="pl-3 pt-12">
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[260px] rounded-3xl ">
                            <img src={FR} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">FundRaiz - A Decentralized Application</p>
                        <a href="https://devfolio.co/projects/fundraiz-7b6e" target='_blank' rel='noreferrer' className="pl-3">Empower the Crowd, Fund the <span className='pl-3'>Future</span></a>
                        </div>
                    </a>

                    <a href="https://devfolio.co/projects/grfolio-6779" className='pl-3 pt-6' >
                        <div className="bg-white/10 hover:scale-105 text-white  w-[250px] h-[260px] rounded-3xl ">  
                            <img src={GR} alt="GrFolio"></img>
                            <p className="font-bold text-white pt-3 pl-3">Grfolio - A Decentralized Application</p>
                            <a href="https://devfolio.co/projects/grfolio-6779" target='_blank' rel='noreferrer' className="pl-3 flex">It is Devfolio, but decentralized</a>
                        </div>
                    </a>
                
                    <a href="https://devfolio.co/projects/decricv-94e7" className='pl-3 pt-6'>
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[260px] rounded-3xl ">  
                            <img src={DC} alt="projectimg"></img>
                            <p className="font-bold text-white pt-3 pl-3">DeCric - A Decentralized Application</p>
                            <a href="https://devfolio.co/projects/decricv-94e7" target='_blank' rel='noreferrer' className="pl-3">A decentralized fantasy sports <span className='pl-3'>application</span></a>
                        </div>
                    </a>

                    <a href="https://devfolio.co/projects/ticket-v-d478" className="pl-3 pt-6">
                        <div className="bg-white/10  text-white hover:scale-105 w-[250px] h-[260px] rounded-3xl ">
                            <img src={T3} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Ticket3 - A Decentralized Application</p>
                            <a href="https://devfolio.co/projects/ticket-v-d478" target='_blank' rel='noreferrer' className="pl-3">Host events seamlessly and <span className='pl-3'>Fraud-free</span></a>
                        </div>
                    </a>
                    
                    <a href="https://github.com/vishalmet/Tesla-UI" className='pl-3 pt-6'>
                        <div className="bg-white/10  hover:scale-105 text-white  w-[250px] h-[260px] rounded-3xl ">  
                            <img src={Tesla} alt="guitar"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Tesla-UI</p>
                            <a href="https://github.com/vishalmet/Tesla-UI" target='_blank' rel='noreferrer' className="pl-3">Smooth and responsive UI clone of Tesla</a>
                        </div>
                    </a>

                    <a href="https://github.com/vishalmet/Instagram-UI" className='pl-3 pt-6'>
                        <div className="bg-white/10  hover:scale-105 text-white  w-[250px] h-[260px] rounded-3xl ">  
                            <img src={IG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Instagram-UI</p>
                            <a href="https://github.com/vishalmet/Instagram-UI" target='_blank' rel='noreferrer' className="pl-3">Responsive User Interface of Instagram</a>
                        </div>
                    </a>

                    {/* <a href="https://portfolio-by-gknights.netlify.app/" className="pl-3 pt-6">
                        <div className="bg-white/10 hover:scale-105 text-white  w-[250px] h-[260px] rounded-3xl ">
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Classic Portfolio Design</p>
                            <a href="https://portfolio-by-gknights.netlify.app/" target='_blank' rel='noreferrer' className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://onlineguitar-by-gknights.netlify.app/" className='pt-6'>
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[260px] rounded-3xl ">  
                            <img src={WorkBG} alt="guitar"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Online Guitar Tuner</p>
                            <a href="https://onlineguitar-by-gknights.netlify.app/" target='_blank' rel='noreferrer' className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://animated-frontend-design-by-gknights.netlify.app/" className='pt-6'>
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[260px] rounded-3xl ">  
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Animated Frontend Model</p>
                            <a href="https://animated-frontend-design-by-gknights.netlify.app/" target='_blank' rel='noreferrer' className="pl-3">Live Project</a>
                        </div>
                    </a> */}

                </div>
            </div>

            {/* <div className=" grid grid-cols-3 grid-rows-5">

            </div> */}
        </div>

     );
}
 
export default Works;