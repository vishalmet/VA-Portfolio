import React from 'react';
import WorkBG from '../assets/aboutbg.png';


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

            <div className=" flex justify-center mx-[22%] mt-6">
                <div className=' lg:w-[880px] h-[58px] rounded-full flex  items-center flex-shrink-0 orbitron-font  'style={Navcolor} >
                    <ul className='hidden md:flex flex-wrap items-center space-x-2 font- md:space-x-4 font-bold text-xl lg:space-x-12 tracking-wider text-shadow-xs' style={designerColor}>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/about">About Me</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Experience</li>
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
            <div className=" pt-10 pl-32 ">
                <div className="grid grid-cols-3  grid-rows-3 h-screen">
                    <a href="https://portfolio-by-gknights.netlify.app/" className="pl-3">
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[230px] rounded-3xl ">
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Classic Portfolio Design</p>
                        <a href="https://portfolio-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://onlineguitar-by-gknights.netlify.app/">
                        <div className="bg-white/10 hover:scale-105 text-white  w-[250px] h-[230px] rounded-3xl ">  
                            <img src={WorkBG} alt="guitar"></img>
                            <p className="font-bold text-white pt-3 pl-3">Online Guitar Tuner</p>
                            <a href="https://onlineguitar-by-gknights.netlify.app/" className="pl-3 flex">Live Project</a>
                        </div>
                    </a>
                
                    <a href="https://animated-frontend-design-by-gknights.netlify.app/">
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[230px] rounded-3xl ">  
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white pt-3 pl-3">Animated Frontend Model</p>
                            <a href="https://animated-frontend-design-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://portfolio-by-gknights.netlify.app/" className="pl-3">
                        <div className="bg-white/10  text-white hover:scale-105 w-[250px] h-[230px] rounded-3xl ">
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Classic Portfolio Design</p>
                            <a href="https://portfolio-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://onlineguitar-by-gknights.netlify.app/">
                        <div className="bg-white/10  hover:scale-105 text-white  w-[250px] h-[230px] rounded-3xl ">  
                            <img src={WorkBG} alt="guitar"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Online Guitar Tuner</p>
                            <a href="https://onlineguitar-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://animated-frontend-design-by-gknights.netlify.app/">
                        <div className="bg-white/10  hover:scale-105 text-white  w-[250px] h-[230px] rounded-3xl ">  
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Animated Frontend Model</p>
                            <a href="https://animated-frontend-design-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://portfolio-by-gknights.netlify.app/" className="pl-3">
                        <div className="bg-white/10 hover:scale-105 text-white  w-[250px] h-[230px] rounded-3xl ">
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Classic Portfolio Design</p>
                            <a href="https://portfolio-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://onlineguitar-by-gknights.netlify.app/">
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[230px] rounded-3xl ">  
                            <img src={WorkBG} alt="guitar"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Online Guitar Tuner</p>
                            <a href="https://onlineguitar-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                    <a href="https://animated-frontend-design-by-gknights.netlify.app/">
                        <div className="bg-white/10 hover:scale-105  text-white  w-[250px] h-[230px] rounded-3xl ">  
                            <img src={WorkBG} alt="projectimg"></img>
                            <p className="font-bold text-white  pt-3 pl-3">Animated Frontend Model</p>
                            <a href="https://animated-frontend-design-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                        </div>
                    </a>

                </div>
            </div>

            {/* <div className=" grid grid-cols-3 grid-rows-5">

            </div> */}
        </div>

     );
}
 
export default Works;