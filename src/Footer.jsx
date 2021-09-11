import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
const Footer = () =>{
   return(
       <>
            <div className="footer pb-5">
                
            <div className="pt-5 pb-5">

                <div className="main1">
                <h5>Follow Me:</h5>
                    <div className="icon">
                        <svg className="svg1">
                            <circle className="circle1"></circle>
                        </svg>
                        <a href="https://www.instagram.com/rajbr_singh" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
                    </div>
                
                    <div className="icon">
                        <svg className="svg1">
                            <circle className="circle1"></circle>
                        </svg>
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
                    </div>
  
                    <div className="icon">
                        <svg className="svg1">
                            <circle className="circle1"></circle>
                        </svg>
                        <a href="https://api.whatsapp.com/send?phone=7988078783" target="_blank"><i className="fa fa-whatsapp fa-2x"></i></a>
                    </div>
           
                    <div className="icon">
                        <svg className="svg1">
                            <circle className="circle1"></circle>
                        </svg>
                        <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                    </div>
                </div>
            </div>
                <div className="contactme">
                    <p3>copyright ©2021 All rights reserved | Designed By <span>RAJBIR SINGH ❣️</span></p3>
                </div>
            </div>
  
    </>
   );
}

export default Footer; 