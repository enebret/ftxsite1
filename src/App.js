import * as React from 'react';

import './App.css';
import Body from './components/body.jsx';
import Form from './components/login.js';
import Signup from './components/Signup.jsx';
import AboutUs from './components/AboutUs.js';
import Investment from './components/Investment.js';
import ContactUs from './components/ContactUs.js';
import Faq from './components/Faq.js';
import Partnership from './components/Partnership';
import Platform from './components/Platform.js';

import SignT from './components/SignT.js';
import { Routes, Route, Link } from "react-router-dom";
//errors are due to js file extension
/* eslint no-unused-vars : "off" */
function App() {
/*logic lives here*/

  return (
        
        <div>
          <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="form" element={<Form />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="investment" element={<Investment />}></Route>
          <Route path="partnership" element={<Partnership />}></Route>
          <Route path="platform" element={<Platform />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          
          <Route path="faq" element={<Faq />}></Route>
          <Route path="SignT" element={<SignT />}></Route>
          
        </Routes>
          
        </div>
    
  );
}

export default App;
