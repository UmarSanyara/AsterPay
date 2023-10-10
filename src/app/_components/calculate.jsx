"use client";

import React from "react";
import {
  Backgrounddiv,
  Headh4,
  Detp,
  Dollardiv,
  Calculatediv,
  Mandiv,
  Collectivediv,
  Conversiondiv,
  Toconvertdiv,
  Hasconverteddiv,
  Senddiv,
  Textlabel,
  Moneylabel,
  CountryBoxdiv,
  Imagediv,
  Imagerecdiv,
  Namespan,
  Topddiv,
  Toprecddiv,
  Exchangediv,
  Ratediv,
  Feediv,
  Arrivesdiv,
  Labellabel,
  Textolabel,
  Buttondiv,
  Getbutton,
  Simoption,
  Exdddiv,
  Selectli,
  Selecteddiv,
  Seleul,
} from "./styles/calculate.style";
import Script from "next/script";
import Image from "next/image";
import BackgroundImage from "../_assets/images/calculate/Background.png";
import Usd from "../_assets/images/calculate/Usd.png";
import Aus from "../_assets/images/calculate/Aus.png";
import Angola from "../_assets/images/calculate/Angola.png";
import Botswana from "../_assets/images/calculate/Botswana.png";
import Nigeria from "../_assets/images/calculate/Nigeria.png";
import TopDown from "../_assets/images/calculate/TopDown.png";
import Man from "../_assets/images/calculate/Man.png";
import Dol from "../_assets/images/calculate/Dol.png";
import { useState } from "react";
import { Ultra } from "next/font/google";

const calculate = () => {
  const countryoption = [
    {
      imagesrc: Aus,
      countname: "AUS",
    },

    {
      imagesrc: Usd,
      countname: "USD",
    },

    {
      imagesrc: Angola,
      countname: "ANG",
    },

    {
      imagesrc: Botswana,
      countname: "BTW",
    },

    {
      imagesrc: Nigeria,
      countname: "NGR",
    },
  ];

  const [flagimg, setflagimg] = useState(Usd);
  const [countryname, setcountryname] = useState("USD");
  const [recflagimg, setrecflagimg] = useState(Usd);
  const [reccountryname, setreccountryname] = useState("USD");

  const [showinner, setshowinner] = useState(false);
  const [recshowinner, setrecshowinner] = useState(false);

  function InnerComp() {
    return (
      <Seleul>
        {countryoption.map((item, index) => (
          <Selectli
            className="hober"
            onClick={() => handlechange(item.countname, item.imagesrc)}
          >
            <Imagediv>
              <Image className="flaglogo" src={item.imagesrc} />
            </Imagediv>

            <Namespan>{item.countname}</Namespan>
          </Selectli>
        ))}
      </Seleul>
    );
  }

  function RecipientInnerComp() {
    return (
      <Seleul>
        {countryoption.map((item, index) => (
          <Selectli
            className="hober"
            onClick={() => handlechangerec(item.countname, item.imagesrc)}
          >
            <Imagerecdiv>
              <Image className="flaglogo" src={item.imagesrc} />
            </Imagerecdiv>

            <Namespan>{item.countname}</Namespan>
          </Selectli>
        ))}
      </Seleul>
    );
  }

  const handlechange = (a, b) => {
    setcountryname(a);
    setflagimg(b);
    setshowinner(false);
  };

  const handlechangerec = (a, b) => {
    setreccountryname(a);
    setrecflagimg(b);
    setrecshowinner(false);
  };

  const handleclick = () => {
    setshowinner(true);
  };

  const handleclickrec = () => {
    setrecshowinner(true);
  };

  return (
    <Backgrounddiv image={BackgroundImage}>
      <Headh4>Calculate Your Transfer with Ease</Headh4>

      <Detp>
        Use our exchange rate calculator to determine the exact amount your
        recipient will receive, including all fees. We believe in providing full
        clarity for your transactions.
      </Detp>

      <Collectivediv>
        <Dollardiv>
          <Image className="dolr" src={Dol} />
        </Dollardiv>

        <Calculatediv>
          <Conversiondiv>
            <Toconvertdiv>
              <Selecteddiv>
                <Senddiv>
                  <Textlabel>You Send</Textlabel>
                  <Moneylabel>1,000</Moneylabel>
                </Senddiv>

                <CountryBoxdiv onClick={handleclick}>
                  <Imagediv>
                    <Image className="flaglogo" src={flagimg} />
                  </Imagediv>

                  <Namespan>{countryname}</Namespan>

                  <Topddiv>
                    <Image src={TopDown} className="button" />
                  </Topddiv>
                </CountryBoxdiv>
              </Selecteddiv>
              {showinner && <InnerComp />}
            </Toconvertdiv>

            <Toconvertdiv>
              <Selecteddiv>
                <Senddiv>
                  <Textlabel>Recipient gets</Textlabel>
                  <Moneylabel>1,380.69</Moneylabel>
                </Senddiv>

                <CountryBoxdiv onClick={handleclickrec}>
                  <Imagerecdiv>
                    <Image className="flaglogo" src={recflagimg} />
                  </Imagerecdiv>

                  <Namespan>{reccountryname}</Namespan>

                  <Toprecddiv>
                    <Image src={TopDown} className="button" />
                  </Toprecddiv>
                </CountryBoxdiv>
              </Selecteddiv>
              {recshowinner && <RecipientInnerComp />}
            </Toconvertdiv>
          </Conversiondiv>

          <Exchangediv>
            <Ratediv>
              <Labellabel>Exchange Rate:</Labellabel>
              <Textolabel>1 USD = 1,380.69 AUS</Textolabel>
            </Ratediv>

            <Feediv>
              <Labellabel>Fee</Labellabel>
              <Textolabel>Included</Textolabel>
            </Feediv>

            <Arrivesdiv>
              <Labellabel>Arrives</Labellabel>
              <Textolabel>Instantly</Textolabel>
            </Arrivesdiv>
          </Exchangediv>

          <Buttondiv>
            <Getbutton>Get Started</Getbutton>
          </Buttondiv>
        </Calculatediv>

        <Mandiv>
          <Image className="mane" src={Man} />
        </Mandiv>
      </Collectivediv>
    </Backgrounddiv>
  );
};

export default calculate;
