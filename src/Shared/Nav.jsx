import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineSolution, AiFillHeart } from "react-icons/ai";
import { BiCodeAlt, BiSolidMessageRoundedDots } from "react-icons/bi";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-link">
        <NavLink to="/">
          <AiFillHome className="icon"></AiFillHome>
          <span>Home</span>
        </NavLink>
        <NavLink to="/about">
          <AiOutlineSolution className="icon"></AiOutlineSolution>
          <span>About Me</span>
        </NavLink>
        <NavLink to="/services">
          <BiCodeAlt className="icon"></BiCodeAlt>
          <span>Services</span>
        </NavLink>
        <NavLink to="/portfolio">
          <AiFillHeart className="icon"></AiFillHeart>
          <span>Portfolio</span>
        </NavLink>
        <NavLink to="/contact">
          <BiSolidMessageRoundedDots className="icon"></BiSolidMessageRoundedDots>
          <span>Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
