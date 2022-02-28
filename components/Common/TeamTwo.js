import React, { Component } from 'react';
import Link from 'next/link';

class TeamTwo extends Component {
    render() {
        return (
            <section className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Tim ISCHAIN</span>
                        <p>Struktur tim ISCHAIN terdiri dari Advisory Board yang berisikan Pakar Blockchain dan Ustadz Pembina serta Pengurus yang berisikan Praktisi, Peneliti, Edukator, Developer, dan sebagainya.</p>
                    </div>

                    <div className="section-title">
                        <h2>Board Member</h2>
                        </div>
                    <div className="row">
                       <div className="col-lg-6 col-sm-6">
                            <div className="single-team active">
                                <div className="team-content">
                                    <h3>Yhouga A. Moppratama, S.T.</h3>
                                    <span>CEO</span>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/yhouga.ariesta" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                            <a href="https://id.linkedin.com/in/yhouga-ariesta" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-team active">
                                <div className="team-content">
                                    <h3>M. Said Hairul Insan, S.E.</h3>
                                    <span>Treasury</span>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://facebook.com/muhammadsaidify" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/muhammad-said-hairul-insan-8a533496/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                            <a href="https://twitter.com/muhammadsaidify" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                        <div className="section-title">
                            <h2>Specialist and Supporting Team</h2>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 offset-sm-4 offset-lg-0">
                            <div className="single-team active">
                                <div className="team-content">
                                    <h3>Firdaus Prabowo, Ph.D.</h3>
                                    <span>Head of Blockchain Tech Specialist</span>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/firdaus.prabowo" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/fprabowo/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-lg-4 col-sm-6 offset-sm-4 offset-lg-0">
                            <div className="single-team active">
                                <div className="team-content">
                                    <h3>Maramis Setiawan, S.T., M.M.T.</h3>
                                    <span>Head of DeFi Specialist</span>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/maramis.setiawan" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/maramis-setiawan-a9842b42/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/maramissetiawan/" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamTwo;
