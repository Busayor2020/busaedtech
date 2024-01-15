// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-scroll";

const NavLink = ({ href, link }) => {
 return (
   <li className="list-none cursor-pointer mr-8">
     <Link
       to={href}
       spy={true}
       smooth={true}
       duration={500}
       offset={-50}
       className="font-bold transition-all duration-300"
     >
       {link}
     </Link>
   </li>
 );
};

NavLink.propTypes = {
 href: PropTypes.string.isRequired,
 link: PropTypes.string.isRequired,
};

export default NavLink;