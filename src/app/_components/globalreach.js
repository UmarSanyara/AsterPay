"use client";
import React from "react";
import {
  Countriesdiv,
  Country,
  CountryFlag,
  CountryName,
  Headerdiv,
  Heading,
  Maindiv,
  Paragraph,
} from "./styles/globalreach.style";
import Image from "next/image";
import Angola from "../_assets/images/globalreach/Angola.png";
import Botswana from "../_assets/images/globalreach/Botswana.png";
const globalreach = () => {
  return (
    <Maindiv>
      <Headerdiv>
        <Heading>Our Global Reach</Heading>
        <Paragraph>
          Explore our extensive network of countries where you can send and
          receive money. Aster-Pay connects you with recipients worldwide.
        </Paragraph>
      </Headerdiv>
      <Countriesdiv>
        <Country>
          <CountryFlag>
            <Image src={Angola} width={56} height={56} />
          </CountryFlag>
          <CountryName>Angola</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Botswana} width={56} height={56} />
          </CountryFlag>
          <CountryName>Botswana</CountryName>
        </Country>
      </Countriesdiv>
    </Maindiv>
  );
};

export default globalreach;
