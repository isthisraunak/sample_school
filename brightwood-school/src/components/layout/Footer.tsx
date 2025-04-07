import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-navy font-semibold">
                <span>BS</span>
              </div>
              <span className="font-playfair font-bold text-xl">Brightwood School</span>
            </div>
            <p className="text-sm mb-6">
              Empowering Students to Excel in Academics, Character, and Service Since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22,12c0-5.5-4.5-10-10-10S2,6.5,2,12c0,5,3.7,9.1,8.4,9.9v-7H7.9V12h2.5V9.8c0-2.5,1.5-3.9,3.8-3.9c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6V12h2.8l-0.4,2.9h-2.3v7C18.3,21.1,22,17,22,12z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gold transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4 c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.9c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4 c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.9,0.1s-3.6,0-4.9-0.1c-1.2-0.1-1.8-0.2-2.2-0.4 c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.9s0-3.6,0.1-4.9 c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,12,2.2 M12,0C8.7,0,8.3,0,7,0.1c-1.3,0.1-2.2,0.3-3,0.6C3.2,1,2.5,1.4,1.8,2.1C1.1,2.8,0.7,3.5,0.4,4.3c-0.3,0.8-0.5,1.7-0.6,3 C0,8.6,0,9.1,0,12.3s0,3.7,0.1,5c0.1,1.3,0.3,2.2,0.6,3C1,21.2,1.4,21.9,2.1,22.6c0.7,0.7,1.4,1.1,2.2,1.4 c0.8,0.3,1.7,0.5,3,0.6c1.3,0.1,1.7,0.1,5,0.1s3.7,0,5-0.1c1.3-0.1,2.2-0.3,3-0.6c0.8-0.3,1.5-0.7,2.2-1.4 c0.7-0.7,1.1-1.4,1.4-2.2c0.3-0.8,0.5-1.7,0.6-3c0.1-1.3,0.1-1.7,0.1-5s0-3.7-0.1-5c-0.1-1.3-0.3-2.2-0.6-3 c-0.3-0.8-0.7-1.5-1.4-2.2c-0.7-0.7-1.4-1.1-2.2-1.4c-0.8-0.3-1.7-0.5-3-0.6C15.7,0,15.3,0,12,0L12,0z M12,6 c-3.5,0-6.3,2.8-6.3,6.3s2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3S15.5,6,12,6z M12,16c-2,0-3.7-1.7-3.7-3.7S10,8.7,12,8.7 s3.7,1.7,3.7,3.7S14,16,12,16z M18.9,5.8c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5 C18.2,4.3,18.9,4.9,18.9,5.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/academics" className="hover:text-gold transition-colors">Academics</Link>
              <Link to="/admissions" className="hover:text-gold transition-colors">Admissions</Link>
              <Link to="/student-life" className="hover:text-gold transition-colors">Student Life</Link>
              <Link to="/calendar" className="hover:text-gold transition-colors">Calendar</Link>
              <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-playfair font-bold text-lg mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/news" className="hover:text-gold transition-colors">News & Announcements</Link>
              <Link to="/portal" className="hover:text-gold transition-colors">Student Portal</Link>
              <Link to="/parents" className="hover:text-gold transition-colors">Parent Resources</Link>
              <Link to="/library" className="hover:text-gold transition-colors">Library</Link>
              <Link to="/staff" className="hover:text-gold transition-colors">Faculty & Staff</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-playfair font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="flex items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-1">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                123 Education Ave<br />
                Brightwoodville, CA 90210
              </p>
              <p className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@brightwood.edu
              </p>
            </address>
          </div>
        </div>

        <hr className="border-navy-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2025 Brightwood School. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
            <Link to="/accessibility" className="hover:text-gold transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
