import React from 'react'
import '../../styles/Blog.css'
import SectionHead from '../../Component/SectionHead/SectionHead'
import blog_image from '../../Assets/blog_image.jpg'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";
import blog1 from '../../Assets/blog1.jpg'
import blog2 from '../../Assets/blog2.jpg'
import blog3 from '../../Assets/blog3.jpg'
import blog4 from '../../Assets/blog4.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import Benefit from '../../Component/Benefit/Benefit'
const Blog = () => {

  const blogList = [
    {
      img: blog1,
      title: "Mastering Work-Life Balance:Strategies for Achieving Harmony in a fast-Paced World",
      desc: "Discover practical techniques for maintaining a healthy work-life balance and prioriting personal well-being in today's demanding work environment",
      path: "/contact"
    },

    {
      img: blog2,
      title: "The Power of Networking Building Meaningful connectios in a Co-working Community",
      desc: "Learn how networking within a co-working community can open doors to collaboration, business opportunites, and personal growth",
      path: "/contact"
    },

    {
      img: blog3,
      title: "Embracing Remote Work:The Future of Flexible work Arrangements",
      desc: "Eplore the rise of remote work and it's impact on productivity, work-life balance and employee satisfaction.",
      path: "/contact"
    },

    {
      img: blog4,
      title: "Desiging an inspiring Workspace:Boosting creativity and productivity",
      desc: "Explore the elements of a well-designed workspace and how it can enhance creativity,productivity and overall well-being.",
      path: "/contact"
    },
  ]

  return (
    

    <div className='container blog'>
   


      <div className='blog-content'>
        <SectionHead title="Our Blog" desc="Stay up to date by checking out our latest blog posts below" />
      </div>

      <div className='sec-01-blog'>
        <Link to="/Benefit">

          <img src={blog_image} alt="" />

          <div className='blog-text'>
            <h2>The Benfits of Co-working and soloprenuers freelancers </h2>
            <p>Discover how co-working spaces can provide soloprenures and freelancers with a supportive community and increased productivity. </p>

            <div className='blog-link'>
              <Link className='btn blog-btns'>Read More <IoMdArrowForward /></Link>
            </div>
          </div>
        </Link>

      </div>

      <div className='blog-cards'>

        {
          blogList.map(({ img, title, desc, path, id }) => {
            return <div key={id} className='blog-card'>
              <div className='card-blog'>
                <img src={img} alt="" />

                <div className='blog-card-body'>
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

      <div className='blog-last-section'>
        <SectionHead title="Ready to Join Our Inspiring Community?" desc="Take the next step towards unlocking your full potential by becoming a part of our vibrant coworking community. Connect with like-minded individuals, collaborate on exciting projects, and fuel your creativity in our dynamic workspace." />

        <div className='blog-last-section-link'>
          <Link to="/contact" className='blog-last-section-links'>Get Started</Link>
        </div>
      </div>
       
    </div>
  )
}

export default Blog