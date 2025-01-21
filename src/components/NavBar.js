import React from "react";
import { Link } from "react-router-dom"; // Usamos Link para navegación en React
import logo from '../assets/Logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo a la izquierda */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="VideoApp Logo" className="logo-img" />
        </Link>
        
        {/* Botón de menú (para pantallas pequeñas) */}
        <button className="navbar-toggler" onClick={toggleMenu}>
          &#9776; {/* Símbolo de menú */}
        </button>

        {/* Menú de navegación */}
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/add-video" className="navbar-link">Agregar Video</Link>
        </div>
      </div>
    </nav>
  );
};

// Función para manejar el menú en pantallas pequeñas
const toggleMenu = () => {
  const menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('active'); // Activa o desactiva la visibilidad del menú
};

export default Navbar;
