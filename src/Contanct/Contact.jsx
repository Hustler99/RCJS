import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
        <div className='email  pt-5' >
    <div className='email-child text-center' >
    <h2 className='text-center' >PORTFOLIO COMPONENT</h2>
            <div className="star1 me-3 text-center"></div>
            <FontAwesomeIcon
              icon={faStar}
              className=""
              style={{ color: "#2C3E50" }}
            />
            <div className="star2 ms-3"></div>
    </div>
            <div className='container w-50 ' >
                <div className='row mt-5 gy-5 ms-1' >
                    <input type='text' className='form-control' placeholder='username ' ></input>
                    <input type='text' className='form-control' placeholder='userAge ' ></input>
                    <input type='text' className='form-control' placeholder='userEmail ' ></input>
                    <input type='text' className='form-control' placeholder='userPassword ' ></input>

                </div>
                <button className='btn  mt-3  ' >Send Message</button>

            </div>

        </div>
    </>
  )
}
