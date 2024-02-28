import React from 'react';
// import '../Navabar/Navbar.css';
import '../Home/Home.css';
import './Pyq.css';
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


function Pyq() {
    return (
        <>

            <div>
                <h1 className='heading-h1'>Brain Files Resources</h1>
                {/* <marquee direc>Previous year paper</marquee> */}
                {/* <marquee  direction="right">Previous year paper</marquee> */}


                <div className='mani'>
                    <h2 style={{ marginBottom: '20px', marginLeft:'100px' }} ><u>PYQ,s</u></h2>
                    <ul className="style">



                        <li>JEE ADVANCE 2023
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2023_1_English.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2023_2_English.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2022
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2022_1_English.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2022_2_English.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2021
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2021_1_English.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2021_2_English.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2020
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2020_1_English.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2020_2_English.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2019
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2019_1_English.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2019_2_English.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2018
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2018_1.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2018_2.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2017
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2017_1.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2017_2.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2016
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2016_1.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2016_2.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>
                        <li>JEE ADVANCE 2015
                            <ul>
                                <li><a href="https://jeeadv.ac.in/past_qps/2015_1.pdf" target="_blank">paper 1</a></li>
                                <li><a href="https://jeeadv.ac.in/past_qps/2015_2.pdf" target="_blank">paper 2</a></li>
                            </ul>

                        </li>


                    </ul>

                </div>
                {/* <div>
            <li><ul>
                jee mains 2023
            </ul></li>
        </div> */}
                {/* <div className="right">
          <h2> <u>Books</u></h2>
          <ul className="style">
            <li><a href="https://drive.google.com/file/d/1cpZZt42efK-vyby2m33Z0Wa9rTg43rKr/view?pli=1" target="_blank">Book-1</a></li>
            <li><a href="resource2_link">Book-2</a></li>
            <li><a href="resource3_link">Book-3</a></li>
            {/* Add more resources as needed */}
                {/* </div></div></ul> */}

                {/* //</div> */}
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
        </>



    )
}

export default Pyq;
