
const WhyChooseUs = () => {
    return (
        <section className="choose-ue-area pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="choose-title">
                            <span>Visi & Misi Kami</span>
                            <h2>Menjadi media edukasi dan penyedia solusi Halal Crypto, Teknologi Blockchain, dan Web3 terbesar di Indonesia</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <ul>
                                <li>
                                    <span>
                                        01 <i className="flaticon-technical-support"></i>
                                    </span>
                                    <h3>Edukasi</h3>
                                    <p>Memberikan edukasi menyeluruh terkait blockchain dan aset crypto baik dari sisi syariat, fikih, teknologi, implementasi, hingga manajemen risiko yang dapat memberi kemaslahatan umat secara umum.</p>
                                </li>

                                <li className="ml">
                                    <span>
                                        02 <i className="flaticon-technical-support"></i>
                                    </span>
                                    <h3>Kolaborasi</h3>
                                    <p>Membangun kolaborasi bersama pakar blockchain, edukator crypto, dan asatidzah/ulama untuk membangun ekosistem halal crypto dan pengembangan teknologi blockchain yang dapat memberi kemaslahatan untuk umat secara umum.</p>
                                </li>

                                <li className="ml-25">
                                    <span>
                                        03 <i className="flaticon-technical-support"></i>
                                    </span>
                                    <h3>Solusi</h3>
                                    <p>Menyediakan solusi blockchain dan implementasi teknologinya kepada bisnis dan usaha umat agar dapat meningkatkan daya saing dengan memanfaatkan seluruh keunggulan blockchain yang sesuai dengan prinsip syariat Islam.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-img">
                            <img src="/images/choose-img.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;
