import React from 'react'
import '../../styles/About.css'
import MainHeader from '../../Component/MainHeader/MainHeader'
import { asset } from '../../Assets/asset'
import aboutimage1 from '../../Assets/aboutimage1.webp'
import SectionHead from '../../Component/SectionHead/SectionHead'
import firstimage from '../../Assets/firstimage.webp'
import secondimage from '../../Assets/secondimage.webp'
import thirdimage from '../../Assets/thirdimage.webp'
import fourthimage from '../../Assets/fourthimage.webp'
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import sec_04_image from "../../Assets/sec_04_image.webp"
import Slider from "react-slick";
import { Link } from 'react-router-dom'
const sectionThree = [
  {
    img: firstimage,
    name: "Sabrina Franklin",
    position: "CEO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    // social:[
    //  'https://linkedin.com/',
    //  'https://twitter.com'
    // ]

    icon: "https://linkedin.com/",
    icons: "https://twitter.com"

  },
  {
    img: secondimage,
    name: "Jacob Wilcox",
    position: "Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    // social:[
    //  'https://linkedin.com/',
    //  'https://twitter.com'
    // ]
    icon: "https://linkedin.com/",
    icons: "https://twitter.com"

  },

  {
    img: thirdimage,
    name: "Lewis Ware",
    position: "Community Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    // social:[
    //  'https://linkedin.com/',
    //  'https://twitter.com'
    // ]
    icon: "https://linkedin.com/",
    icons: "https://twitter.com"
  },

  {
    img: fourthimage,
    name: "Holly Walker",
    position: "Receptionist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    // social:[
    //  'https://linkedin.com/',
    //  'https://twitter.com'
    // ]
    icon: "https://linkedin.com/",
    icons: "https://twitter.com"
  },

]

const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='container about' >
      <MainHeader subtitle="Established for imaginative minds to gather and collaborate.">
        Welcome to our co-working space, where imaginative minds converge to inspire and create.
        Join our vibrant community of artists, designers, writers, and entrepreneurs as we
        provide a dynamic environment for collaboration and innovation. Experience the synergy of
        shared ideas and unleash your creative potential in our inspiring workspace."

      </MainHeader>

      <div className='about-image'>
        <img src={asset.aboutimage} alt="" />
      </div>



      <div className='sec-03'>
        <SectionHead title="Unlock Your Creative Potential in our Inspiring Co-working Space"
          desc="Step into our beautifully designed co-working space, where natural light floods the open floor, igniting a sense of inspiration and productivity. With thoughtfully curated workstations, cozy collaborative areas, and state-of-the-art amenities, our space is crafted to fuel your creativity and cultivate meaningful connections. Join our community of like-minded individuals and discover a place where innovation thrives and ideas come to life."


        />
        <img src={aboutimage1} alt="" />
      </div>


      <div className='about-content'>
        <div>
          <SectionHead title="Our Team" desc="Our team is here to empower you. From our friendly receptionists to our experienced community managers, we provide support and guidance to ensure a smooth co-working experience. Let us be a catalyst for your success as you join our vibrant community." />
        </div>

        <div className='about-content-right' >
          {
            sectionThree.map(({ img, name, position, desc, icon, icons }) => {
              return <div>
                <div className='about-content-image'>
                  <img src={img} alt="" />
                </div>

                <div className='about-desc-right'>
                  <h3>{name}</h3>
                  <p>{position}</p>
                  <small>{desc}</small>

                  <div className='about-icon'>
                    <a href="" target='blank'>< CiLinkedin className='about-icon' /></a>
                    <a href="" target='blank'><FaXTwitter className='about-icon' /> </a>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>

      <div className='sec-04'>
        <div>
          <img src={sec_04_image} alt="" />
        </div>
        <div>
          <SectionHead title="Relax and Collaborate in Our Versatile Workspace" desc="Our flexible co-working space designed to inspire both relaxation and collaboration. Discover our inviting lounge area, where you can unwind in comfortable seating while engaging in casual conversations or brainstorming sessions with fellow members. Need a change of scenery? Grab a seat at our stylish bar and enjoy a refreshing beverage as you work. With a variety of seating options, we offer a dynamic environment that caters to your diverse needs. Embrace the perfect blend of productivity and comfort in our thoughtfully crafted workspace." />
        </div>
      </div>



      <div className="sec-05">
        <div className=' slider-about'>
          <Slider {...settings}>
          

            <div className='slider-01'>
            <img src={firstimage} alt="" />
            </div>

            <div className='slider-01'>
              <img src={secondimage} alt="" />
            </div>
            <div className='slider-01'>
              <img src={thirdimage} alt="" />
            </div>
            <div className='slider-01'>
                <img src={fourthimage} alt="" />
            </div>
            
          </Slider>
          </div>
      </div>

      <div className='sec-06'>
            <SectionHead  title="Ready to Join Our Inspiring Community?" desc="Take the next step towards unlocking your full potential by becoming a part of our vibrant coworking community. Connect with like-minded individuals, collaborate on exciting projects, and fuel your creativity in our dynamic workspace."/>
      

            <div className='about-btn'>
            <Link to="/contact" className="btn about-btns">Get Started</Link>
            </div>
      </div>

    </div>
  )
}

export default About