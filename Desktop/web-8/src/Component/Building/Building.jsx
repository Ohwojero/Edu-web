import React from 'react'
import { Link } from 'react-router-dom'
import build1 from '../../Assets/build1.webp'
import '../../styles/Building.css'
const Building = () => {
    return (
        <div className='container building'>
            <div className='building-container'>
                <div className='building-left'>
                    <h2>Building Connections and Unwinding Together</h2>
                    <p>We believe that fostering connections goes beyond the workspace. Our vibrant community knows the importance of work-life balance and taking time to recharge. Join us for happy hours, game nights, and social
                        events where members come together to relax, connect, and unwind.</p>

                        <div className='build-btn'>
                        <Link to="/contact" className='btn btns'>GET STARTED</Link>
                        </div>
                </div>

                <div className='building-right'>
                    <img src={build1} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Building