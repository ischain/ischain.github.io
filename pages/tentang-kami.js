import React, { Component } from 'react';
import About from '../components/About/About';
import WhyChooseUs from '../components/Home/WhyChooseUs'
import PageBanner from '../components/Common/PageBanner';
import TeamTwo from '../components/Common/TeamTwo';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class TentangKami extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Tentang Kami" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Tentang Kami" 
                /> 
                <About />
                <WhyChooseUs />
                <TeamTwo />
                <Footer />
            </>
        );
    }
}

export default TentangKami;
