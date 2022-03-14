/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Hero from "components/Home/Hero.js";
import TentangKami from "components/Home/TentangKami.js";
import Publikasi from "components/Home/Publikasi.js";
import Tim from "components/Home/Tim.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <Hero/>
      <TentangKami/>
      <Publikasi/>
      <Tim/>
      <Footer />
    </>
  );
}
