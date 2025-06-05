import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import GroceryPage from './GroceryPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/grocery' element={<GroceryPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}