import React from 'react'
import '../styles/Title.css'
const Title = ({ title, desc }) => {
    return (
        <div className='title'>
            <h2>Thriving Businesses That Call Our Co-working Space Home</h2>
            <p> We are proud to host a diverse community of thriving businesses who have chosen our space as their creative hub. From innovative startups to established enterprises, these five clients exemplify
                the dynamic energy and entrepreneurial spirit that defines our community.</p>
        </div>
    )
}

export default Title