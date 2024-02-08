import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function About() {
  return <>
    <div className="about-div text-center text-white d-flex justify-content-center align-items-center " >
        <div className="about-child" >
            <h2>ABOUT COMPONENT </h2>
            <div className='star me-3' ></div>
        <FontAwesomeIcon icon={faStar} className='   ' style={{color: "#ffffff",}} />
        <div className='star ms-3 ' ></div>
        <div className="container" >
            <div className="row " >
                <div className="col-md-5 offset-1" >
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
                </div>
                <div className="col-md-6" >
                    <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.


</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  </>;
}
