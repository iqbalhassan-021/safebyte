import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer">
      <div className="body-cover">
        <div className="footer-wrapper">
          <div className="grid-4x">
            <div className="tab">
              <p>
                <strong>SafeByte</strong>
              </p>
              <br />
              <p>
                In today's digital age, our private conversations are vulnerable to interception and misuse. SafeByte is here to change that. Our innovative encryption technology ensures that your texts, messages, and files remain confidential and secure. With SafeByte, you can communicate freely, knowing that your privacy is protected.
              </p>
            </div>
            <div className="tab">
              <p>
                <strong>Pages</strong>
              </p>
              <br />
              <Link to='/' className="no-decoration" style={{ color: 'white' }}>
                Home
              </Link>
              <br />
              <Link to='/about' className="no-decoration" style={{ color: 'white' }}>
                About
              </Link>
              <br />
              <Link to='/contact' className="no-decoration" style={{ color: 'white' }}>
                Contact
              </Link>
              <br />
              <Link to='/blogs' className="no-decoration" style={{ color: 'white' }}>
                Blogs
              </Link>
              <br />
              <Link to='/encrypt' className="no-decoration" style={{ color: 'white' }}>
                encrypt
              </Link>
              <br />
              <a href="https://github.com/iqbalhassan-021/safebyte.git" className="no-decoration" style={{ color: 'white' }}>
                GitHub Repo
              </a>
            </div>

            <div className="tab">
              <p>
                <strong>Developer</strong>
              </p>
              <br />
              <a href="https://www.linkedin.com/in/iqbal-hassan-b156b5314/" target='_blank' className="no-decoration" style={{ color: 'white' }}>
                Linkedin
              </a>
              <br />
              <a href="https://hassansbio.netlify.app/" target='_blank' className="no-decoration" style={{ color: 'white' }}>
                Official Site
              </a>
            </div>
            <div className="tab">
              <p>
                <strong>News Letter</strong>
              </p>
              <br />
              <div className="news-letter">
                <form action="https://api.web3forms.com/submit" method="POST" >
                <input type="hidden" name="access_key" value="96dfec8b-2442-41ef-b291-a01b5f495183"/>
                  <input type="email" name="email" placeholder="Enter your email" />
                  <button type="submit" className="primary-button" style={{ borderRadius: '0px' }}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="tab" style={{ borderTop: '1px solid white', marginTop: '20px', paddingTop: '20px' }}>
            <p>&copy; Copyrights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;