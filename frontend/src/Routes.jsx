import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import AddWord from './components/Addword';

const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddWord />} />
      </Routes>
    </div>
   );
}
 
export default RoutePage;