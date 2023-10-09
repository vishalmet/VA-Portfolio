import React from 'react';
import Stars from '../assets/Stars.png';
import NavBar from './navbar';

const BackGround = {
    backgroundImage: `url(${Stars})`,
    backgroundSize: 'cover',  // Adjust the sizing as needed
    backgroundRepeat: 'no-repeat'
}


const About = () => {
    return ( 
        <div className="h-screen bg-cover bg-center" style={BackGround}>
            <NavBar />
            

        </div>
     );
}
 
export default About;