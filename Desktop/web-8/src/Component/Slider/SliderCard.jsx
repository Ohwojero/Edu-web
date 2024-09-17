import React from 'react'
import '../../styles/slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiContentful } from "react-icons/si";
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'
import image4 from '../../Assets/image4.jpg'
import image5 from '../../Assets/image5.jpg'
import image6 from '../../Assets/image6.jpeg'
import image7 from '../../Assets/image7.webp'
import { SiMaterialdesignicons } from "react-icons/si";
import { SiContentstack } from "react-icons/si";
import { SiIcon } from "react-icons/si";
import { SiNordicsemiconductor } from "react-icons/si";
import { SiConsul } from "react-icons/si";



const data = [

    {
        icon: <SiContentful />,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        img: image2,
        text: "Ohwojero Nelson",
        position: "Director"
    },
    {
        icon: <SiMaterialdesignicons />,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        img: image3,
        text: "Ohwojero Godstime",
        position: "Tech COn"
    },
    {
        icon: <SiContentstack />,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        img: image4,
        text: "Ohwojero Rachel",
        position: "CEO RAY Empire"
    },
    {
        icon: <SiIcon />,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        img: image5,
        text: "Ohwojero Wesley",
        position: "Manager E.O"
    },
    {
        icon: <SiNordicsemiconductor />,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        img: image6,
        text: "Ohwojero Rosemary",
        position: "CEO Fashion"
    },
    {
        icon: <SiConsul />,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        img: image7,
        text: "Ohwojero clinton",
        position: "CEO Music"
    }

]

const SliderCard = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className='slider-container'>
            <div className='slider'>
                <Slider {...settings}>
                    {
                        data.map(({ icon, desc, img, text, position }) => {
                            return <div className='try'>

                                <div className='card'>
                                    <div className='card-icon'>{icon}</div>
                                    <p>{desc}</p>

                                    <div className='card-body'>
                                        <img src={img} alt="" />

                                        <div>
                                            <p>{text}</p>
                                            <small>{position}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default SliderCard


