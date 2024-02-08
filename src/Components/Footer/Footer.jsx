import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <>
        <div className=' d-flex  justify-content-evenly text-center superfooter align-items-center' >
            <div className=''>
                <h3 className='' >LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className=' p-5 mb-2 ms-5'>
            <h3 className='' >AROUND THE WEB</h3>
    <div className='mt-4' >
    <FontAwesomeIcon className='icon' icon={faFacebook} />
                <FontAwesomeIcon className='icon' icon={faTwitter} />
      <             FontAwesomeIcon className='icon' icon={faLinkedin} />
    </div>
            </div>
            <div>
                <h3>ABOUT FREELANCER</h3>
                <p> Freelance is a free to use, licensed Bootstrap <br/> theme created by Route </p>

            </div>
        </div>
    </>
  )
}
