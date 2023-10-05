"use client";
import React from "react";
import Image from "next/image";
import {
  Main,
  InfoPart,
  BannerPart,
  BtnDiv,
  Banner,
  PaymentDetails,
  Exchange,
} from "../_Components/Styles/WelcomePageStyle";
import Clock from "./../_assets/images/Clock.png";
import GooglePlay from "./../_assets/images/GooglePlay.png";
import AppleStore from "./../_assets/images/Apple.png";
import Money from "./../_assets/images/Money.png";
import Arrrow from "./../_assets/images/ArrowDown.png";
import FlagAmerica from "./../_assets/images/America.png";
import FlagAus from "./../_assets/images/Australia.png";
const WelcomePage = () => {
  function toggleDropdown() {
    const dropdown = document.querySelector(".country .dropdown");
    dropdown.style.display =
      dropdown.style.display === "none" ? "flex" : "none";
  }

  function toggleDropdownSec() {
    const dropdown = document.querySelector(".countrySec .dropdownSec");
    dropdown.style.display =
      dropdown.style.display === "none" ? "flex" : "none";
  }
  return (
    <>
      <Main>
        <Image className="Clock" src={Clock} alt="clock" />

        <InfoPart>
          <Image className="BottomClock" src={Clock} alt="clock" />
          <Image className="Money" src={Money} alt="Money" />
          <span>Seamlessly Send Money Worldwide</span>
          <h1>
            Welcome to Aster-Pay <br />
            Your Cross-Border Money <br /> Transfer Solution
          </h1>
          <p>
            At Aster-Pay, we've simplified international money transfers.
            Whether you're <br /> supporting family members abroad or need to
            send funds for any reason, Aster- <br />
            Pay is your trusted partner. Experience the future of peer-to-peer
            money transfer <br /> by downloading our app now.
          </p>
          <BtnDiv>
            <Image className="BtnImg" src={AppleStore} alt="Apple Store" />
            <Image
              className="BtnImg"
              src={GooglePlay}
              alt="Google Play Store"
            />
          </BtnDiv>
        </InfoPart>

        <BannerPart>
          <Banner>
            <h3>
              Real-Time Exchange Rates for <br /> Transparent Transactions
            </h3>
            <p>
              Easily calculate exchange rates for all the countries we <br />{" "}
              serve using our convenient exchange rate calculator. Say <br />{" "}
              goodbye to guesswork and hidden fees—know <br /> how much your
              recipient will receive.
            </p>

            <PaymentDetails>
              <div className="Send">
                <span>You Send</span>
                <h3>1000</h3>
              </div>

              <div className="country">
                <Image src={FlagAmerica} alt="flag" />
                <h3>USD</h3>
                <Image
                  className="Arrow"
                  src={Arrrow}
                  alt="arrow"
                  onClick={toggleDropdown}
                />
                <div className="dropdown">
                    <div className="Menu">  <Image src={FlagAus} alt="flag" />
                <h3>USD</h3>
                </div>
                <div className="Menu">  <Image src={FlagAmerica} alt="flag" />
                <h3>USD</h3>
                </div>
                </div>
              </div>
            </PaymentDetails>

            <Exchange>
              <div className="rate">
                <span>Exchange Rate</span>
                <h5>1 USD = 1.380 AUS</h5>
              </div>
              <div className="dets">
                <div className="Free">
                  {" "}
                  <span>Free</span> <h5>Include</h5>
                </div>
                <div className="Arrives">
                  <span>Arrives</span> <h5>Instantly</h5>
                </div>
              </div>
            </Exchange>

            <PaymentDetails>
              <div className="Send">
                <span>Recipient gets</span>
                <h3>1,380.69</h3>
              </div>

              <div className="countrySec">
                <Image src={FlagAus} alt="flag" />
                <h3>USD</h3>
                <Image
                  className="Arrow"
                  src={Arrrow}
                  alt="arrow"
                  onClick={toggleDropdownSec}
                />
                <div className="dropdownSec">
                    <div className="MenuSec">  <Image src={FlagAus} alt="flag" />
                <h3>USD</h3>
                </div>
                <div className="MenuSec">  <Image src={FlagAmerica} alt="flag" />
                <h3>USD</h3>
                </div>
                </div>
              </div>

            </PaymentDetails>

            <button>Get Started</button>
          </Banner>
        </BannerPart>
      </Main>
    </>
  );
};

export default WelcomePage;
