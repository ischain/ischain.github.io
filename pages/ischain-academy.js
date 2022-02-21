import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import IschainAcademy from '../components/Entitas/IschainAcademy';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class EntitasAcademy extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Ischain Academy" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Ischain Academy" 
                /> 
                <IschainAcademy />
                <Footer />
            </>
        );
    }
}

export default EntitasAcademy;