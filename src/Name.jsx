import React from 'react';

const Name = () =>{

    return(
        <>
            <div className="wraper">
                <div className="static_text">
                    Hey,
                    <br />
                    I am <span>Rajbir Singh</span>
                    <br />
                    I am a
                </div>

                    <ul className="dynamic_text">
                        <li><span>Designer</span></li>
                        <li><span>Developer</span></li>
                        <li><span>Programmer</span></li>
                    </ul>  
            </div>
        </>
    );

}

export default Name;