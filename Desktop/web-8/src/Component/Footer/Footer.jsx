import React from 'react'
import '../../styles/Footer.css'
import { asset } from '../../Assets/asset'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className=' container footer'>
            <div className='footer-container'>

                <article className='content-one'>
                    <img src={asset.logo} alt="" />

                    <div className='medias'>
                        <a href=""><CiFacebook className='footer-icon' /></a>
                        <a href=""><FaInstagram className='footer-icon' /></a>
                        <a href=""><FaXTwitter className='footer-icon' /></a>
                        <a href=""><SlSocialLinkedin className='footer-icon' /></a>
                    </div>
                    <div>
                        <h2>Get The Latest News</h2>

                        <div className='subscribe'>
                            <input type="text" placeholder='Subscribe' />
                            <button>Subscribe</button>
                        </div>
                    </div>

                </article>

                <div className='foot'>
                    <article className='content'>
                        <h2>Pages</h2>

                        <div className='footer-links'>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Service</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                    </article>

                    <article className='content'>
                        <h2>Utility Pages</h2>
                        <Link to="">404</Link>
                        <Link to="">Password Protected</Link>
                        <Link to="">Legal</Link>
                        <Link to="">Style</Link>
                        <Link to="">License</Link>
                        <Link to="">Changelog</Link>
                    </article>

                </div>
            </div>

        </div>
    )
}

export default Footer