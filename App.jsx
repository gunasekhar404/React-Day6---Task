import React from 'react';
import TopBar from './components/TopBar';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity'; 
import Career from './components/Career';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar/>
        <br></br>
        <Routes>
          <Route path='/all' element={<All />} />
          <Route path='/fullstackdevelopment' element={<FullStackDevelopment />} />
          <Route path='/datascience' element={<DataScience />} />
          <Route path='/cybersecurity' element={<CyberSecurity />} />
          <Route path='/career' element={<Career />} />
          <Route path='*' element={<Navigate to='/all' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
