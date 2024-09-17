import React from 'react'
import '../../styles/Service.css'
import SectionHead from '../../Component/SectionHead/SectionHead'
import service_image from '../../Assets/service_image.webp'
import service_right_image from '../../Assets/service_right_image.webp'
import service_left_image from '../../Assets/service_image_left.webp'
import last_image from '../../Assets/last_image.webp'
const Service = () => {
  return (
    <div className='container service'>
      <div className='service-content'>
        <SectionHead title="Unlocking Your Potential with Exceptional Services" desc="We go beyond providing a collaborative work environment. We offer a range of exceptional services designed to support your professional growth and enhance your work experience. From personalized mentoring and expert assistance to high-quality video production facilities, our services are here to empower you on your journey towards success." />

      </div>
      <div className='service-image'>
        <img src={service_image} alt="" />
      </div>

      <div className='service-sec-01'>
        <div className='service-sec-01-left'>
          <SectionHead title="Guidance and Growth: Empowering Minds Through Mentoring" desc="Our co-working space is more than just a place to work; it's a hub of knowledge-sharing and personal development. Witness the power of mentorship in action as four individuals engage in a dynamic mentoring session, guided by experienced professionals. With a whiteboard as their canvas, ideas flourish, insights are shared, and growth becomes the driving force. Step into this empowering environment and unlock your full potential through the transformative power of mentoring." />
        </div>

        <div className='service-sec-01-right'>
          <img src={service_right_image} alt="" />
        </div>
      </div>


      <div className='service-sec-01'>
        <div className='service-sec-01-left'>
          <img src={service_left_image} alt="" />
        </div>
        <div className='service-sec-01-right'>
          <SectionHead title="Personalized Support for Seamless Success" desc="We believe in providing exceptional support to help you navigate your professional endeavors with ease. In this image, witness the dedicated assistance of our knowledgeable and friendly assistant, ensuring that our members receive the personalized support they need to thrive. From answering queries to coordinating resources, our committed team is here to make your work experience seamless and productive. Experience the difference of having a trusted assistant by your side as you focus on what truly matters - achieving your goals and realizing your ambitions." />
        </div>
      </div>



      <div className='service-sec-01'>
        <div className='service-sec-01-left'>
          <SectionHead title="Thriving Community and Unparalleled Access"
            desc="Step into our co-working space and immerse yourself in a thriving community of professionals who share a passion for collaboration and growth. With open doors 24/7 and a diverse membership base of over 100 individuals, our workspace offers unparalleled access to resources, networking opportunities, and a supportive environment that fuels your success. Join our dynamic community and unlock a world of possibilities for your professional journey." />

          <div className='sub-service-sec-01'>
            <div className='sub-service-sec-01-text'>
              <h1>Open 24/7</h1>
              <p>Enjoy the freedom to work on your own terms with our co-working space.</p>
            </div>


            <div className='sub-service-sec-01-text'>
                <h1>100+ Members</h1>
                <p>Join a thriving community of over 100 like-minded professionals.</p>
            </div>
          </div>

        </div>

        <div className='service-sec-01-right'>
          <img src={last_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Service