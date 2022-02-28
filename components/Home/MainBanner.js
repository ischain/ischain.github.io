import Link from 'next/link';

const MainBanner = () => {
    
    return (
        <section className="main-banner-area main-banner-area-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1>Stay Halal with ISCHAIN</h1>
                            <p>ISCHAIN adalah komunitas Islami penggiat industri Web3 halal<br></br><br></br>
                            Visi kami menjadi media edukasi dan penyedia solusi Halal Crypto, Teknologi Blockchain, dan Web3 terbesar di Indonesia</p>	
                            <div className="banner-btn">
                                <a className="default-btn" href="#tentang">
                                     Tentang Kami
                                </a>

                                <a className="default-btn" href="https://t.me/ischainlounge" target="_blank">
                                     <i class="bx bxl-telegram"></i>  Telegram ISCHAIN
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        {/* Banner Shape Images */}
                        <div className="banner-img">
                            <img className="animate__animated animate__fadeInUp animate__fast" src="/images/home-one/shape1.png" alt="Image" />
                        </div>

                    </div>
                </div>
            </div> 

            {/* Shape Images */}
            <div className="over-shape">
                <img src="/images/home-one/shape/animate3.png" alt="Image" />
                <img src="/images/home-one/shape/animate3.png" alt="Image" />
                <img src="/images/home-one/shape/animate3.png" alt="Image" />
            </div>

            <div className="white-shape">
                {/*<img src="/images/home-one/bottom-shape.png" alt="Image" />*/}
            </div>

            <div className="features-area pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-artificial-intelligence"></i>
                                <h3>Ischain Academy</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/ischain-academy">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Ischain Solution</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/ischain-solution">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Ischain DAO</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner;
