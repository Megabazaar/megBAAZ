import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-gold p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Mega Bazaar</div>
      <ul className="flex gap-6">
        <li><Link className="hover:text-yellow-400" to="/">Home</Link></li>
        <li><Link className="hover:text-yellow-400" to="/menu">Menu</Link></li>
        <li><Link className="hover:text-yellow-400" to="/grocery">Grocery</Link></li>
        <li><Link className="hover:text-yellow-400" to="/gallery">Gallery</Link></li>
        <li><Link className="hover:text-yellow-400" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}