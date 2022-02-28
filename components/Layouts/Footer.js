import Link from 'next/link';
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="footer-top-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <a href="/" className="logo">
                                        <img src="/images/white-logo.png" alt="Image" />
                                    </a>

                                    <p>ISCHAIN (Islamic Cryptocurrency and Blockchain) Community adalah sebuah komunitas islami penggiat industri web3 halal, termasuk diantaranya asset crypto, teknologi blockchain, dan aplikasi desentral.</p>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://instagram.com/ischain.id" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.t.me/ischainlounge/" target="_blank">
                                                <i className="bx bxl-telegram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Entitas Bisnis</h3>
                                    <ul>
                                        <li>
                                            <Link href="/coming-soon">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Ischain Academy
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                             <Link href="/coming-soon">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Ischain Solution
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/coming-soon">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Ischain DAO
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Tautan Penting</h3>

                                    <ul>
                                        <li>
                                            <Link href="/tentang-kami">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Tentang Kami
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/publikasi">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Publikasi
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Informasi</h3>

                                    <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>Email</span>
                                            ischain.id@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-shape">
                        <img src="/images/shape/footer-shape-one.png" alt="Image" />
                        <img src="/images/shape/footer-shape-two.png" alt="Image" />
                    </div>
                </footer>
    
                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="copy-right">
                                    <p>Copyright &copy; {currentYear} ISCHAIN. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="designed">
                                    <p>
                                        Designed By <i className='bx bx-heart'></i> <a href="https://ischain.github.io/" target="_blank">ISCHAIN</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
