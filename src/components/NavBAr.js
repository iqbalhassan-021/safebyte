import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  let nav = document.getElementById('pages');

  function hitSwitch() {
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
    }
  }

  return (
    <div className="sticky">
      <div className="body-cover">
        <div className="navBar">
          <div className="tab logo-holder flex-center-row">
            <Link to="/" className="no-decoration flex-center-row">
              <img className="logo" src="/assets/images/siteLogo.png" alt="site-logo" />
              <h3>SafeByte</h3>
            </Link>
            <a onClick={hitSwitch} className="bars">
              <i className="fa-sharp fa-solid fa-bars"></i>
            </a>
          </div>

          <div className="tab pages" id="pages">
            <Link to="/" className="no-decoration">
              <div className="nav-button">
                <p>HOME</p>
              </div>
            </Link>
            <Link to="/about" className="no-decoration">
              <div className="nav-button">
                <p>ABOUT</p>
              </div>
            </Link>
            <Link to="/contact" className="no-decoration">
              <div className="nav-button">
                <p>CONTACT</p>
              </div>
            </Link>
            <Link to="/blogs" className="no-decoration">
              <div className="nav-button">
                <p>BLOGS</p>
              </div>
            </Link>
            <a href="https://github.com/yourusername" className="no-decoration" target="_blank" rel="noopener noreferrer">
              <div className="nav-button">
                <p>GITHUB</p>
              </div>
            </a>
          </div>

          <div className="tab">
            <a href="https://www.linkedin.com/in/yourprofile" className="no-decoration" target="_blank" rel="noopener noreferrer">
              <div className="primary-button linkedin">
                <i className="fa-brands fa-linkedin"></i>
                <p>Let's Connect</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
