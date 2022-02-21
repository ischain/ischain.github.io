import React, { Component } from 'react';
import About from '../components/About/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import PageBanner from '../components/Common/PageBanner';
import Partner from '../components/Common/Partner';
import TeamTwo from '../components/Common/TeamTwo';
import Testimonials from '../components/Common/Testimonials';
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
                <MakeYourBusiness />
                <Testimonials />
                <TeamTwo />
                <div className="pb-50">
                    <Partner />
                </div>
                <Footer />
            </>
        );
    }
}

export default TentangKami;