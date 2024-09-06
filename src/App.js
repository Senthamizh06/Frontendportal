import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; 
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import DepartmentForm from './DepartmentForm';
import ResearchLabForm from './ResearchLabForm';
import UserForm from './UserForm';
import RoleMasterForm from './RoleMasterForm';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      
        <Route path="/departments" element={<DepartmentForm />} />
        <Route path="/research-lab" element={<ResearchLabForm />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/role-master" element={<RoleMasterForm />} />
        {/* Add more routes here if needed */}
      </Routes>
    </div>
  );
};

export default App;
