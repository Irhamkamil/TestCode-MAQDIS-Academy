import { HashLink } from "react-router-hash-link";

const NavItem = ({ to, children, onClick }) => (
  <li>
    <HashLink
      smooth
      to={to}
      onClick={onClick}
      className="hover:text-yellow-600 transition-colors duration-200"
    >
      {children}
    </HashLink>
  </li>
);

export default NavItem;
