import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import Components, styles, media
import NavBar from './components/NavBar.js';
import './App.css';

import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import StaffPage from './pages/StaffPage.js';
import Contact from './pages/ContactPage.js';
import IdealConditionsPage from './pages/IdealConditionsPage.js';
import ResumePage from './pages/ResumePage.js';
import PortfolioPage from './pages/PortfolioPage.js';

import RentalHomesPage from './pages/RentalHomesPage.js';
import AddHomePageForm from './components/RentalHomes/AddHomePageForm.js';
import EditHomePageForm from './components/RentalHomes/EditHomePageForm.js';


function App() {

  const [home, setHomeToEdit] = useState([])

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
                    <Route path="/OrderPage" element={<OrderPage/>}/>
                    <Route path="/StaffPage" element={<StaffPage/>}/>
                    <Route path="/ContactPage" element={<Contact/>}/>
                    <Route path="/IdealConditionsPage" element={<IdealConditionsPage/>}/>
                    <Route path="/ResumePage" element={<ResumePage/>}/>
                    <Route path="/PortfolioPage" element={<PortfolioPage/>}/>

                    <Route path="/RentalHomesPage" element={<RentalHomesPage setHome={setHomeToEdit}/>} />
                    <Route path="/create" element={<AddHomePageForm />} /> 
                    <Route path="/update" element={<EditHomePageForm homeToEdit={home} />} />


                    {/*<Route path="/create" element={<AddHomePageForm />} />  */}
                    {/*<Route path="/update" element={<EditHomePageForm homeToEdit={home} />} />*/}
                </Routes>
              </section>
          </main>
          </div>

      </BrowserRouter>

    </>
  );
}

export default App;
