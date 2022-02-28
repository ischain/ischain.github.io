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

                    <div className="row">
                        <h2>Board Member</h2>
                        <div className="col-lg-6 col-sm-6">
                            <div className="single-team active">
                                <div className="team-content">
                                    <h3>Yhouga A. Moppratama, S.T.</h3>
                                    <span>CEO</span>

                                    <ul>
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

                                    <ul>
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

                        <div className="col-lg-3 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team2.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Alisa Maria</h3>
                                    <span>Developer</span>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
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
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamTwo;
