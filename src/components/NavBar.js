import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { TbDoor } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";

function NavBar() {
  return (
    <>
        <nav className='sidebar'>
            <img src="/images/headshot.jpg" className='headshot' width='200px' alt="Website Logo"></img>

            <p><br></br>Hi, my name is Joel Strong and I am full stack software engineer. Welcome to my
                website!</p>


            <Link to="/"> <MdPerson/>  &ensp;<span className="nav-text">Home</span></Link>
            <Link to="/portfolio"><FaLaptopCode/> &ensp;<span className="nav-text">Portfolio</span></Link>
            <Link to="/resume"><IoDocument/> &ensp;<span className="nav-text">Resume</span></Link>
            <Link to="/gallery"><AiOutlinePicture /> &ensp;<span className="nav-text">Gallery</span></Link>
            <Link to="/officeDoor"> <TbDoor /> &ensp;<span className="nav-text">Office Door</span></Link>
            <Link to="/contact"> <MdEmail/> &ensp;<span className="nav-text">Contact</span></Link>

            <div style={{borderTop: "2px solid white", width: "90%", height: "0"}}/>

            <p><strong>Project Links:</strong></p>
            <a href="https://fragrancefreeresources.com" target="https://fragrancefreeresources.com">
                FragranceFreeResources.com
            </a>
            <a href="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout"
               target="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout">
                ML-Breakout
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

        </nav>
    </>
  );
}

export default NavBar;
