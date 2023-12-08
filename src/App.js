import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import Components, styles, media
import NavBar from './components/NavBar.js';

import logo from './logo.svg';
import './App.css';

import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import StaffPage from './pages/StaffPage.js';
import Contact from './pages/ContactPage.js';
import IdealConditionsPage from './pages/IdealConditionsPage.js';
import ResumePage from './pages/ResumePage.js';


import RentalHomesPage from './pages/RentalHomesPage.js';
import AddHomePageForm from './components/RentalHomes/AddHomePageForm.js';
import EditHomePageForm from './components/RentalHomes/EditHomePageForm.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my App Version 2!
        </p>
      </header>
    </div>
  );
}

export default App;
