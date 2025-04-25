import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Home'; // Adjust if needed

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoute;
