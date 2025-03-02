import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import AddProducts from './components/AddProducts';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Routes>
            {/* Define Routes for each page */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addProducts" element={<AddProducts />} />
            {/* Default route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
