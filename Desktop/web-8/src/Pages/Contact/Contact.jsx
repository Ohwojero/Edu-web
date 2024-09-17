import React from 'react'
import '../../styles/Contact.css'
import SectionHead from '../../Component/SectionHead/SectionHead'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className=' container contact'>
      <div className='contact-section'>
        <div className='contact-left'>
          <SectionHead title="Contact Us" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

          <form action="">

            <div>
              <label htmlFor="">Name:</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>

            <textarea name="" id="" placeholder='Enter Your Message'></textarea>


          </form>
        </div>
        <div className='contact-right'>
              <div className='style1'>
                <div className='style2'>
                  <div className='style3'>
                        <div className='style4'>

                        </div>
                  </div>
                </div>
              </div>
              
        </div>
      </div>
    </div>
  )
}

export default Contact