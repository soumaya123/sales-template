// AllRoute.js or AllRoute.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../HomePage'; // Adjust the path as necessary

const AllRoute = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
