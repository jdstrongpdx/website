import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div className='sidebar'>
    <img src="./logo192.png" className='certificate' alt="Website Logo"></img>
    <h1>Joel Strong </h1>

    <p>Hi, my name is Joel Strong and I am aspiring Full Stack Software Engineer.  Weclome to my personal website!</p>


    <nav>
        <Link to="/">About Me</Link>
        <p>Portfolio</p>
        <Link to="/ResumePage">Resume</Link>
        <Link to="/GalleryPage">Gallery</Link>
        <Link to="/ContactPage">Contact</Link>

        <Link to="/IdealConditionsPage">IdealConditions</Link>
        <Link to="/RentalHomesPage">Rental Homes</Link>
    </nav>

    <p>

      <a href="https://www.linkedin.com/in/joel-strong/" target="https://www.linkedin.com/in/joel-strong/">
        <img height="50" alt="LinkedIn logo" src="./images/LinkedIn.png"/> 
        </a>

        &emsp;
        <a href="https://github.com/jdstrongpdx" target="https://github.com/jdstrongpdx">
        <img height="50" alt="GitHub logo" src="./images/GitHub_Logo.png"/> 
        </a>

        &emsp;
        <a href="https://leetcode.com/jdstrongpdx/" target="https://leetcode.com/jdstrongpdx/">
        <img height="50" alt="Leetcode logo" src="./images/LeetCode_logo.png"/> 
        </a>

        &emsp;
        <a href="https://hyperskill.org/profile/404595637" target="https://hyperskill.org/profile/404595637">
        <img height="50" alt="Hyperskill logo" src="./images/Hyperskill.jpg"/> 
        </a>

        &emsp;
        &copy; 2023 Joel Strong

      </p>
    </div>
    </>
  );
}

export default NavBar;
