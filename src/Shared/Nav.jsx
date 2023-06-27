import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineSolution, AiFillHeart } from "react-icons/ai";
import { BiCodeAlt, BiSolidMessageRoundedDots } from "react-icons/bi";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <AiFillHome className="icon"></AiFillHome>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <AiOutlineSolution className="icon"></AiOutlineSolution>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <BiCodeAlt className="icon"></BiCodeAlt>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <AiFillHeart className="icon"></AiFillHeart>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <BiSolidMessageRoundedDots className="icon"></BiSolidMessageRoundedDots>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
