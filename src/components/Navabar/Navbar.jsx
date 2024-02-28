import React from "react";
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";
import img from '../Home/WhatsApp Image 2024-02-12 at 10.22.09 PM.jpeg'

function NavBar(){
    return(
        <div className="outer">
     <div className="nav">
        <div className="heading">
            <Link to="/"><img className="imglogo" src={img} alt="" /></Link>
        </div>
        
        <ul>
             
             <li><Link to="/">Home</Link></li>
             <li><Link to="/Resources">Resources</Link></li>
             <li><Link to="/Contact">Contact</Link></li>
             <li><Link to="/Login">Log in</Link></li>
         </ul>
       
         
        
    </div>
    <Outlet />
    </div>
    );
}

export default NavBar;