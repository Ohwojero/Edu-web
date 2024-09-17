import React from 'react'
import '../../styles/Header.css'
import { Link } from 'react-router-dom'
import { asset } from '../../Assets/asset'
import { CiPlay1 } from "react-icons/ci";
const Header = ({ setPlayerState }) => {
    return (

        <div className='container'>
            <div className="header-container">

                <div className='header-content-1'>
                    <h2>Welcome to a space of <br />Limitless Possibilities</h2>
                    <p>Step into a space where ideas take flight, creativity knows no bounds, and innovation becomes a way of life. Our co-working community is a haven for dreamers, doers, and visionaries like you.
                        Fuel your ambition, connect with inspiring minds, and redefine what's possible. Join us and embark on a journey of endless opportunities in a collaborative environment designed to elevate your work to new heights.</p>


                      
                        
                    <div className='link-btn'>
                        <Link to="/contact" className='btn '>Get Started</Link>
                    </div>
                </div>

                <div className='header-content-2'>
                    <img src={asset.headerimage} alt="" className='header-image' />
                    <div className='play-icon'>
                        <CiPlay1 className='play' onClick={() => setPlayerState(true)} />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Header