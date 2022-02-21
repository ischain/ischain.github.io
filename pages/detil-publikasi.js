import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import Footer from '../components/Layouts/Footer';


class DetilPublikasi extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Detil Publikasi" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Detil Publikasi" 
                /> 
                <ServiceDetailsContent />
                <Footer />
            </>
        );
    }
}

export default DetilPublikasi;