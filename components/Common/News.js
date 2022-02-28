import Link from 'next/link';
import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <section className="news-area pt-100 pb-50">
                <div className="container">
                    <div className="section-title">
                    <a id="publikasi"><span>Riset dan Publikasi</span></a>
                        <h2>Hasil Riset dan Publikasi Terbaru </h2>
                        <p>Berikut adalah hasil riset ISCHAIN berkolaborasi dengan pakar dan spesialis di bidang teknologi blockchain, cryptocurrency, web3, beserta para Asatidzah</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/detil-publikasi">
                                        <a>
                                            <img src="/images/blog/blog1.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>20 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="/news-grid"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/detil-publikasi">
                                        <a>
                                            <h3>Is Machine Learning Right For You</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>
                                    
                                    <Link href="/detil-publikasi">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/detil-publikasi">
                                        <a>
                                            <img src="/images/blog/blog2.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>21 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="/news-grid"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <Link href="/detil-publikasi">
                                        <a>
                                            <h3>The State Of Artificial Intelligence</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>
                                    
                                    <Link href="/detil-publikasi">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/detil-publikasi">
                                        <a>
                                            <img src="/images/blog/blog3.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>22 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="/news-grid"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 4 Comments
                                        </li>
                                    </ul>

                                    <Link href="/detil-publikasi">
                                        <a>
                                            <h3>Our Company Machine Learning </h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/detil-publikasi">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                         {/* Pagination */}
                         <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link href="/publikasi/#">
                                                <a className="page-link page-links">
                                                    <i className='bx bx-chevrons-left'></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="page-item active">
                                            <Link href="/publikasi/#">
                                                <a className="page-link">1</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="/publikasi/#">
                                                <a className="page-link">2</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="/publikasi/#">
                                                <a className="page-link">3</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="/publikasi/#">
                                                <a className="page-link">
                                                    <i className='bx bx-chevrons-right'></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;