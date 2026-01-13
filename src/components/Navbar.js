import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ShoppingCart, LayoutDashboard, User, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>E-Commerce Store</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/"><Home size={20} /> <span>Home</span></Link></li>
        <li><Link to="/cart"><ShoppingCart size={20} /> <span>Cart ({getCartCount()})</span></Link></li>
        <li><Link to="/dashboard"><LayoutDashboard size={20} /> <span>Dashboard</span></Link></li>
        <li><Link to="/profile"><User size={20} /> <span>Profile</span></Link></li>
        <li><Link to="/settings"><SettingsIcon size={20} /> <span>Settings</span></Link></li>
        <li><button onClick={handleLogout} className="logout-btn"><LogOut size={18} /> <span>Logout</span></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;