"use client";
import React from "react";
import {
  Headerdiv,
  Icondiv,
  Maindiv,
  Section,
  Sectionsdiv,
} from "./styles/process.style";
import Clockwatermark from "../_assets/images/aboutus/clockwatermark.png";
import Image from "next/image";
import Payment from "../_assets/images/process/payment.png";
import Sign from "../_assets/images/process/sign.png";
import Reciept from "../_assets/images/process/reciept.png";
import Send from "../_assets/images/process/send.png";
import Arrow from "../_assets/images/process/arrow.png";

const process = () => {
  return (
    <Maindiv>
      <Image
        src={Clockwatermark}
        width={254}
        height={223}
        className="watermark"
        alt="watermark"
      />
      <Headerdiv>
        <span className="bluehead">How It Works?</span>
        <h1 className="blackhead">Step by Step Process</h1>
      </Headerdiv>
      <Sectionsdiv>
        <Section>
          <Icondiv>
            <span className="number">01</span>
            <Image
              src={Sign}
              width={128}
              height={128}
              className="image"
              alt="Sign"
            />
          </Icondiv>
          <span className="sectionhead">Link Your Cards</span>
          <span className="sectionpara">
            Add your preferred payment cards in any currency to your Aster-Pay
            account. We accept a wide range of cards for your convenience.
          </span>
        </Section>
        <Image
          src={Arrow}
          width={128.5}
          height={16.3}
          alt="arrow"
          className="arrow1"
        />
        <Section>
          <Icondiv>
            <span className="number">02</span>
            <Image
              src={Reciept}
              width={128}
              height={128}
              className="image"
              alt="Reciept"
            />
          </Icondiv>
          <span className="sectionhead">Add Recipient</span>
          <span className="sectionpara">
            Select your recipient from your contacts, linked cards, or simply
            enter their card number. We make it easy for you to send money to
            anyone, anywhere.
          </span>
        </Section>
        <Image
          src={Arrow}
          width={128.5}
          height={16.3}
          alt="arrow"
          className="arrow2"
        />
        <Section>
          <Icondiv>
            <span className="number">03</span>
            <Image
              src={Payment}
              width={128}
              height={128}
              className="image"
              alt="Payment"
            />
          </Icondiv>
          <span className="sectionhead">Confirm Payment</span>
          <span className="sectionpara">
            Review and verify the currencies, amount to be received, and the
            estimated delivery time. We believe in transparency every step of
            the way.
          </span>
        </Section>
        <Image
          src={Arrow}
          width={128.5}
          height={16.3}
          alt="arrow"
          className="arrow3"
        />
        <Section>
          <Icondiv>
            <span className="number">04</span>
            <Image
              src={Send}
              width={128}
              height={128}
              className="image"
              alt="Send"
            />
          </Icondiv>
          <span className="sectionhead">Send</span>
          <span className="sectionpara">
            Sit back and relax. Your transfer is on its way! With Aster-Pay,
            sending money has never been this simple.
          </span>
        </Section>
      </Sectionsdiv>
    </Maindiv>
  );
};

export default process;
