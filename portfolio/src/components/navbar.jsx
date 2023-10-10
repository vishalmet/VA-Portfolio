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
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Home</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>About Me</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Experience</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>My Works</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar