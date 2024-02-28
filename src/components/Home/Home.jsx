import React from 'react'
import "./Home.css";
import img from './WhatsApp Image 2024-02-12 at 10.22.09 PM.jpeg'
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
import Popup from '../Popup/Popup';

function Home() {
  return (
    <div className='home'>
      <Popup/>
      <div style={{marginTop:"20px"}}>
        <Slider/>
      </div>
      <div className='aboutus'>
        <div className='leftdiv'>
          <h1 > <span style={{ fontSize: "25px" }}>Know About</span> <span style={{ fontSize: "40px" }}>BRAIN FILES</span></h1>
          <p className='about'>BrainFiles is a premier coaching institute renowned for its exceptional preparation programs catering to a wide range of competitive exams and educational streams. Specializing in JEE (Main+Advanced), JEE (Main), Pre-Medical (NEET-UG).

            At BrainFiles, our primary focus is on nurturing a robust foundation of knowledge and conceptual understanding among our students, ensuring their success in both competitive exams and board-level education. We provide a conducive environment that fosters holistic learning and personal growth, empowering students to achieve their career aspirations.

            Our core values of Determination, Honesty, Authenticity, Integrity, Devotion, Humanism, and Social Ethics are deeply ingrained in our academic programs. We are dedicated to not only academic excellence but also to the overall development of our students, both socially and culturally.

            With a team of highly qualified and experienced faculty members, BrainFiles is committed to providing unwavering support to students, ensuring their holistic development and success. We offer personalized attention, value-based education, and abundant resources to our students, aiming to instill ethical and responsible leadership qualities in them.
          </p>
        </div>
        <div className='rightdiv' style={{ textAlign: "center" }}>
          <div className='rigthdivcard'>
            <SlChemistry className='icons fa-4x' />
            <h4 style={{ color: "blue", fontSize: "20px" }}>IIT JEE</h4>
            <p >1000+ enrolled</p>
          </div>
          <div className='rigthdivcard'>
            <FaUserDoctor className='icons' />
            <h4 style={{ color: "blue", fontSize: "20px" }}>NEET-UG</h4>
            <p >1000+ enrolled</p>
          </div>
          <div className='rigthdivcard'>
            <FaSchool className='icons' />
            <h4 style={{ color: "blue", fontSize: "20px" }}>Board Exam</h4>
            <p >1000+ enrolled</p>
          </div>
        </div>
      </div>
      <h1 style={{ marginTop: "60px", marginBottom: "20px", marginLeft: "9%", fontSize: "40px", color: "blue" }}>Facilities</h1>
      <div className='facilities'>

        <div className=' about cardfacility'>
          <h4 style={{ color: "blue", fontSize: "30px" }}>One-to-One Mentoring</h4>
          <p style={{ textAlign: "left" }}>One of the most valuable assets Brain files offers is  personalised mentoring. In a one-to-one mentoring setup, students receive individualised attention from experienced educators, allowing them to address their specific learning needs, clarify doubts, and tailor their study strategies.</p>
        </div>
        <div style={{ border: "1px solid black", height: "210px" }}></div>
        <div className=' about cardfacility'>
          <h4 style={{ color: "blue", fontSize: "30px", lineHeight: "1", marginBottom: "8px" }}>Scholarship on Coaching Fees Based on Merit List</h4>
          <p style={{ textAlign: "left" }}>Brain Files Coaching Institute extends scholarships to deserving candidates based on their performance in entrance examinations or merit assessments. These scholarships are designed to alleviate the financial constraints associated with coaching fees, thereby ensuring that quality education remains accessible to all, regardless of socioeconomic backgrounds.</p>
        </div>
      </div>
      <div className='contactus' style={{ marginTop: "60px"}}>
        <h1 style={{ textAlign: "center", marginBottom: "50px", textDecoration: "underline" }}>Contact Us</h1>
        <div style={{ display: "flex", justifyContent: "center" ,marginBottom:"10px"}}>
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
          <CiInstagram className='icon'/>
          <CiYoutube className='icon'/>
          <CiLinkedin className='icon'/>
          <CiFacebook className='icon'/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home