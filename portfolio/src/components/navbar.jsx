// import React, { useEffect } from 'react'

const Navcolor ={
    backgroundColor: '#17042799',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const designerColor = {
  color: '#46CFE5'
}


function NavBar() {

  
    

  return (
    <div className=" sticky-element flex justify-center absolute bottom-0 mx-[22%] mb-6">
        <nav className=' lg:w-[880px] h-[58px] rounded-full flex  items-center flex-shrink-0 orbitron-font  'style={Navcolor} >
            <ul className='hidden md:flex flex-wrap items-center space-x-2 font- md:space-x-4 font-bold text-xl lg:space-x-12 tracking-wider text-shadow-xs' style={designerColor}>
                <li className='py-1 px-3 underline hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="/">Home</a>
                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="/about">About Me</a>
                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="/experience">Experience</a>
                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="/works">My Works</a>                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Contact</li>
            </ul>
            <div class="lg:hidden cursor-pointer" id="mobile-menu-button">
                <svg class="h-6 w-6 burger" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
        </nav>
    



</div>
  )
}

export default NavBar