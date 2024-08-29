import React from 'react';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';
import Ads from '../components/Ads';

function Blogs(props) {
    return (
        <>
        <Navbar></Navbar>
        <Ads></Ads>
        <div className="container">
        <div className="body-cover">
            <div className="blogs-section">

                <a href="#" className="no-decoration">
                <div className="tab">
                    <img src="/assets/images/images.jpg" alt="" className="blog-image"/>
                    <h3>
                        Blog 1
                    </h3>
                </div>
              </a>

        <Ads></Ads>
            </div>
        </div>
    </div>
        <Footer></Footer>
        </>
    );
}

export default Blogs;