import React from 'react';
import AboutBG from '../assets/aboutbg.png';
// import NavBar from './navbar';
import MyPic from '../assets/pic1.png';
import Tools from '../assets/tool2.png';
import Solidity from '../assets/sol.png';

const BackGround = {
    backgroundImage: `url(${AboutBG})`,
    backgroundSize: 'cover',  // Adjust the sizing as needed
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    overflow: 'auto'
};

const textBG = {
    border: '1px solid #FFF',
    background: 'rgba(48, 48, 48, 0.50)'
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


const About = () => {
    return ( 
        <div className="h-screen bg-cover bg-center" style={BackGround}>
            {/* <NavBar /> */}

            <div className=" flex justify-center mx-[22%] mt-2">
                <div className=' lg:w-[880px] h-[58px] rounded-full flex  items-center flex-shrink-0 orbitron-font  'style={Navcolor} >
                    <ul className='hidden md:flex flex-wrap items-center space-x-2 font- md:space-x-4 font-bold text-xl lg:space-x-12 tracking-wider text-shadow-xs' style={designerColor}>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-3 underline hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                        <a href="/about">About Me</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                            <a href="/experience">Experience</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                            <a href="/works">My Works</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Contact</li>
                    </ul>
                </div>
            </div>

            <p className='text-4xl flex justify-center pt-6 text-with-stroke kaushan-font text-yellow-600 lg:text-6xl' style={textShadowStyle}>🌟 About Me:</p>
            <div className="items-center justify-center  md:grid grid-cols-2 flex-shrink-0">
                <div className=" ">
                    <img src={MyPic} alt="Vishal" />
                </div>
                <div className=" w-auto h-max ml-10 mr-10  flex-shrink-0 rounded-3xl " style={combinedStyles}>
                    <p className=' text-2xl  kaushan-font mx-[24px] my-[38px] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text text-transparent md:text-4xl'>
                        I'm a passionate and creative frontend developer and designer with a keen eye for aesthetics and a knack for crafting engaging and user-friendly web experiences. With a background in both design and development, I bring a unique blend of skills to the table, allowing me to bridge the gap between design concepts and functional, responsive websites.
                    </p>
                </div>
            </div>

            <div className=" pt-20  items-center justify-center pl-10 pr-10  md:grid grid-cols-2 flex-shrink-0">
                <div className=" w-auto h-max  flex-shrink-0 rounded-3xl " style={combinedStyles}>
                    <p className=' text-2xl kaushan-font mx-[24px] my-[38px] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text text-transparent md:text-4xl'>
                    I am experienced in working with tailwindcss, javascript and also frameworks like reactjs, django and curently trying to incorporate with flask. I am also familiar with python, C, C++, Java. I am comfortable in using figma, canvas, miro and mural for designing UI & ideating.</p>
                </div>
                <div className=" ">
                    <img src={Tools} alt="tools" />
                </div>
            </div>

            <div className="items-center justify-center pb-10  md:grid grid-cols-2 flex-shrink-0 ">
                <div className=" ">
                    <img src={Solidity} alt="Vishal" />
                </div>
                <div className=" w-auto h-max ml-10 mr-10  flex-shrink-0 rounded-3xl " style={combinedStyles}>
                    <p className=' text-2xl  kaushan-font mx-[24px] my-[38px] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text text-transparent md:text-4xl'>
                    I am also getting myself introduced to the New and interesting technology - Blockchain and practicing to write Web3 smartcontract language - Solidity (Ethereum)
                    </p>
                </div>
            </div>

            <p className='text-white text-shadow-xs text-2xl flex justify-center pt-6 pb-6 kaushan-font md:text-3xl'>Made with - <span className='text-white'>❤️</span>- by Vishal Aakash</p>

        </div>
     );
}
 
export default About;
