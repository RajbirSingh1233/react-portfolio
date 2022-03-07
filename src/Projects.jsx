import React from 'react';
import { NavLink } from 'react-router-dom';
import weather from './images/weather.png';
import todo from './images/todo.jpg';
import tictactoe from './images/tictactoe.png';
import googlekeep1 from './images/googlekeep1.png';
import calculator from './images/calculator.jpg';
import javascript from './images/javascript.jpg';

const Projects =() =>{
    return(
    <>
    
        <div className="projectDiv projects pt-5">
        <h1 className="text-center"> PROJECTS </h1>
            <div className="container-fluid">
            <div className="row">
                <div className="col-9 mx-auto pl-5">
                    <div className="row gy-4">
                    <div className="col-md-4 col-10 mx-auto">
                    <img src={weather} alt="men" id="images1"/>
                      <div className="cardCaption">
                            <h2 className="text-center p-4">WeatherApp</h2>
                            <a href="https://github.com/RajbirSingh1233/weatherapp" className="links" id="anchor" target="_blank">🔗</a>
                      </div>
                    </div>
                    
                    <div className="col-md-4 col-10 mx-auto">
                    <img src={todo} alt="men" id="images1"/>
                        <div className="cardCaption">
                                <h2 className="text-center p-4">To-Do List</h2>
                                <a href="https://github.com/RajbirSingh1233/TodoList" className="links" id="anchor" target="_blank">🔗</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <img src={tictactoe} alt="men" id="images1"/>
                        <div className="cardCaption">
                                <h2 className="text-center p-4">Tic-Tac_toe</h2>
                                <a href="https://tic-tac-toe-game-1.herokuapp.com/" className="links" id="anchor" target="_blank">🔗</a>
                        </div>
                    </div>
                    
                    </div>
               </div>
            </div>
            <div className="row pt-5 pb-5">
                <div className="col-9 mx-auto pl-5">
                    <div className="row gy-4">
                    
                    <div className="col-md-4 col-10 mx-auto">
                    <img src={googlekeep1} alt="men" id="images1"/>
                        <div className="cardCaption">
                                <h2 className="text-center p-4">Google-Keep-Clone</h2>
                                <a href="https://google-keep-clone01.herokuapp.com/" className="links" id="anchor" target="_blank">🔗</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <img src={calculator} alt="men" id="images1"/>
                        <div className="cardCaption">
                                <h2 className="text-center p-4">Calculator</h2>
                                <a href="https://react-calculator01.herokuapp.com/" className="links" id="anchor" target="_blank">🔗</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <img src={javascript} alt="men" id="images1"/>
                        <div className="cardCaption">
                                <h2 className="text-center p-4">Javascript Projects</h2>
                                <a href="https://github.com/RajbirSingh1233/Javascript-projects" className="links" id="anchor" target="_blank">🔗</a>
                        </div>
                    </div>
                    
                    </div>
               </div>
            </div>
            </div>
        </div>
                    </>
    );
}

export default Projects;