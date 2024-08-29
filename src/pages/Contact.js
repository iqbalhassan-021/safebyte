import React from 'react';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';
import ContactComponent from '../components/ContactComponent';
import Ads from '../components/Ads';
function Contact(props) {
    return (
        <>
      <Navbar></Navbar>
      <Ads></Ads>
      <ContactComponent></ContactComponent>
      <Footer></Footer>
      </>
    );
}

export default Contact;