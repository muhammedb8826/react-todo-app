import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
  ];
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [dropdown]);

  return (
    <nav>
      <button
        type="button"
        className="toggle"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? (
          <MdClose style={{ width: '32px', height: '32px' }} />
        ) : (
          <FiMenu
            style={{
              width: '32px',
              height: '32px',
            }}
          />
        )}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              onClick={() => setNavbarOpen(false)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
        <li ref={ref}>
          <button type="button" onClick={() => setDropdown((prev) => !prev)}>
            Services
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
