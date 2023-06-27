import { NavLink } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Me</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    );
};

export default Nav;