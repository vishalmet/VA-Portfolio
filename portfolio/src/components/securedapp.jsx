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

const textShadowStyle = {
    textShadow: '3px 4px 4px rgba(255, 255, 255, 0.25)',
};

const textBG = {
    border: '1px solid #FFF',
    background: 'rgba(48, 48, 48, 0.50)'
};

const combinedStyles = {
    ...textBG,
    ...textShadowStyle,
};


const SecureDApp = () => {
    return ( 
        <div className="" style={BackGround}>
            <div className="p-6">
                <a href="/experience" className=" text-2xl font-bold orbitron-font hover:scale-105 transition-transform duration-75"> &lt; <span className='underline'>back</span> </a>
            </div>
            <div className=" m-6 p-10 rounded-3xl md:m-10 lg:m-16"style={combinedStyles}>
                <div className=" pl-1 space-y-1 md:pl-6 lg:pl-10" >
                    <p className='  text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent pr-3 pb-3 orbitron-font font-bold tracking-wide md:text-3xl' >## Intern at SecureDApp</p>
                    <p className=' text-xl  orbitron-font md:text-2xl text-white'>**Frontend Developer & Growth Hacks** </p>
                    <p className=' text-xl  orbitron-font md:text-2xl text-white '>*<span className=' font-semibold'>Duration:</span> July 10, 2023 - September 24, 2023*</p>
                </div>
                <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                    <p className='text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent pr-3 pb-3 orbitron-font font-bold tracking-wide md:text-3xl'>### Overview</p>
                    <p className=' text-xl kaushan-font tracking-wide text-white md:text-2xl'>I had the opportunity to intern at SecureDApp, where I worked as a Frontend Developer while exploring and implementing various growth hacking strategies. During my internship, I gained valuable experience in web development, user interface design, and marketing techniques.</p>
                </div>
                <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                    <p className='text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent pr-3 pb-3 orbitron-font font-bold tracking-wide md:text-3xl'>### Key Achievements and Responsibilities</p>
                    <p className=' text-xl kaushan-font tracking-wide text-white md:text-2xl'>
                        <h1><span className='text-red-400'>-</span> Collaborated with the development team to create responsive and user-friendly web applications.</h1>
                        <h1><span className='text-red-400'>-</span>Participated in brainstorming sessions with the development team and to devise growth hacking strategies for user acquisition and retention.</h1>
                        <h1><span className='text-red-400'>-</span>Contributed to content marketing efforts, including blog posts in various social media like Discord, Twitter to increase brand awareness.</h1>
                    </p>
                </div>
                <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                    <p className='text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent pr-3 pb-3 orbitron-font font-bold tracking-wide md:text-3xl'>### Technologies and Tools Used</p>
                    <p className=' text-xl kaushan-font tracking-wide text-white md:text-2xl'>
                        <h1><span className='text-red-400'>-</span>HTML, CSS, JavaScript</h1>
                        <h1><span className='text-red-400'>-</span>React.js</h1>
                        <h1><span className='text-red-400'>-</span>UI/UX Design</h1>
                        <h1><span className='text-red-400'>-</span>Other social medias</h1>
                    </p>
                </div>
                <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                    <p className='text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent pr-3 pb-3 orbitron-font font-bold tracking-wide md:text-3xl'>### Lessons Learned</p>
                    <p className=' text-xl text-white kaushan-font tracking-wide md:text-2xl'>My internship at SecureDApp allowed me to develop both technical and soft skills. I enhanced my proficiency in frontend development, gained experience in growth hacking, and improved my ability to collaborate in a dynamic team environment. I also learned the importance of data-driven decision-making and the value of user-centric design.</p>
                </div>
            </div>
            <p className='text-white text-shadow-xs text-2xl flex justify-center pt-6 pb-6 kaushan-font md:text-3xl'>Made with - <span className='text-white'>❤️</span>- by Vishal Aakash</p>
        </div>
     );
}
 
export default SecureDApp;