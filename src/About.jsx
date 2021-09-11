import React from 'react';
import myimg from './images/myimg.jpeg';
const About = () =>{
    return(
        <>
         <div className="aboutpage">
        <h2><span>A</span>bout <span>M</span>e</h2>
        {/* <p>Dolor ut culpa duis exercitation sint magna. Et irure sunt nisi elit mollit qui cupidatat adipisicing 
        voluptate excepteur et exercitation officia adipisicing. Pariatur cupidatat est commodo exercitation 
        reprehenderit dolor proident esse sit enim magna occaecat. Deserunt aliqua tempor deserunt exercitation 
        non id mollit. Labore Lorem exercitation laboris culpa laborum enim sit sunt elit nulla est Lorem ex aute. 
        Culpa sit quis ipsum ipsum velit aliqua veniam. Aliquip deserunt incididunt eu amet dolore consequat ullamco 
        exercitation enim laboris.
        Dolor ut culpa duis exercitation sint magna. Et irure sunt nisi elit mollit qui cupidatat adipisicing 
        voluptate excepteur et exercitation officia adipisicing. Pariatur cupidatat est commodo exercitation 
        reprehenderit dolor proident esse sit enim magna occaecat. Deserunt aliqua tempor deserunt exercitation 
        non id mollit. Labore Lorem exercitation laboris culpa laborum enim sit sunt elit nulla est Lorem ex aute. 
        Culpa sit quis ipsum ipsum velit aliqua veniam. Aliquip deserunt incididunt eu amet dolore consequat ullamco 
        exercitation enim laboris.
        Dolor ut culpa duis exercitation sint magna. Et irure sunt nisi elit mollit qui cupidatat adipisicing 
        voluptate excepteur et exercitation officia adipisicing. Pariatur cupidatat est commodo exercitation 
        reprehenderit dolor proident esse sit enim magna occaecat. Deserunt aliqua tempor deserunt exercitation 
        non id mollit. Labore Lorem exercitation laboris culpa laborum enim sit sunt elit nulla est Lorem ex aute. 
        Culpa sit quis ipsum ipsum velit aliqua veniam. Aliquip deserunt incididunt eu amet dolore consequat ullamco 
        exercitation enim laboris.</p> */}
       <div className="about_img_div mt-5">
        <img src={myimg} alt="men" className="about_img"/>
        </div>
        </div>
        </>
    );
}

export default About;