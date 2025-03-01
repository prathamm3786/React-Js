import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="footer-logo">
                                <img src="src/img/logo.png" alt="" />
                                <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                            </div>
                            <div className="footer-content">
                                <h5><CiLocationOn style={{ color: '#64b496', fontSize: '25px' }} /> 51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</h5>
                                <h5><RiMailSendLine style={{ color: '#64b496', fontSize: '25px' }} />  example@email.com</h5>
                                <h5><IoCallOutline style={{ color: '#64b496', fontSize: '25px' }} /> +91 123 4567890</h5>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer-compny">
                                <h4>Company</h4>
                                <ul>
                                    <li><span>About Us</span></li>
                                    <li><span>Delivery Information</span></li>
                                    <li><span>Privacy Policy</span></li>
                                    <li><span>Terms & Conditions</span></li>
                                    <li><span>contact Us</span></li>
                                    <li><span>Support Center</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer-compny">
                                <h4>Category</h4>
                                <ul>
                                    <li><span>Dairy & Bakery</span></li>
                                    <li><span>Fruits & Vegetable</span></li>
                                    <li><span>Snack & Spice</span></li>
                                    <li><span>Juice & Drinks</span></li>
                                    <li><span>Chicken & Meat</span></li>
                                    <li><span>Fast Food</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="Subscribe col-lg-4 col-sm-12 mt-3">
                            <h3>Subscribe Our Newsletter</h3>
                            <input type="text" className='form-control' placeholder='search here...' />
                            <div className="arrow">
                                <BsFillSendArrowUpFill />
                            </div>
                            <div className="icon d-flex">

                                <p className='me-3 mt-4 '>
                                    <FaFacebookF />
                                </p>
                                <p className='me-3 mt-4 '>
                                    <FaXTwitter />
                                </p>
                                <p className='me-3 mt-4 '>
                                    <FaDribbble />
                                </p>
                                <p className='me-3 mt-4 '>
                                    <FaInstagram />

                                </p>

                            </div>
                            <div className="image d-flex">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg" alt="" />
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg" alt="" />
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg" alt="" />
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/4.jpg" alt="" />
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
