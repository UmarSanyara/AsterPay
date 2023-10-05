"use client";
import React from "react";
import {
  Main,
  UpperSec,
  Inner,
  BtnDiv,
  FooterData,
  Dets,
  DetsLast,
} from "./Styles/FooterStyle";
import Image from "next/image";
import Left from "./../_assets/images/FooterLeft.png";
import Right from "./../_assets/images/FooterRight.png";
import Man from "./../_assets/images/FooterInner.png";
import GooglePlay from "./../_assets/images/GooglePlay.png";
import AppleStore from "./../_assets/images/Apple.png";
import Fb from "./../_assets/images/facebook logo.png";
import Ig from "./../_assets/images/instagram logo.png";
import Tw from "./../_assets/images/Twitter logo.png";
import Arrow from "./../_assets/images/FooterArrow.png";
const Footer = () => {
  return (
    <>
      <Main>
        <UpperSec>
          <Inner>
            <Image className="Man" src={Man} alt="Man" />
            <Image className="Left" src={Left} alt="Left" />
            <Image className="Right" src={Right} alt="Right" />
            <h1>Ready to Send Money Online?</h1>
            <p>
              Effortlessly transfer funds to your loved ones worldwide with{" "}
              <br /> Aster-Pay&apos;s user-friendly process.
            </p>
            <BtnDiv>
              <Image className="BtnImg" src={AppleStore} alt="Apple Store" />
              <Image
                className="BtnImg"
                src={GooglePlay}
                alt="Google Play Store"
              />
            </BtnDiv>
          </Inner>
        </UpperSec>

        <FooterData>
          <Dets>
            <div className="info">
              <h3>About us</h3>
              <h3>Support</h3>
              <h3>Fees</h3>
            </div>
            <div className="links">
              <Image className="Media" src={Fb} alt="Facebook" />
              <Image className="Media" src={Ig} alt="Instagram" />
              <Image className="Media" src={Tw} alt="Twitter" />
            </div>
          </Dets>

          <DetsLast>
            <div className="info">
              <h3>Copyright © 2022 All Rights Reserved.</h3>
            </div>
            <div className="links">
              <h3>Terms</h3>
              <h3>Privacy</h3>
              <Image src={Arrow} alt="ARROW" />
            </div>
          </DetsLast>
        </FooterData>
      </Main>
    </>
  );
};

export default Footer;
