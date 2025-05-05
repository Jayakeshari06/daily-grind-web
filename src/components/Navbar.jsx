
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-coffee-700">Daily Grind</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
          <Link to="/menu" className={`nav-link ${isActive('/menu')}`}>Menu</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
          <Button asChild className="bg-coffee-500 hover:bg-coffee-600">
            <a href="https://order.dailygrind.com" target="_blank" rel="noopener noreferrer">
              Order Online
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-coffee-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-[60px] left-0 w-full bg-white/95 shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0 invisible'}`}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          <Link to="/" className={`text-lg font-medium ${isActive('/')} text-coffee-700 hover:text-coffee-500`}>Home</Link>
          <Link to="/about" className={`text-lg font-medium ${isActive('/about')} text-coffee-700 hover:text-coffee-500`}>About</Link>
          <Link to="/menu" className={`text-lg font-medium ${isActive('/menu')} text-coffee-700 hover:text-coffee-500`}>Menu</Link>
          <Link to="/contact" className={`text-lg font-medium ${isActive('/contact')} text-coffee-700 hover:text-coffee-500`}>Contact</Link>
          <Button asChild className="bg-coffee-500 hover:bg-coffee-600 w-full">
            <a href="https://order.dailygrind.com" target="_blank" rel="noopener noreferrer">
              Order Online
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
