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

  const [home, setHomeToEdit] = useState([])

  return (
    <>
      <BrowserRouter>
      
          <header>
            <h1><img src="./logo192.png" className="App-logo" alt="Website Logo"></img> &emsp; Joel Strong </h1>
          </header>

          <NavBar />
          <div className='sidebarRight'></div>

          <div className="content">
          <main>

            <section>
                <Routes> 

                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/GalleryPage" element={<GalleryPage/>}/>
                    <Route path="/OrderPage" element={<OrderPage/>}/>
                    <Route path="/StaffPage" element={<StaffPage/>}/>
                    <Route path="/ContactPage" element={<Contact/>}/>
                    <Route path="/IdealConditionsPage" element={<IdealConditionsPage/>}/>
                    <Route path="/ResumePage" element={<ResumePage/>}/>

                    <Route path="/RentalHomesPage" element={<RentalHomesPage setHome={setHomeToEdit}/>} />
                    <Route path="/create" element={<AddHomePageForm />} /> 
                    <Route path="/update" element={<EditHomePageForm homeToEdit={home} />} />


                    {/*<Route path="/create" element={<AddHomePageForm />} />  */}
                    {/*<Route path="/update" element={<EditHomePageForm homeToEdit={home} />} />*/}
                </Routes>
              </section>
          </main>
          </div>

          <footer>
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
            
          </footer>

      </BrowserRouter>

    </>
  );
}

export default App;
