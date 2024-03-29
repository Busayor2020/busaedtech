// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";
import PropTypes from 'prop-types';

const MobileNavLinks = ({ setToggle, href, link }) => {
 return (
   <li className="list-none cursor-pointer mr-8">
     <Link
       to={href}
       spy={true}
       smooth={true}
       duration={500}
       offset={-50}
       className="font-bold transition-all duration-300"
       onClick={(prev) => setToggle(!prev)}
     >
       {link}
     </Link>
   </li>
 );
};

MobileNavLinks.propTypes = {
 setToggle: PropTypes.func.isRequired,
 href: PropTypes.string.isRequired,
 link: PropTypes.string.isRequired,
};

export default MobileNavLinks;