import React from 'react'
import '../../styles/Ready.css'
import { Link } from 'react-router-dom'
const Ready = () => {
  return (
    <div className='ready' >
            <div className='ready-content'>
                <h2>Ready to Join Our Inspiring Community?</h2>
                <p>Take the next step towards unlocking your full potential by becoming a part of our vibrant coworking community. Connect with like-minded individuals, collaborate on exciting projects, and fuel your creativity in our dynamic workspace.</p>
                <div className='ready-btn'>
                <Link to="/contact" className='btn ready-btns'>Get Started</Link>
                </div>
            </div>
    </div>
  )
}

export default Ready