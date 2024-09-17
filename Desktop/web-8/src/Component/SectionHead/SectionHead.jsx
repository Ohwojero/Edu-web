import React from 'react'
import '../../styles/SectionHead.css'
const SectionHead = ({title, desc, img}) => {
  return (
    <div className='section-head' >
        <div className='sec-head-1'>
                <div className='section-left'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>  
        </div>
    </div>
  )
}

export default SectionHead