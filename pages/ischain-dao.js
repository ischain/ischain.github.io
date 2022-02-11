import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import IschainDAO from '../components/Entitas/IschainDAO';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class EntitasDAO extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Ischain DAO" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Ischain DAO" 
                /> 
                <IschainDAO />
                <Footer />
            </>
        );
    }
}

export default EntitasDAO;