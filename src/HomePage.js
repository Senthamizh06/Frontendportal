import React from 'react';
import Navbar from './Navbar';  // Import the Navbar component
import './HomePage.css';  // We will create this file later

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content.</p>
      </div>
    </div>
  );
};

export default HomePage;
