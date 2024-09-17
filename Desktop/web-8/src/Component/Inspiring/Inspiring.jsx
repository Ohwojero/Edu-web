import React from 'react'
import '../../styles/Inspiring.css'
import inspire_image from '../../Assets/inspire_image.webp'
import { Link } from 'react-router-dom'
const Inspiring = () => {
    return (
        <div className='container inspire'>
            <div className='container-inspire'>
                <div className='inspire-left'>
                    <img src={inspire_image} alt="" />
                </div>

                <div className='inspire-right'>
                    <h2>Inspiring Knowledge-Sharing and Professional Growth</h2>

                    <p>We believe in the power of collective wisdom and the transformative impact of shared knowledge. 
                        Our inspiring environment serves as a venue for engaging corporate speaking events, where industry 
                        leaders and subject matter experts come together to impart valuable insights and expertise. 
                        Join us for these thought-provoking sessions that fuel professional growth, foster innovation, 
                        and provide opportunities to network with like-minded individuals. Be inspired, 
                        broaden your horizons, and stay ahead of the curve in our dynamic community.</p>

                        <div className='inspire-btn'>
                                <Link to="/" className='btn inspire-btns'>Get Started</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Inspiring