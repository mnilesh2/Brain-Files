import React from 'react'
import '../Home/Home.css'
import './Contact.css'
import img from '../Home/WhatsApp Image 2024-02-12 at 10.22.09 PM.jpeg'
import { FaSchool } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Slider from '../Slider/Slider';
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import '../Popup/Popup.css'

export default function Contact() {
    return (
        <div>
            <div className='formquery'>
                
                <div className='info'>
                    <div className='info1'>
                    <img src={img} alt="" />
                    <h4 className='name'>Devesh Dixit</h4>
                    <p>Phone - +91 8840553669</p>
                    <p>email- brainfilesllp@gmail.com</p>
                    <h4>Experience</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, corporis?</p>
                    </div>
                    <div className='info2'>
                    <img src={img} alt="" />
                    <h4 className='name'>Devesh Dixit</h4>
                    <p>Phone - +91 8840553669</p>
                    <p>email- brainfilesllp@gmail.com</p>
                    <h4>Experience</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, corporis?</p>
                    </div>
                    
                    
                    
                </div>
                
                
                <div className='query'>
                    <h4 className='queryh'>Query Form</h4>
                    <div className='name style'>
                        <h4>Name</h4>
                        <input placeholder='Type your name' className='input' type="text" />
                    </div>
                    <div className='email style'>
                        <h4>Enter email</h4>
                        <input placeholder='Type your email' className='input' type="email" />
                    </div>
                    <div className='number style'>
                        <h4>Phone Number</h4>
                        <input placeholder='Type your phone number' className='input' type="text" />
                    </div>
                    <div className='class style'>
                        <h4>Class</h4>
                        <input placeholder='Type your class' className='input' type="text" />
                    </div>
                    <div className='class style'>
                        <h4>Query</h4>
                        <textarea placeholder='Type your query' name="" id="" cols="55" rows="10"></textarea>
                    </div>
                    <div>
                    <button className='submitpopup'>Submit</button>
                </div>
                </div>
            </div>
            <div className='contactus' style={{ marginTop: "60px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "50px", textDecoration: "underline" }}>Contact Us</h1>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                    <div style={{ width: "40%" }}>
                        <img src={img} alt="" width="40%" />
                        <p style={{ width: "50%", padding: "10px", lineHeight: "1.3" }}>
                            "Experience the educational revolution with Brain Files! Join us and embark on your journey to success!"</p>
                        <p style={{ padding: "10px", width: "50%" }}>
                            <span style={{ fontSize: "large", fontWeight: "bold", marginBottom: "4px", marginTop: "4px" }}>Reach out to us</span> <br />
                            Get your questions answered about learning with Brain Files.
                        </p>
                        <div style={{ paddingLeft: "10px", paddingBottom: "4px" }}>
                            <CiPhone style={{ marginRight: "5px" }} />
                            <span style={{ fontWeight: "bold" }}>Call </span>
                            +91 8840553669
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
                            <CiMail style={{ marginRight: "5px" }} />
                            <span style={{ fontWeight: "bold" }}>eMail </span>
                            brainfilesllp@gmail.com
                        </div>
                    </div>
                    <div style={{ width: "42%" }}>
                        <p style={{ textAlign: "center", fontWeight: "bold", width: "80%", marginLeft: "10%", marginBottom: "8px" }}>Address</p>
                        <p style={{ width: "80%", marginLeft: "10%", textAlign: "center", marginBottom: "18px" }}>Brain Files LLP. 117/N/18, 1st Floor, Avon Market, Kakadeo, Kanpur Nagar, 208025</p>
                        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.3637236331692!2d80.29188177527921!3d26.47623137691007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c380ddc4e9dc1%3A0xc240100d0c205a4f!2sAvon%20Market%2C%20Ambedkar%20Nagar%2C%20Navin%20Nagar%2C%20Kakadeo%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707755702670!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <hr />
                <div className='footer'>
                    <p>© 2024 Brain Files LLP.</p>
                    <div>
                        <CiInstagram className='icon' />
                        <CiYoutube className='icon' />
                        <CiLinkedin className='icon' />
                        <CiFacebook className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}
