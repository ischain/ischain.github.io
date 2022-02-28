import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import Link from 'next/link';

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={['a']}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa itu ISCHAIN?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="align-paragraph">
                        <strong>
                          ISCHAIN (Islamic Cryptocurrency and Blockchain)
                          Community
                        </strong>
                        adalah sebuah komunitas islami penggiat industri web3
                        halal, termasuk diantaranya aset crypto, teknologi
                        blockchain, dan aplikasi desentral. ISCHAIN Community
                        percaya bahwa industri web3 akan menjadi sebuah ekonomi
                        baru yang revolusioner yang disebut sebagai ekonomi
                        token (token economy), dan umat Islam harus menjadi yang
                        terdepan dalam pengadopsiannya tanpa melanggar kaidah
                        dan prinsip Islam.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apakah ISCHAIN komunitas yang terbuka untuk umum?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Ya, ISCHAIN terbuka untuk seluruh kaum muslimin yang
                        ingin mengetahui tentang seluk beluk Blockchain atau
                        Cryptocurrency sesuai kaidah dan prinsip Islam.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Bagaimana cara bergabung dengan ISCHAIN?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Komunitas ISCHAIN bisa diakses melalui
                        <a href="https://www.t.me/ischainlounge">
                          &nbsp;Telegram
                        </a>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Adakah tulisan pendahuluan tentang Cryptocurrency?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ya ada, bisa kunjungi halaman
                        <Link href="/publikasi">
                          <a>&nbsp;Publikasi</a>
                        </Link>
                        &nbsp;di website kami
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <img src="/images/faq-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqContent;
