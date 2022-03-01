import Link from 'next/link';
import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <section className="news-area pt-100">
        <div className="container">
          <div className="section-title">
            <a id="publikasi">
              <span>Riset dan Publikasi</span>
            </a>
            <h2>Hasil Riset dan Publikasi Terbaru </h2>
            <p>
              Berikut adalah hasil riset ISCHAIN berkolaborasi dengan pakar dan
              spesialis di bidang teknologi blockchain, cryptocurrency, web3,
              beserta para Asatidzah
            </p>
          </div>

          <div className="row centerized-row">
             <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/publications/ischain_soal_jawab_cryptocurrency.pdf">
                    <a>
                      <img src="/images/blog/blog2.png" alt="Image" />
                    </a>
                  </Link>

                  <div className="dates">
                    <span>17 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="flaticon-user"></i> Admin
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <Link href="#">
                    <a>
                      <h3>Soal Jawab Cryptocurrency</h3>
                    </a>
                  </Link>

                  <p className="align-paragraph">
                    Berisi kumpulan soal jawab tentang beberapa permasalahan
                    atau keraguan yang sering muncul tentang Cryptocurrency yang
                    coba dijawab oleh Team Fiqh ISCHAIN
                  </p>

                  <Link href="/publications/ischain_soal_jawab_cryptocurrency.pdf">
                    <a className="read-more">
                      Unduh <i className="bx bx-download"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
      
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/publications/ischain_8_Faidah_Hukum_Bitcoin.pdf">
                    <a>
                      <img src="/images/blog/blog1.png" alt="Image" />
                    </a>
                  </Link>

                  <div className="dates">
                    <span>24 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="flaticon-user"></i> Admin
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <Link href="#">
                    <a>
                      <h3>8 Faidah Hukum Bitcoin</h3>
                    </a>
                  </Link>

                  <p className="align-paragraph">
                    ISCHAIN berinisiatif menerjemahkan sebagian isi makalah
                    mengenai Bitcoin dari Syaikh Dr. Abdullah bin Muhammad bin
                    Abdul Wahhab Al-Aqil hafizhahullahu ta’ala
                  </p>

                  <Link href="/publications/ischain_8_Faidah_Hukum_Bitcoin.pdf">
                    <a className="read-more">
                      Unduh <i className="bx bx-download"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

      
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="">
                    <a>
                      <img src="/images/blog/blog8.png" alt="Image" />
                    </a>
                  </Link>

                  <div className="dates">
                    <span>1 Maret</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="flaticon-user"></i> Admin
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <Link href="#">
                    <a>
                      <h3>Mencari Keuntungan Halal dari Crypto</h3>
                    </a>
                  </Link>

                  <p className="align-paragraph">
                    Coming Soon
                  </p>

                  <Link href="">
                    <a className="read-more">
                      Coming Soon
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {/* <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link href="/publikasi/#">
                        <a className="page-link page-links">
                          <i className="bx bx-chevrons-left"></i>
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
                          <i className="bx bx-chevrons-right"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default News;
