import React from 'react'
import '../../styles/Plans.css'
import { GiConcentricCrescents } from "react-icons/gi";
import { GiControlTower } from "react-icons/gi";
import { SiConstruct3 } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
const planList = [

    {
        icon: <GiConcentricCrescents />,
        title: "Hot Desk -$100/mo",
        desc: "Embrace flexibility with our Hot Desk plan. Settle into any available workspace in our open, collaborative area, and enjoy the freedom to work alongside different professionals each day. With access to our amenities and a vibrant atmosphere, the Hot Desk option is perfect for freelancers, digital nomads, and anyone seeking a dynamic workspace.",
        path: "/contact"
    },

    {
        icon: <GiControlTower />,
        title: "Permanent Desk - $300/mo",
        desc: "Make our co-working space your home away from home with our Permanent Desk plan. Enjoy the convenience of a dedicated desk that is exclusively yours, allowing you to personalize your space and keep your belongings secure. This option is ideal for individuals who prefer consistency and require a fixed workspace to focus and thrive.",
        path: "/contact",
    },



    {
        icon: <SiConstruct3 />,
        title: "Corporate Office -$1000/mo",
        desc: "Elevate your team's productivity and collaboration with our Corporate plan. Tailored for larger organizations, this package offers dedicated office spaces that can accommodate your entire team. Enjoy the benefits of a fully equipped workspace, access to meeting rooms, and the opportunity to foster a strong sense of community among your employees. Experience a seamless blend of privacy, professionalism, and the vibrant energy of our co-working environment.",
        path: "/contact"
    }
]

const Plans = () => {
    return (
        <div className='container plans'>
            <div className='plan-container'>
                <div className="plan-first-section">
                    <div className="plan-first-section-left">
                        <h2>Flexible Plans to Suit Your Unique Needs</h2>
                    </div>
                    <div className="plan-first-section-right">
                        <p>We understand that every individual and business is unique, which is why we offer a range of plans tailored to meet your specific requirements.
                            Choose the option that best suits your work style and enjoy the benefits of our co-working community.</p>
                    </div>
                </div>

                <div className='plan-second-section'>
                    {
                        planList.map(({icon,title,desc,path})=>{
                            return <div className='plan-card'>
                                    <div className='plan-icon'>{icon}</div>
                                    <h2>{title}</h2>
                                    <small>{desc}</small>

                                    <div className='plan-btn'>
                                        <Link to="/contact" className='btn plan-btns'>Get In Touch <IoIosArrowRoundForward className='arrow-icon'/></Link>
                                    </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Plans