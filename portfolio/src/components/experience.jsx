import React from 'react';
import AboutBG from '../assets/aboutbg.png';

const BackGround = {
    backgroundImage: `url(${AboutBG})`,
    backgroundSize: 'cover',  // Adjust the sizing as needed
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    overflow: 'auto',
    width: '100vw', 
    height: '100vh',
};

const textBG = {
    border: '1px solid #FFF',
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

            {/* <div className='my-3 flex justify-center pt-20 pl-6 pr-6'>
            <div className="carousel artboard artboard-horizontal phone-5 rounded-3xl kaushan-font text-white"  style={combinedStyles}>
                <div id="slide1" className=" carousel-item relative w-full ">
                    <div className=" flex-row px-20 py-32 md:px-28 md:py-28">
                        <p className=' text-xl pb-6 md:text-4xl'>" Intern at SecureDApp as Frontend Dev & Growth hacks from 10/07/2023 to 24/09/2023 "</p>
                        <a href="https://drive.google.com/file/d/1QAZ5Qw7z3I9I0lLWXEgdvxBYAVpGmtsc/view?usp=sharing" target='_blank' className='py-1 px-3 bg-slate-300  rounded-full orbitron-font cursor-pointer font-semibold text-black hover:bg-black hover:text-slate-300'>Click here!</a>
                    </div>
                   
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
        </div> */}
            <div className=" flex justify-center">
                <p className=' text-3xl text-shadow-xs tracking-wide kaushan-font bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent pr-3 pb-3 md:text-5xl'>My Experiences</p>
            </div>
            <div className=" pt-10 pb-10 mx-[22%]">
                <div className=" space-y-6 rounded-3xl p-6" style={combinedStyles}>
                    <p className=' text-base underline pl-3 font-semibold orbitron-font text-shadow-xs md:text-2xl'>10th July 2023 - 24 september 2023</p>
                    <p className=' rounded-3xl kaushan-font bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent p-3 pb-5 textbase md:text-3xl' >I had the opportunity to intern at SecureDApp, where I worked as a Frontend Developer while exploring and implementing various growth hacking strategies. During my internship, I gained valuable experience in web development, user interface design, and marketing techniques.</p>
                    <a href="/securedapp" target='_blank' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full orbitron-font cursor-pointer font-semibold text-black hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More!</a>
                </div>
            </div>
            <div className=" pt-10 pb-10 mx-[22%]">
                <div className=" space-y-6 rounded-3xl p-6" style={combinedStyles}>
                    <p className=' text-base underline pl-3 font-semibold orbitron-font text-shadow-xs md:text-2xl'>10th July 2023 - 24 september 2023</p>
                    <p className=' rounded-3xl kaushan-font bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent p-3 pb-5 text-base md:text-3xl' >I had the opportunity to intern at SecureDApp, where I worked as a Frontend Developer while exploring and implementing various growth hacking strategies. During my internship, I gained valuable experience in web development, user interface design, and marketing techniques.</p>
                    <a href="/securedapp" target='_blank' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full orbitron-font cursor-pointer font-semibold text-black hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More!</a>
                </div>
            </div>
            <div className=" pt-10 pb-10 mx-[22%]">
                <div className=" space-y-6 rounded-3xl p-6" style={combinedStyles}>
                    <p className=' text-base underline pl-3 font-semibold orbitron-font text-shadow-xs md:text-2xl'>10th July 2023 - 24 september 2023</p>
                    <p className=' rounded-3xl kaushan-font bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent p-3 pb-5 text-base md:text-3xl' >I had the opportunity to intern at SecureDApp, where I worked as a Frontend Developer while exploring and implementing various growth hacking strategies. During my internship, I gained valuable experience in web development, user interface design, and marketing techniques.</p>
                    <a href="/securedapp" target='_blank' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full orbitron-font cursor-pointer font-semibold text-black hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More!</a>
                </div>
            </div>
            
            <p className='text-white text-shadow-xs text-2xl flex justify-center pt-36 pb-6 kaushan-font md:text-3xl'>Made with - <span className='text-white'>❤️</span>- by Vishal Aakash</p>
        </div>
     );
}
 
export default Experience;