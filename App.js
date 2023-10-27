import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Navigation from './Navigation';
import LoginSuccess from './LoginSuccess';
import SignSuccess from './SignSuccess';
import Signout from './Signout';
import ThankYouPage from './Thankyoupage'; // Import the ThankYouPage component

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/success' element={<LoginSuccess />} />
      <Route path='/signsuccess' element={<SignSuccess />} />
      <Route path='/signout' element={<Signout />} />
      <Route path='/thank-you' element={<ThankYouPage />} /> {/* Add a route for the "thank you" page */}
    </Routes>
  );
}

export default App;
