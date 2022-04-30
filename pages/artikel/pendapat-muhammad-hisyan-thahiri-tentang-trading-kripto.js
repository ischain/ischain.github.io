/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import HeaderArtikel from "/components/Headers/HeaderArtikel.js";
import Gbr from "/components/KontenArtikel/Gbr.js";
import Paragraf from "/components/KontenArtikel/Paragraf.js";
import Footer from "/components/Footers/Footer.js";

export default function tempKontenArtikel() {
  return (
    <>
      <HeaderArtikel
        Judul= "Pendapat Syaikh Muhammad Hisyam Thahiri Tentang Trading Kripto" 
        Tanggal= "20 April 2022"
        Author= "Yulian Purnama"
      />

   <section className="pb-20 relative bg-blueGray-100">
     
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

q     <div className="container mx-auto px-4 pb-2">
        <div className="relative flex flex-wrap z-10 min-w-0 bg-white w-full mb-6 shadow-xl rounded-lg -mt-48">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4 lg:order-3 lg:text-justify lg:self-center">
                
                <div className="py-6 px-3 sm:mt-0">
                  <Gbr
                     Gambarx = "/img/artikel/04.png"
                  />
                </div>
              </div>
              <div className="w-full w-12/12 px-4 lg:order-3 text-justify self-center">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Dalam suatu sesi tanya jawab ringkas Syaikh Dr. Muhammad Hisyam Thahiri menjelaskan pendapat beliau tentang trading kripto. Beliau menjawab:
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     “Masalah mata uang kritpo sebagaimana anda telah ketahui adalah masalah kontemporer yang baru. Dan ketika awal kemunculannya, sekitar 10 tahun yang lalu, saya pernah memfatwakan haramnya membeli mata uang kripto. Namun ketika mata uang kripto dianggap sebagai suatu yang berharga di beberapa masyarakat dan bahkan dianggap sebagai mata uang yang diakui oleh beberapa negara dan pemerintahan, maka saya fatwakan membeli mata uang kripto adalah perkara yang tidak mengapa (boleh). Walaupun memang ada resiko di dalamnya. 
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Adapun masalah trading, ini masalah lain. Tergantung kepada apakah cara menjualnya mengandung unsur qimar (judi) ataukah tidak. Mayoritas ulama kontemporer membolehkan trading, baik itu berupa saham, atau mata uang, atau emas. Maka ulama yang membolehkan trading, yaitu membeli ketika harga rendah dan menjual ketika harga tinggi, maka mereka pun membolehkan trading kripto. 
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Adapun ulama yang melarang trading saham, mata uang dan emas, seperti Syaikh Al Albani rahimahullah, maka mereka pun melarang trading kripto. Dan alasan ulama yang melarang adalah karena jual beli seperti ini termasuk qimar (judi). Seseorang bisa rugi di suatu kesempatan, dan bisa menjadi milyuner di suatu kesempatan. Demikian”.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Sumber: <a href="https://www.youtube.com/watch?v=XMkp6a0ZTYY">https://www.youtube.com/watch?v=XMkp6a0ZTYY</a>
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     =====
                  </p>
                  <h2>Biografi ringkas Syaikh Dr. Muhammad Hisyam Thahiri</h2>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Nama lengkap beliau adalah Muhammad Hisyam bin Li'al Muhammad bin Jaan Muhammad bin Niyar Muhammad bin Din Muhammad Alu Abdil Ghani Ath Thahiri. Kuniyah beliau adalah Abu Shalah Al Afghani, karena beliau berasal dari Afghanistan. Beliau lahir pada tahun 1389 H atau tahun 1969M.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Beliau menyelesaikan pendidikan S1 Fakultas Syar'iyah di Universitas Islam Madinah. Kemudian menyelesaikan S2 Fakultas Dakwah dan Ushuluddin di Universitas Islam Madinah. Dan menyelesaikan S3 di fakultas dan kampus yang sama pada tahun 1429H.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Beliau banyak memberikan perhatian lebih pada bidang akidah, firaq (sekte menyimpang) dan masalah madzhab.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Saat ini beliau bertugas sebagai imam dan khatib di Kementerian Agama Kuwait.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     Beberapa karya tulis yang telah beliau selesaikan di antaranya:
                  </p>
                  <ol className="list-decimal list-outside text-lg px-4 text-lg leading-relaxed text-blueGray-800">
                     <li className="px-3"><em>Ithafu Ahlil Qiblah bi Ahkamil Qublah</em></li>
                     <li className="px-3"><em>Tanbihul 'Ibad ila Kaifiyatin Nuthqi bid Dhad Tahqiqan</em></li>
                     <li className="px-3"><em>Al Qur'anul Karim wa Manzilatuhu bainas Salaf wa Mukhalifihim</em></li>
                     <li className="px-3"><em>Taqrirat Aimmatid Da'wah fil Mukhalafah Madzhabil Khawarij wa Ibthalihi</em></li>
                     <li className="px-3"><em>Mukhtashar Taqrirat Aimmatid Da'wah fil Mukhalafah Madzhabil Khawarij wa Ibthalihi</em></li>
                     <li className="px-3"><em>Imta' Dzawil 'Irfan bi Masyatamalat 'alaihi Kutubu Syaikhil Islam Ibni Taimiyah</em></li>
                     <li className="px-3"><em>Hifzhul Qur'an Hilmun lahu Khutuwatun</em></li>
                     <li className="px-3"><em>Bidayatul Mustafid wa Nihayatul Mufid Syarhu Kitabit Tauhid</em></li>
                     <li className="px-3"><em>Manahil al-Irfan fi 'Ulumil Qur'an liz Zarqani</em></li>
                  </ol>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-800">
                     <em>Wallahu a'lam</em>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}
