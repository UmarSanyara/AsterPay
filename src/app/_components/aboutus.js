"use client";
import Image from "next/image";
import React from "react";
import Clockwatermark from "../_assets/images/aboutus/clockwatermark.png";
import {
  Headerdiv,
  Imagediv,
  Maindiv,
  Section,
  Sectiondetail,
  Sectionsdiv,
} from "./styles/aboutus.style";
import Empowering from "../_assets/images/aboutus/empowering.png";
const aboutus = () => {
  return (
    <Maindiv>
      <Image
        src={Clockwatermark}
        width={254}
        height={223}
        className="watermark"
      />
      <Headerdiv>
        <span className="tag">About Us</span>
        <span className="heading">Discover Aster-Pay</span>
        <p className="para">
          Learn about our purpose, vision, mission, our journey, and explore
          exciting career opportunities to be part of our mission.
        </p>
      </Headerdiv>
      <Sectionsdiv>
        <Section>
          <Imagediv>
            <Image src={Empowering} width={42} height={42} />
          </Imagediv>
          <Sectiondetail>
            <h1 className="detailheading">Empowering Financial Freedom</h1>
            <p className="detailpara">
              At Aster-Pay, our purpose is deeply rooted in empowering financial
              freedom across Africa. We are committed to making a positive
              impact on millions of lives by providing accessible and innovative
              payment solutions. Our goal is to break down financial barriers,
              allowing individuals and businesses to thrive.
            </p>
          </Sectiondetail>
        </Section>
      </Sectionsdiv>
    </Maindiv>
  );
};

export default aboutus;
