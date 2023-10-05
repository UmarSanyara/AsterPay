"use client";
import React from "react";
import {
  Imagediv,
  Senddiv,
  OnlineMoneydiv,
  MoneyPicdiv,
  Contentdiv,
  Texth4,
  Detailp,
  Maindiv,
  Backgrounddiv,
} from "./styles/sendmoney.style";

import Image from "next/image";
import SendMoney from "../_assets/images/sendmoney/SendMoney.png";
import DollarsImage from "../_assets/images/sendmoney/DollarsImage.png";

const Sendmoney = () => {
  return (
    <Maindiv id="Sendmoney">
      <Backgrounddiv></Backgrounddiv>
      <Senddiv>
        <Imagediv>
          <Image src={SendMoney} className="sendpic" alt="Send Money" />
        </Imagediv>

        <OnlineMoneydiv>
          <MoneyPicdiv>
            <Image
              className="dollarsimage"
              src={DollarsImage}
              alt="Dollers Image"
            />
          </MoneyPicdiv>

          <Contentdiv>
            <Texth4>Send Money Online - Hassle-Free and Secure</Texth4>
            <Detailp>
              Effortlessly transfer funds to your loved ones worldwide with
              Aster-Pay&apos;s user-friendly process.
            </Detailp>
          </Contentdiv>
        </OnlineMoneydiv>
      </Senddiv>
    </Maindiv>
  );
};

export default Sendmoney;
