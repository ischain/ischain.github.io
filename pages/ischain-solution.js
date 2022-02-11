import React, { Component } from 'react';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import PageBanner from '../components/Common/PageBanner';
import IschainSolution from '../components/Entitas/IschainSolution';
import WhatWeOffer from '../components/Entitas/WhatWeOffer';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class EntitasSolution extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Ischain Solution" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Ischain Solution" 
                /> 
                <IschainSolution />
                <MakeYourBusiness />
                <WhatWeOffer />
                <Footer />
            </>
        );
    }
}

export default EntitasSolution;