import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav class="sidebar">
        <Link to="/">Home</Link>
        <Link to="/ResumePage">Resume</Link>
        <Link to="/GalleryPage">Gallery</Link>

        <Link to="/IdealConditionsPage">IdealConditions</Link>
        <Link to="/RentalHomesPage">Rental Homes</Link>
    </nav>
  );
}

export default NavBar;
