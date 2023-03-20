import React from 'react';
import { Link } from 'react-scroll';
import { NavLinks } from '../utils/data';
import { HiMenuAlt1, HiX } from 'react-icons/hi';

const Navbar = () => {
  let menuRef = React.useRef();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeScroll, setActiveScroll] = React.useState(null);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    const checkScroll = () => {
      setActiveScroll(window.scrollY);
    };

    window.addEventListener('scroll', checkScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', checkScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, activeScroll]);

  return (
    <div
      className={`${
        activeScroll ? 'bg-solitude shadow py-3 md:py-2' : 'py-4'
      } fixed w-full top-0 left-0 z-10`}
    >
      <div className="container mx-auto flex items-center justify-between px-2 md:px-4 lg:px-0 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex items-center gap-4">
          <HiMenuAlt1
            size={30}
            className="cursor-pointer sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-teal text-xl font-bold cursor-pointer uppercase tracking-wide"
          >
            Skillex
          </Link>
        </div>
        <ul className="hidden sm:flex gap-6 items-center">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                smooth={true}
                duration={500}
                className="hover:border-b-2 border-teal px-2 py-1 text-gray tracking-wide cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          disabled={isMenuOpen ? true : false}
          className="px-5 py-3 text-md text-gray font-bold border rounded-md border-gray disabled:opacity-50"
        >
          Sign up
        </button>
        <ul
          ref={menuRef}
          className={`sm:hidden bg-teal fixed top-0 left-0 h-full w-3/4 py-20 px-4 transition-all duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <HiX
            size={30}
            className="absolute top-6 left-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {NavLinks.map((link) => (
            <li key={link.id} className="mb-3">
              <Link
                to={link.path}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-lg cursor-pointer tracking-wide"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
