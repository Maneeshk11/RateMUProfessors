import { Link } from "react-router-dom";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import logoMain from "/home/maneesh/Desktop/rateprofs/client/src/assets/logoMain.svg"

const NavBar = () =>{
    return (
    <div className="navhead">
        <div className="compName">
            {/* <h1>RATEMUPROFESSORS</h1> */}
            <img src={logoMain} alt="" className="logoMain"/>
        </div>
        <div className="navLinks">
            <li>
                <Link to="/">Home</Link>
            </li>
            {/* <li>
                <Link to="/">Schools</Link>
            </li> */}
            <div className="dropdown">
                <button>Schools</button>
                <div class="dropdown-content">
                    <a href=""><Link to="/schoolofengineering">School of Engineering</Link></a>
                    <a href=""><Link to="/schooloflaw">School of Law</Link></a>
                    <a href=""><Link to="/schoolofmanagement">School of Management</Link></a>
                    <a href=""><Link to="/schoolofeducation">School of Education</Link></a>
                </div>
            </div>
            
            <li>
                <Link to="/aboutus">About Us</Link>
            </li>
            <li className="login">
                <Link to="/login">Login</Link>
            </li>
            <li className="login">
                <Link to="/login">Sign Up</Link>
            </li>
        </div>
        
    </div>
    
    );
  }
  export default NavBar;