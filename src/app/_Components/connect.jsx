"use client";
import React from "react";
import { Maindiv, Headingdiv, Imagediv } from "./styles/connect.style";
import Background from "../_assets/images/connect/background.png";
import Arrow from "../_assets/images/connect/arrow.png";
import Image from "next/image";
import ConnectIcon from "../_assets/images/connect/connecticon.png";

const connect = () => {
  return (
    <Maindiv image={Background}>
      <Headingdiv>
        <span className="headtext">Connect with Our Support Bot</span>
        <span className="headpara">
          Get instant answers to common queries and access quick support through
          our WhatsApp Bot. It's an automated conversation that's available 24/7
          for your convenience.
        </span>
        <button className="button">
          Start Conversation{"    "}
          <Image src={Arrow} width={17.5} height={12} className="arrow" />
        </button>
      </Headingdiv>
      <Imagediv>
        <Image
          src={ConnectIcon}
          width={361}
          height={250}
          alt="connecticon"
          className="connecticon"
        />
      </Imagediv>
    </Maindiv>
  );
};

export default connect;
