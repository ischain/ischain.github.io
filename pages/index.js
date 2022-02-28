{/* import MakeYourBusiness from '../components/Common/MakeYourBusiness' */}
import News from '../components/Common/News'
{/* import Testimonials from '../components/Common/Testimonials' */}
import About from '../components/Home/About'
import MainBanner from '../components/Home/MainBanner'
{/*  import Services from '../components/Home/Services' */}
{/* import WhatWeOffer from '../components/Home/WhatWeOffer' */}
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Footer from '../components/Layouts/Footer'
import Navbar from '../components/Layouts/Navbar'
import TeamTwo from '../components/Common/TeamTwo'

const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <About />
            <WhyChooseUs />
            {/*
            <Services />
            <MakeYourBusiness />
            <WhatWeOffer />
            <Testimonials />
            */}
            <News />
            <TeamTwo />
            <Footer />
        </>
    )
}

export default Index
