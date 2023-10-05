"use client";
import React from "react";
import Clockwatermark from "../_assets/images/aboutus/clockwatermark.png";
import {
  Headerdiv,
  Inputdiv,
  Maindiv,
  Sectionbox,
  Sectiondiv,
} from "./styles/help.style";
import Image from "next/image";
import Sittinggirl from "../_assets/images/help/sittinggirl.png";
import Message from "../_assets/images/help/message.png";
import Arrow from "../_assets/images/help/arrow.png";

const help = () => {
  return (
    <Maindiv id="Support">
      <Image
        src={Clockwatermark}
        width={254}
        height={223}
        className="watermark"
        alt="watermark"
      />
      <Headerdiv>
        <h1 className="blackhead">We&apos;re Here to Help</h1>
        <span className="bluehead">
          Reach out to us through various channels for assistance and explore
          our comprehensive FAQ section for quick answers.
        </span>
      </Headerdiv>
      <Sectiondiv>
        <div className="image">
          <Image
            src={Sittinggirl}
            height={862}
            width={626}
            className="sittinggirl"
            alt="Sitting Girl"
          />
        </div>
        <Sectionbox>
          <Image
            src={Message}
            height={79}
            width={129}
            className="messageicon"
            alt="Message Icon"
          />
          <span className="headtext">Leave Us a Message</span>
          <span className="paratext">
            Have a question or need assistance? Our support team is just a
            message away. Fill out the form below, and we&apos;ll get back to
            you promptly.
          </span>
          <Inputdiv>
            <input
              type="text"
              className="input"
              placeholder="Leave Us a Message"
            />
            <button className="button">
              <Image
                src={Arrow}
                height={50.9}
                width={50.9}
                className="messageicon"
                alt="Button Arrow"
              />
            </button>
          </Inputdiv>
        </Sectionbox>
      </Sectiondiv>
    </Maindiv>
  );
};

export default help;
