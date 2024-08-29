import React from 'react';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';
import Ads from '../components/Ads';


function About(props) {
  return (
    <>
    <Navbar></Navbar>
    <Ads></Ads>
      <div className="container">
        <div className="body-cover">
          <div className="about">
            <p>
              <strong>About SafeByte</strong>
              SafeByte is a simple yet powerful message encryption tool that helps you protect your sensitive information from prying eyes. Our mission is to provide a secure and easy-to-use platform for individuals to encrypt their messages, ensuring that their private conversations remain confidential.
              <br />
              <strong>How it Works</strong>
              <br />
              SafeByte uses advanced encryption algorithms to scramble your inputted message, making it unreadable to anyone except the intended recipient. Simply type in your message, and our app will encrypt it for you. The encrypted message can then be shared with others, who can decrypt it using the same algorithm.
              <br />
              <strong>Why Use SafeByte</strong>?
              <br />
              <strong>Protect Your Privacy</strong>: SafeByte ensures that your messages remain confidential and private, even if they're intercepted or accessed by unauthorized parties.
              <strong>Easy to Use</strong>: Our app is designed to be user-friendly, with a simple and intuitive interface that makes it easy to encrypt and decrypt messages.
              <strong>Secure</strong>: Our encryption algorithms are robust and reliable, providing a high level of security for your messages.
              <br />
              <strong>Features</strong>
              <br />
              Advanced Encryption: SafeByte uses industry-standard encryption algorithms to protect your messages.
              Easy Encryption: Simply type in your message, and our app will encrypt it for you.
              Decryption: Our app also allows you to decrypt encrypted messages, making it easy to communicate with others who use SafeByte.
              <br />
              Get in Touch
              <br />
              If you have any questions or feedback about SafeByte, please don't hesitate to contact us. We're always looking for ways to improve and expand our app to better serve our users.
            </p>
          </div>
        </div>
      </div>
      <Ads></Ads>
    <Footer></Footer>
    </>
  );
}

export default About;