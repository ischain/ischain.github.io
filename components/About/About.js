import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span>Tentang Kami</span>
                            <h2>ISCHAIN (Islamic Cryptocurrency and Blockchain) Community </h2>
                            <p>adalah sebuah komunitas islami penggiat industri web3 halal, termasuk diantaranya aset crypto, teknologi blockchain, dan aplikasi desentral. ISCHAIN Community percaya bahwa industri web3 akan menjadi sebuah ekonomi baru yang revolusioner yang disebut sebagai ekonomi token (token economy), dan umat Islam harus menjadi yang terdepan dalam pengadopsiannya tanpa melanggar kaidah dan prinsip Islam.</p>
                            
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Edukasi Halal Crypto Asset
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Solusi Teknologi Blockchain
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Berpegang Pada Syariat Islam
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Pengembangan Ekonomi Umat
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Beranggotakan Praktisi, Pakar, dan Asatidzah
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

export default About;
