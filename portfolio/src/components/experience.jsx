import React from 'react';
import AboutBG from '../assets/aboutbg.png';

const BackGround = {
    backgroundImage: `url(${AboutBG})`,
    backgroundSize: 'cover',  // Adjust the sizing as needed
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    overflow: 'auto',
    width: '100vw', // Set the width and height to 100vw and 100vh
    height: '100vh',
};

const textBG = {
    // border: '1px solid #FFF',
    // borderRadius: '1rem',
    background: 'rgba(48, 48, 48, 0.50)',
};

const textShadowStyle = {
    textShadow: '3px 4px 4px rgba(255, 255, 255, 0.25)',
};

const combinedStyles = {
    ...textBG,
    ...textShadowStyle,
};

const Navcolor ={
    backgroundColor: '#17042799',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const designerColor = {
  color: '#46CFE5'
}

const Experience = () => {
    return ( 
        <div className="" style={BackGround}>
            {/* <NavBar /> */}

            <div className=" flex justify-center mx-[22%]  pt-6 pb-6">
                <div className=' lg:w-[880px] h-[58px] rounded-full flex  items-center flex-shrink-0 orbitron-font  'style={Navcolor} >
                    <ul className='hidden md:flex flex-wrap items-center space-x-2 font- md:space-x-4 font-bold text-xl lg:space-x-12 tracking-wider text-shadow-xs' style={designerColor}>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/about">About Me</a>
                        </li>
                        <li className='py-1 px-3 underline hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                            <a href="/experience">Experience</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                            <a href="/works">My Works</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Contact</li>
                    </ul>
                </div>
            </div>

            <div className='my-3 flex justify-center pt-20 pl-6 pr-6'>
            <div className="carousel artboard artboard-horizontal phone-5 rounded-3xl kaushan-font text-white"  style={combinedStyles}>
                <div id="slide1" className=" carousel-item relative w-full ">
                    <div className=" flex-row px-20 py-32 md:px-28 md:py-28">
                        <p className=' text-xl pb-6 md:text-4xl'>" Intern at SecureDApp as Frontend Dev & Growth hacks from 10/07/2023 to 24/09/2023 "</p>
                        <a href="https://drive.google.com/file/d/1QAZ5Qw7z3I9I0lLWXEgdvxBYAVpGmtsc/view?usp=sharing" target='_blank' className='py-1 px-3 bg-slate-300  rounded-full orbitron-font cursor-pointer font-semibold text-black hover:bg-black hover:text-slate-300'>Click here!</a>
                    </div>
                    {/* <p className='px-20 py-32 text-xl  md:px-28 md:py-32 md:text-4xl'>"Outstanding creativity! Desbeyond transformed our vision into captivating visuals. Their professionalism and attention to detail were exceptional." - Alex</p>
                    <a href="" className='py-1 px-3 bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Click here!</a> */}
                    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <p className='px-20 py-32 text-xl  md:px-28 md:py-32 md:text-4xl'>"Impressed by Desbeyond innovative designs. They exceeded our expectations with their attention to detail and prompt delivery." - Edwin Martin</p>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <p className='px-20 py-32 text-xl  md:px-28 md:py-32 md:text-4xl'>
                     "Working with This Agency was a game-changer. Their designs elevated our brand and left a lasting impression on our audience." - Samuel</p>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <p className='px-20 py-32 text-xl  md:px-28 md:py-32 md:text-4xl'>"Efficient, creative, and a pleasure to work with. Desbeyond brought our vision to life seamlessly. Highly recommended!" - John</p>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Experience;