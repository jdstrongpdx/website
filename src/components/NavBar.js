import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaLaptopCode, FaCameraRetro, FaSprayCan } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

function NavBar() {
  return (
    <>
        <div className='sidebar'>
            <img src="/images/headshot.jpg" className='headshot' width='200px' alt="Website Logo"></img>
            <h1>Joel Strong </h1>

            <p>Hi, my name is Joel Strong and I am Junior Full Stack Software Engineer. Welcome to my personal
                website!</p>


            <Link to="/"> <MdPerson/> &ensp; Home</Link>
            <Link to="/ResumePage"><IoDocument/> &ensp; Resume</Link>
            <Link to="/PortfolioPage"><FaLaptopCode/> &ensp; Portfolio</Link>
            <Link to="/ContactPage"> <MdEmail/> &ensp; Contact</Link>
            <Link to="/GalleryPage"> <FaCameraRetro/> &ensp; Gallery</Link>

            <div style={{borderTop: "2px solid white", width: "90%", height: "0"}}/>

            <p><strong>Project Links:</strong></p>
            <a href="https://fragrancefreeresources.com" target="https://fragrancefreeresources.com">
                <FaSprayCan/> &ensp; FragranceFreeResources.com
            </a>
            <a href="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout"
               target="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout">
                <IoGameController/> &ensp; ML-Breakout
            </a>
            <div style={{borderTop: "2px solid white", width: "90%", height: "0"}}/>

            <div>
                <a href="https://www.linkedin.com/in/joel-strong/" target="https://www.linkedin.com/in/joel-strong/">
                    <img height="50" alt="LinkedIn logo" src="/logos/linkedin.png"/>
                </a>

                <a href="https://github.com/jdstrongpdx" target="https://github.com/jdstrongpdx">
                    <img height="50" alt="GitHub logo" src="/logos/github.png"/>
                </a>

            </div>

            &copy; 2024 Joel Strong

        </div>
    </>
  );
}

export default NavBar;
