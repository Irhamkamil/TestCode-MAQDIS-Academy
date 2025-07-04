import { useEffect, useState, useCallback } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItem from "./NavItem";

const Navbar = () => {
  const useScrollPosition = (threshold = 50) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
      setIsScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return isScrolled;
  };

  const scrolled = useScrollPosition(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-md"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <HashLink
          smooth
          to="#header"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <img src="/logo.png" alt="Logo" className="w-32" />
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-yellow-500  font-semibold">
          <NavItem to="#aboutSection" onClick={closeMenu}>
            About
          </NavItem>
          <NavItem to="#testimoniSection" onClick={closeMenu}>
            Testimoni
          </NavItem>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isVisible && (
        <div
          className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col space-y-4 px-6 py-4 text-yellow-500 font-semibold">
            <NavItem to="#aboutSection" onClick={closeMenu}>
              About
            </NavItem>
            <NavItem to="#testimoniSection" onClick={closeMenu}>
              Testimoni
            </NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
