import React from 'react';
import myimg from './images/myimg.jpeg';
const About = () =>{
    return(
        <>
         <div className="aboutpage pt-5">
        <h2><span>A</span>bout <span>M</span>e</h2>
        <p className='about_txt ml-3 mr-3'>B.E in Computer Science. Ability to work with <span className='subjects'> Java</span>, 
        <span className='subjects'>  Data Structures</span> and <span className='subjects'>  Web Development</span>. 
        Can work well under pressure and make the best of any situation.
        Passionate individual with great interpersonal and communication skills.</p>
       <div className="about_img_div mt-5">
        <img src={myimg} alt="men" className="about_img"/>
        </div>
        <h5 className='about_txt'>Full Stack Developer</h5>
        </div>
        </>
    );
}

export default About;