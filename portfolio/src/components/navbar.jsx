import React from 'react'

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
        <div className=' lg:w-[880px] h-[58px] rounded-full flex  items-center flex-shrink-0 orbitron-font  'style={Navcolor} >
            <ul className='hidden md:flex flex-wrap items-center space-x-2 font- md:space-x-4 font-bold text-xl lg:space-x-12 tracking-wider text-shadow-xs' style={designerColor}>
                <li className='py-1 px-3 underline hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="/">Home</a>
                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="/about">About Me</a>
                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="">Experience</a>
                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>
                  <a href="/works">My Works</a>                </li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar