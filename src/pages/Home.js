import React from 'react';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Reasones from '../components/Reasones';
import How from '../components/How';
import RecentBlogs from '../components/RecentBlogs';
import ContactComponent from '../components/ContactComponent';
import Ads from '../components/Ads';
function Home(props) {
    return (
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Reasones></Reasones>
        <How></How>
        <Ads></Ads>
        <RecentBlogs></RecentBlogs>
        <ContactComponent></ContactComponent>
        <Footer></Footer>
     
        </>
    );
}

export default Home;