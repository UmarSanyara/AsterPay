"use client";
import React from "react";
import {
  Main,
  ImageSec,
  Inner,
  DetsSec,
  Box,
  BoxSec,
} from "./styles/WhyPageStyle";
import Image from "next/image";
import Model from "./../_assets/images/Model.png";
import Background from "./../_assets/images/WhyBackground.png";
import Money from "./../_assets/images/Money.png";
import Speed from "./../_assets/images/speed.png";
import LearnMore from "./../_assets/images/LearnMore.png";
import Security from "./../_assets/images/security.png";
import Fee from "./../_assets/images/fees.png";
import User from "./../_assets/images/userFriendly.png";
const WhyPage = () => {
  return (
    <>
      <Main>
        <h1>Why Aster-Pay</h1>
        <span>What Makes Us Stand Out</span>

        <Inner>
          <ImageSec>
            <Image className="Background" src={Background} alt="Background" />
            <Image className="Money" src={Money} alt="Money" />
            <Image className="Models" src={Model} alt="MOdels" />
          </ImageSec>

          <DetsSec>
            <BoxSec>
              <Box>
                <div className="upper">
                  <Image src={Speed} alt="Speed" />
                  <h3>Speed</h3>
                </div>
                <p>
                  Lightning-fast transactions <br /> ensure your money reaches{" "}
                  <br /> its destination quickly.
                </p>
                <div className="LearnMorepart">
                  <Image
                    className="LearnMore"
                    src={LearnMore}
                    alt="Learn more"
                  />
                </div>
              </Box>
              <Box>
                <div className="upper">
                  <Image src={Security} alt="Security" />
                  <h3>Security</h3>
                </div>
                <p>
                  Rest easy with our industry- <br /> leading encryption and{" "}
                  <br />
                  security protocols.
                </p>
                <div className="LearnMorepart">
                  <Image
                    className="LearnMore"
                    src={LearnMore}
                    alt="Learn more"
                  />
                </div>
              </Box>
            </BoxSec>

            <BoxSec>
              <Box>
                <div className="upper">
                  <Image src={Fee} alt="Fee" />
                  <h3>Low Fees</h3>
                </div>
                <p>
                  We offer competitive rates <br /> and transparent pricing for{" "}
                  <br /> every transaction.
                </p>
                <div className="LearnMorepart">
                  <Image
                    className="LearnMore"
                    src={LearnMore}
                    alt="Learn more"
                  />
                </div>
              </Box>

              <Box>
                <div className="upper">
                  <Image src={User} alt="User" />
                  <h3>User Friendly</h3>
                </div>
                <p>
                  Our intuitive app makes <br /> sending money as easy as <br />{" "}
                  1-2-3.
                </p>
                <div className="LearnMorepart">
                  <Image
                    className="LearnMore"
                    src={LearnMore}
                    alt="Learn more"
                  />
                </div>
              </Box>
            </BoxSec>
          </DetsSec>
        </Inner>
      </Main>
    </>
  );
};

export default WhyPage;
