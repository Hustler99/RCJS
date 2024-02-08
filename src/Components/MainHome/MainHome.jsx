import React from 'react'
import img1 from "../../imgs/avatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';






export default function MainHome() {
  return (
    <>
      <div className='cust main-home d-flex justify-content-center  pt-5 text-center align-items-center ' >
      <div className='' >
      <img src={img1} className='' ></img>
        <h2 className='mt-5' >START FRAMEWORK</h2>
        <div className='star me-3' ></div>
        <FontAwesomeIcon icon={faStar} className='   ' style={{color: "#ffffff",}} />
        <div className='star ms-3 ' ></div>
        <span className='d-block text-white'>Graphic Artist - Web Designer - Illustrator</span>

      </div>

      </div>
    </>
  )
}
