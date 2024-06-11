import  { useState } from "react";

import "../assets/css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="">
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/chauffage">Chauffage</NavLink>
        </li>
        <li>
          <NavLink to="/isolation">Isolation</NavLink>
        </li>
        <li>
          <NavLink to="/solaire">Solaire</NavLink>
        </li>
        <li>
          <NavLink to="/chauffage">Chauffage</NavLink>
        </li>
        <li>
          <NavLink to="/aides-primes">Aides et Primes</NavLink>
    </li>
        <li>
          <NavLink to="/actualités">Actualités</NavLink>
        </li>
        <li>
          <NavLink to="/acces-pro">Accès pro</NavLink>
        </li>
      </ul>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};
export default NavBar ;