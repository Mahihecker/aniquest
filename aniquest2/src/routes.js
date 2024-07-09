import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import EnterCode from './components/EnterCode/EnterCode';
import NewPassword from './components/NewPassword/NewPassword';
import LandingPage from './components/LandingPage/LandingPage';
import Startfreetrail from './components/startfreetrail/Startfreetrail';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Startfreetrail" element={<Startfreetrail />} /> 
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/EnterCode" element={<EnterCode />} />
      <Route path="/NewPassword" element={<NewPassword />} />
    </Routes>
  </Router>
);

export default AppRoutes;
