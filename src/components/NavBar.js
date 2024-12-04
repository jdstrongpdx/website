import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaLaptopCode, FaRegFileCode } from "react-icons/fa";
import { TbDoor } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = ({ toggleMenu }) => {
    return (
        <>
            <button onClick={() => toggleMenu()}>
                <GiHamburgerMenu />
            </button>
        </>
    )
}

const Links = () => {

    return (
        <>
            <Link to="/"> <MdPerson/>  &ensp;<span className="nav-text">About Me</span></Link>
            <Link to="/skills"><FaRegFileCode/> &ensp;<span className="nav-text">Skills</span></Link>
            <Link to="/portfolio"><FaLaptopCode/> &ensp;<span className="nav-text">Portfolio</span></Link>
            <Link to="/resume"><IoDocument/> &ensp;<span className="nav-text">Resume & Certifications</span></Link>
            <Link to="/gallery"><AiOutlinePicture/> &ensp;<span className="nav-text">Gallery</span></Link>
            <Link to="/officeDoor"> <TbDoor /> &ensp;<span className="nav-text">Office Door</span></Link>
            <Link to="/contact"> <MdEmail/> &ensp;<span className="nav-text">Contact</span></Link>

            <div style={{borderTop: "2px solid white", width: "90%", height: "0"}}/>

            <div>
                <a href="https://www.linkedin.com/in/joel-strong/" target="https://www.linkedin.com/in/joel-strong/">
                    <img height="50" alt="LinkedIn logo" src="/logos/linkedin.png"/>
                </a>

                <a href="https://github.com/jdstrongpdx" target="https://github.com/jdstrongpdx">
                    <img height="50" alt="GitHub logo" src="/logos/github.png"/>
                </a>

            </div>
        </>
    )
}

function NavBar() {
    const [open, setOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const currentYear = new Date().getFullYear();

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth <= 700) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    const toggleMenu = () => {
        setOpen(!open);
    };

  return (
    <>
        <nav className='sidebar'>

            <img src="/images/headshot.jpg" className='headshot' width='200px' alt="Website Logo"></img>

            <p><br></br>Hi, my name is Joel Strong and I am full stack software engineer. Welcome to my
                website!</p>

            {windowWidth <= 700 && <HamburgerMenu toggleMenu={toggleMenu}/>}
            { open ? <Links/> : null}

            &copy; {currentYear} Joel Strong

        </nav>
    </>
  );
}

export default NavBar;
