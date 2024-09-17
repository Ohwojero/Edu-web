import React from 'react'
import '../../styles/Benefit.css'
import blog_image from '../../Assets/blog_image.jpg'
import blog1 from '../../Assets/blog1.jpg'
import blog2 from '../../Assets/blog2.jpg'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import SectionHead from '../SectionHead/SectionHead'
const Benefit = () => {

  const benefitList = [

    {
      img: blog_image,
      title: "The Benefits of Co-working for Soloprenuers and Freelancers",
      desc: "Discover how co-working space can prive soloprenuers and freelancers with a supportive community and increased productivity",
      path: "/blog"
    },

    {
      img: blog1,
      title: "Mastering Work-Life Balance Stragies for Achieving Harmony in a Fast-Paced World",
      desc: "Discover practical teachniques for maintaining a healthy work-life balance and prioritizing personal well-being in today's demanding work environment ",
      path: "/blog"
    },

    {
      img: blog2,
      title: "The Power of Networking:Buiilding meaning connection in a Co-working Commuity",
      desc: "Learn how networing within a co-working community can open doors to collaboration, business opportunities, and personal growth",
      path: "/blog"
    },
  ]
  return (
    <div className='container benefit'>
      <div className='benefit-content'>
        <h2>The Benefits of Co-working for Solopreneurs and Freelancers</h2>
      </div>

      <div className='benefit-text'>
        <p>We delve into the unique benefits that co-working spaces offer solopreneurs and freelancers. We explore how working in a shared environment fosters a sense of community, reduces feelings of isolation, and encourages collaboration. Learn how co-working spaces can enhance productivity through access to professional amenities, dedicated workspaces, and a motivating atmosphere. Discover the networking opportunities available within the co-working community and how they can open doors to new clients, partnerships, and growth for solopreneurs and freelancers.</p>
      </div>


              <div className='lastest-post'>
              <SectionHead title="Latest Blog Posts" desc="Stay up to date by checking out our latest blog posts!" />
              </div>
      <div className='benefit-card'>
        
        {
          benefitList.map(({ img, title, desc, path }) => {
            return <div className='benefit-cards'>
              <div className='benefit-cards-content'>
                <div><img src={img} alt="" /></div>

                <div className='benefit-body'>
                  <h2>{title}</h2>
                  <p>{desc}</p>

                  <div className='blog-cards-link'>
                    <Link to="/contact" className='blog-cards-links'>Read More <IoIosArrowRoundForward /></Link>
                  </div>
                </div>
              </div>
            </div>

          })
        }
      </div>

      <div className='blog-post'>
        <Link to="/blog" className='blog-posts'>View All Blog Posts</Link>
      </div>


      <div className='benefit-section-head'>
        <SectionHead title="Ready to Join Our Inspiring Community?" desc="Take the next step towards unlocking your full potential by becoming a part of our vibrant coworking community. Connect with like-minded individuals, collaborate on exciting projects, and fuel your creativity in our dynamic workspace." />


        <div className='blog-last-section-link'>
          <Link to="/contact" className='blog-last-section-links'>Get Started</Link>
        </div>
      </div>

    </div>
  )
}

export default Benefit