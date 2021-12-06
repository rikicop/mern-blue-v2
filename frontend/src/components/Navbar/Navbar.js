import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>TECNEMAS</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            {/* Icon */}
            {/* <i className="fas fa-shopping-cart"></i> */}
            <span>Principal</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="cart__link">
            <span>Servicios</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="cart__link">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="cart__link">
            <span>Equipo</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="cart__link">
            <span>Contacto</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="sign__link">
            <span>Sign in</span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
