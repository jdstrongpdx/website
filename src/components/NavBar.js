import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

function NavBar() {
  return (
    <>
    <div className='sidebar'>
    <img src="./images/headshot.jpg" className='headshot' alt="Website Logo"></img>
    <h1>Joel Strong </h1>

    <p>Hi, my name is Joel Strong and I am aspiring Full Stack Software Engineer.  Weclome to my personal website!</p>



        <Link to="/"> <MdPerson /> &ensp; About Me</Link>
        <Link to="/ResumePage"><IoDocument /> &ensp; Resume</Link>
        <Link to="/PortfolioPage"><FaLaptopCode /> &ensp; Portfolio</Link>
        <Link to="/ContactPage"> <MdEmail /> &ensp; Contact</Link>

    <p>

      <a href="https://www.linkedin.com/in/joel-strong/" target="https://www.linkedin.com/in/joel-strong/">
        <img height="50" alt="LinkedIn logo" src="./images/LinkedIn.png"/> 
        </a>

        <a href="https://github.com/jdstrongpdx" target="https://github.com/jdstrongpdx">
        <img height="50" alt="GitHub logo" src="./images/GitHub_Logo.png"/> 
        </a>

        <a href="https://leetcode.com/jdstrongpdx/" target="https://leetcode.com/jdstrongpdx/">
        <img height="50" alt="Leetcode logo" src="./images/LeetCode_logo.png"/> 
        </a>

        <a href="https://hyperskill.org/profile/404595637" target="https://hyperskill.org/profile/404595637">
        <img height="50" alt="Hyperskill logo" src="./images/Hyperskill.jpg"/> 
        </a>

        <br></br>
        &copy; 2023 Joel Strong

      </p>
    </div>
    </>
  );
}

export default NavBar;
