import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaLaptopCode, FaCameraRetro, FaSprayCan } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

function NavBar() {
  return (
    <>
    <div className='sidebar'>
    <img src="./images/headshot.jpg" className='headshot' width='200px' alt="Website Logo"></img>
    <h1>Joel Strong </h1>

    <p>Hi, my name is Joel Strong and I am Junior Full Stack Software Engineer.  Welcome to my personal website!</p>



        <Link to="/"> <MdPerson /> &ensp; Home</Link>
        <Link to="/ResumePage"><IoDocument /> &ensp; Resume</Link>
        <Link to="/PortfolioPage"><FaLaptopCode /> &ensp; Portfolio</Link>
        <Link to="/IdealConditionsPage"> <TiWeatherPartlySunny /> &ensp; Ideal Conditions App</Link>
        <a href="https://fragrancefreeresources.com" target="https://fragrancefreeresources.com" rel="noopener noreferrer"><FaSprayCan />&ensp; FragranceFreeResources.com</a>
        <Link to="/ContactPage"> <MdEmail /> &ensp; Contact</Link>
        <Link to="/GalleryPage"> <FaCameraRetro /> &ensp; Gallery</Link>


        <div>
        <a href="https://www.linkedin.com/in/joel-strong/" target="https://www.linkedin.com/in/joel-strong/">
        <img height="50" alt="LinkedIn logo" src="./logos/linkedin.png"/> 
        </a>

        <a href="https://github.com/jdstrongpdx" target="https://github.com/jdstrongpdx">
        <img height="50" alt="GitHub logo" src="./logos/github.png"/> 
        </a>

        </div>

        &copy; 2024 Joel Strong

    </div>
    </>
  );
}

export default NavBar;
