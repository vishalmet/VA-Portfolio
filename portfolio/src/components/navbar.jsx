import React from 'react'

const Navcolor ={
    backgroundColor: '#17042799',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


function NavBar() {

  return (
    <div className=" sticky-element flex justify-center absolute bottom-0 mx-[22%] mb-6">
        <div className=' lg:w-[880px] h-[58px] rounded-full flex  items-center flex-shrink-0  'style={Navcolor} >
            <ul className='hidden md:flex flex-wrap items-center space-x-2 font- md:space-x-4 font-bold text-xl lg:space-x-14 text-white'>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>HOME</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>ABOUT ME</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>EXPERIENCE</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>MY WORKS</li>
                <li className='py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer hover:text-black'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar