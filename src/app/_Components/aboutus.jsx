"use client";
import Image from "next/image";
import React from "react";
import Clockwatermark from "../_assets/images/aboutus/clockwatermark.png";
import {
  Button,
  Headerdiv,
  Imagediv,
  Maindiv,
  Section,
  Sectiondetail,
  Sectionsdiv,
} from "./styles/aboutus.style";
import Empowering from "../_assets/images/aboutus/empowering.png";
import Vision from "../_assets/images/aboutus/vision.png";
import Journey from "../_assets/images/aboutus/journey.png";
import BeaPart from "../_assets/images/aboutus/beapart.png";
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
        <Section>
          <div className="vision">
            <Image src={Vision} width={80} height={80} />
          </div>
          <Sectiondetail>
            <h1 className="detailheading">Our Vision and Mission</h1>
            <p className="detailpara">
              <b>Vision:</b> To become the leading Pan-African payment solutions
              provider, transforming the lives of millions through financial
              empowerment and accessibility.
              <br />
              <br /> <b>Mission:</b> To revolutionize the way Africa transacts
              by delivering cutting-edge payment solutions that enhance
              financial accessibility, security, and convenience for everyone.
            </p>
          </Sectiondetail>
        </Section>
        <Section>
          <div className="journey">
            <Image src={Journey} width={42} height={42} />
          </div>
          <Sectiondetail>
            <h1 className="detailheading">Our Journey</h1>
            <p className="detailpara">
              Aster-Pay's journey began with a vision to reshape the financial
              landscape of Africa. Established in 2022, we have steadily grown,
              driven by our unwavering commitment to financial empowerment. Our
              history is marked by innovation, resilience, and a dedication to
              providing accessible financial services.
            </p>
          </Sectiondetail>
        </Section>
        <Section>
          <div className="beapart">
            <Image src={BeaPart} width={42} height={42} />
          </div>
          <Sectiondetail>
            <h1 className="detailheading">Be a Part of Our Vision</h1>
            <p className="detailpara">
              Are you passionate about driving change and financial empowerment
              in Africa? Join the Aster-Pay team, where you can contribute to
              our mission of transforming lives through accessible payment
              solutions.
            </p>
          </Sectiondetail>
        </Section>
      </Sectionsdiv>
      <Button>Explore Career Opportunities</Button>
    </Maindiv>
  );
};

export default aboutus;
