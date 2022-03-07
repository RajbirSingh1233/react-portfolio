import React from 'react';

const Education = () =>{
    return(
        <>
        <div className="Education_main education pt-5">
            <h1 className="heading_ed text-center pt-4">Education</h1>
            <div className="text-center pb-3">
                <h3>🏫<span>H</span>igher <span>E</span>ducation</h3>
                <h4 className="mt-4">Little Flower Visitation Sr. Sec. Convent School</h4>
                <h5>Class: X (2016-2017)</h5>
                <h5 className="mt-2">CGPA : 8.8</h5>
                
                <hr />
                
                <h3 className="mt-5">🏫<span>S</span>econdary <span>E</span>ducation</h3>
                <h4 className="mt-4">Little Flower Visitation Sr. Sec. Convent School</h4>
                <h5>Class: XII (2018-2019)</h5>
                <h5 className="mt-2">Percentage : 82.6%</h5>
                
                <hr />

                <h3 className="mt-5">🏫<span>P</span>resent</h3>
                <h4 className="mt-4">B.E in Computer Science and Engineering</h4>
                <h4>Chitkara University (2019-2023)</h4>
                <h5 className="pb-4 mt-2">CGPA : 9.67</h5>
            </div>
        </div>
        </>
    );
}

export default Education;