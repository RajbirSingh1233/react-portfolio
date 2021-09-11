import React from 'react';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line, Circle } from 'rc-progress';
const Skills = () =>{
    return(       
    <>
    <div className="skills bg-dark pt-5">
    <div className="w-50">
        <h3 className="text-center"><span>T</span>echnical <span>S</span>kills</h3>
        <ul className="ml-5 mt-5">
            <li>HTML</li>
            <Line percent="75" strokeWidth="2" strokeColor="rgb(194, 194, 56)" trailWidth="2"/>
            <li className="mt-3">CSS</li>
            <Line percent="65" strokeWidth="2" strokeColor="rgb(194, 194, 56)" trailWidth="2"/>
            <li className="mt-3">Javascript</li>
            <Line percent="50" strokeWidth="2" strokeColor="rgb(194, 194, 56)" trailWidth="2"/>
            <li className="mt-3">Java</li>
            <Line percent="40" strokeWidth="2" strokeColor="rgb(194, 194, 56)" trailWidth="2"/>
            <li className="mt-3">Python</li>
            <Line percent="20" strokeWidth="2" strokeColor="rgb(194, 194, 56)" trailWidth="2"/>
        </ul>
    </div>
    <div className="pro_div w-50">
        <h3 className="text-center"><span>P</span>rofessional <span>S</span>kills</h3>
            <ul className="Circle_ul mb-5">
                <li className="mr-3">Communicaiton</li>
                <Circle percent="60" className="mt-5 circle1" strokeWidth="8" style={{ width: 100, height: 100 }} strokeColor="rgb(194, 194, 56)" trailWidth="8" />

                <li className="ml-5">Project Management</li>
                <Circle percent="70" className="mt-5 circle2" strokeWidth="8" style={{ width: 100, height: 100 }} strokeColor="rgb(194, 194, 56)" trailWidth="8" />
                </ul>
                <ul className="Circle2_ul">
                <li className="li1 mr-5">Team Work</li>
                <Circle percent="50" className="mt-5 circle1" strokeWidth="8" style={{ width: 100, height: 100 }} strokeColor="rgb(194, 194, 56)" trailWidth="8" />
                
                <li className="li2 ml-5">Creativity</li>
                <Circle percent="80" className="mt-5 circle2" strokeWidth="8" style={{ width: 100, height: 100 }} strokeColor="rgb(194, 194, 56)" trailWidth="8" />

            </ul>
        </div>
    </div>
    </>

    );
}

export default Skills;