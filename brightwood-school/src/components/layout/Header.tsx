import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white font-semibold">
            <span>BS</span>
          </div>
          <Link to="/" className="text-navy font-playfair font-bold text-xl">
            Brightwood School
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-navy hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/academics" className="text-navy hover:text-gold transition-colors">
            Academics
          </Link>
          <Link to="/admissions" className="text-navy hover:text-gold transition-colors">
            Admissions
          </Link>
          <Link to="/student-life" className="text-navy hover:text-gold transition-colors">
            Student Life
          </Link>
          <Link to="/about" className="text-navy hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-navy hover:text-gold transition-colors">
            Contact
          </Link>
          <Link
            to="/apply"
            className="bg-gold text-navy px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-navy hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/academics" className="text-navy hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Academics
            </Link>
            <Link to="/admissions" className="text-navy hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Admissions
            </Link>
            <Link to="/student-life" className="text-navy hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Student Life
            </Link>
            <Link to="/about" className="text-navy hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-navy hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link
              to="/apply"
              className="bg-gold text-navy px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-colors inline-block w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
