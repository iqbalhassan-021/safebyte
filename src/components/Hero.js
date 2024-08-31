import React from 'react';
import { Link } from 'react-router-dom';

function Hero(props) {
    return (
    
        <div className="body-cover">

  
       <div className="hero-section">
           <div className="hero-text">
               <p className="headline">
                   Protect Your Private Conversations with SafeByte
               </p>
               <p className="subheading">
                   In today's digital age, our private conversations are vulnerable to interception and misuse. SafeByte is here to change that. Our innovative encryption technology ensures that your texts, messages, and files remain confidential and secure. With SafeByte, you can communicate freely, knowing that your privacy is protected.

               </p>
               <br/>
               <Link to="/encrypt" className="no-decoration">
              <div className="primary-button">
                <p>Get Started</p>
              </div>
            </Link>
           </div>


           <div className="hero-image flex-center-row">
               <img className="heroimage" src="/assets/images/Dataextraction-rafiki.png" alt="hero image"/>
           </div>
       </div>

   </div>
       
    );
}

export default Hero;