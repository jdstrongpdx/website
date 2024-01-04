import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import Components, styles, media
import NavBar from './components/NavBar.js';
import './App.css';

import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import Contact from './pages/ContactPage.js';
import IdealConditionsPage from './pages/IdealConditionsPage.js';
import ResumePage from './pages/ResumePage.js';
import PortfolioPage from './pages/PortfolioPage.js';


function App() {

  return (
    <>
      <BrowserRouter>

          <NavBar />

          <div className="content">
          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/GalleryPage" element={<GalleryPage/>}/>
                    <Route path="/ContactPage" element={<Contact/>}/>
                    <Route path="/IdealConditionsPage" element={<IdealConditionsPage/>}/>
                    <Route path="/ResumePage" element={<ResumePage/>}/>
                    <Route path="/PortfolioPage" element={<PortfolioPage/>}/>
                </Routes>
              </section>
          </main>
          </div>

      </BrowserRouter>

    </>
  );
}

export default App;
