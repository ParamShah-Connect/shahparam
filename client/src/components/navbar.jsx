import { Link, NavLink } from "react-scroll";  
import { NavLink as RouterNavLink } from "react-router-dom";  
import "../styles/navbar.css";  

export const Navbar = () => {
  return (
    <>
      <div id="navbar" style={{ marginTop: "-60px" }}>
        <h1 id="name" style={{ fontFamily: "Verdana, sans-serif" }}>
          Param Shah
        </h1>

        <div id="navbar2">
          <Link to="projects" smooth={true} duration={500} className="navy">
            Projects
          </Link>
          <Link to="about" smooth={true} duration={500} className="navy">
            About
          </Link>
          <Link to="contact" smooth={true} duration={500} className="navy">
            Contact
          </Link>
          <Link to="skills" smooth={true} duration={500} className="navy">
            Skills
          </Link>

          <RouterNavLink to="/upload" className="navy">
            Upload
          </RouterNavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
