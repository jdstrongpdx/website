import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IoDocument, IoHome } from "react-icons/io5";
import { FaLaptopCode, FaRegFileCode } from "react-icons/fa";
import { TbDoor } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu: React.FC<{ toggleMenu: () => void}> = ({ toggleMenu }) => {
    return (
        <>
            <button onClick={() => toggleMenu()}>
                <GiHamburgerMenu />
            </button>
        </>
    )
}

const Links = () => {
    const linkStyle = {
        display: 'inline-block',
        margin: '5px',
        textDecoration: 'none',
    };

    const activeLinkStyle = {
        ...linkStyle,
        fontWeight: 'bold',
        color: '#ffdb64' +
            '',
        textDecoration: 'underline',
        textUnderlineOffset: '4px'
    };

    return (
        <>
{/*            <NavLink
                to="/"
                end
                className="nav-link"
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                <IoHome /> <span className="nav-text">Home</span>
            </NavLink>*/}
            <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                <FaRegFileCode /> <span className="nav-text">Skills</span>
            </NavLink>
            <NavLink
                to="/portfolio/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                <FaLaptopCode /> <span className="nav-text">Portfolio</span>
            </NavLink>
            <NavLink
                to="/resume"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                <IoDocument /> <span className="nav-text">Resume & Certificates</span>
            </NavLink>
            <NavLink
                to="/gallery"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                <AiOutlinePicture /> <span className="nav-text">Gallery</span>
            </NavLink>
            <NavLink
                to="/officeDoor"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                <TbDoor /> <span className="nav-text">Office Door</span>
            </NavLink>
            <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                <MdEmail /> <span className="nav-text">Contact</span>
            </NavLink>

            <div style={{borderTop: "2px solid white", width: "90%", height: "0"}}/>

            <div>
                <a href="https://www.linkedin.com/in/joel-strong/" target="https://www.linkedin.com/in/joel-strong/">
                    <img height="50" alt="LinkedIn logo" src="/logos/linkedin.png"/>
                </a>

                <a href="https://github.com/jdstrongpdx" target="https://github.com/jdstrongpdx">
                    <img height="50" alt="GitHub logo" src="/logos/github.png"/>
                </a>

                <a href="https://learn.microsoft.com/en-us/users/jdstrongpdx/transcript" target="https://learn.microsoft.com/en-us/users/jdstrongpdx/transcript">
                    <img height="50" alt="Microsoft logo" src="/logos/microsoft.png"/>
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

            <h3 style={{marginTop: '10px', marginBottom: '10px'}}>Joel Strong</h3>
            <h5 style={{marginTop: '10px'}}>Full Stack Software Engineer</h5>

            {windowWidth <= 700 && <HamburgerMenu toggleMenu={toggleMenu}/>}
            {open ? <Links/> : null}

            &copy; {currentYear} Joel Strong

        </nav>
    </>
  );
}

export default NavBar;
