import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/ContactPage';
import IdealConditionsPage from './pages/IdealConditionsPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import OfficeDoor from "./pages/OfficeDoor";
import Format from "./components/Format";
import SkillsPage from './pages/SkillsPage';

import Ffr from "./components/Projects/Ffr"
import PortfolioLayout from "./components/PortfolioLayout";
import NotFoundPage from "./pages/NotFoundPage";
import Blockchain from "./components/Projects/Blockchain";
import NetworkMonitor from "./components/Projects/NetworkMonitor";
import GcpApi from "./components/Projects/GcpApi";
import Mlb from "./components/Projects/Mlb";
import PersonalWebsite from "./components/Projects/PersonalWebsite";
import LittleLemon from "./components/Projects/LittleLemon";
import IdealConditions from "./components/Projects/IdealConditions";
import UserManager from "./components/Projects/UserManager";
import LLMobile from "./components/Projects/LLMobile";
import Actuli from "./components/Projects/Actuli";
import ScrollToTop from "./utils/ScrollToTop";

function App() {

  return (
    <>
          <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route element={<Format />} >
                        <Route path="/" element={<SkillsPage/>}/>
                        {/*<Route path="/skills" element={<SkillsPage/>}/>*/}
                        <Route path="/gallery" element={<GalleryPage/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/idealConditions" element={<IdealConditionsPage/>}/>
                        <Route path="/resume" element={<ResumePage/>}/>
                        <Route path="portfolio" element={<PortfolioLayout />}>
                            <Route index element={<PortfolioPage />} />
                            <Route path="actuli" element={<Actuli />} />
                            <Route path="llmobile" element={<LLMobile />} />
                            <Route path="usermanager" element={<UserManager />} />
                            <Route path="fragrancefreeresources" element={<Ffr />} />
                            <Route path="littlelemon" element={<LittleLemon />} />
                            <Route path="jdstrongpdx" element={<PersonalWebsite />} />
                            <Route path="mlbreakout" element={<Mlb />} />
                            <Route path="gcpapi" element={<GcpApi />} />
                            <Route path="idealconditions" element={<IdealConditions />} />
                            <Route path="networkmonitor" element={<NetworkMonitor />} />
                            <Route path="blockchain" element={<Blockchain />} />
                        </Route>
                        <Route path="/officeDoor" element={<OfficeDoor/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                </Route>
              </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
