import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import News from '../components/Common/News';   
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class Publikasi extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Riset dan Publikasi" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Publikasi" 
                /> 
                <News />
                <div className="pt-100 pb-50">
                    <Partner />
                </div>
                <Footer />
            </>
        );
    }
}

export default Publikasi;
