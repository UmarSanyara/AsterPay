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
import Eswatini from "../_assets/images/globalreach/Eswatini.png";
import Lesotho from "../_assets/images/globalreach/Lesotho.png";
import Mozambique from "../_assets/images/globalreach/Mozambique.png";
import Namibia from "../_assets/images/globalreach/Namibia.png";
import SouthAfrica from "../_assets/images/globalreach/South Africa.png";
import Zambia from "../_assets/images/globalreach/Zambia.png";
import Zimbabve from "../_assets/images/globalreach/Zimbabve.png";
import Kenya from "../_assets/images/globalreach/Kenya.png";
import Nigeria from "../_assets/images/globalreach/Nigeria.png";
import Ghana from "../_assets/images/globalreach/Ghana.png";
import Canada from "../_assets/images/globalreach/Canada.png";
import China from "../_assets/images/globalreach/China.png";
import England from "../_assets/images/globalreach/England.png";
import France from "../_assets/images/globalreach/France.png";
import Germany from "../_assets/images/globalreach/Germany.png";
import Italy from "../_assets/images/globalreach/Italy.png";
import Spain from "../_assets/images/globalreach/Spain.png";
import Usa from "../_assets/images/globalreach/Usa.png";
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
            <Image src={Angola} width={56} height={56} alt="Angola" />
          </CountryFlag>
          <CountryName>Angola</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Botswana} width={56} height={56} alt="Botswana" />
          </CountryFlag>
          <CountryName>Botswana</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Eswatini} width={56} height={56} alt="Eswatini" />
          </CountryFlag>
          <CountryName>Eswatini</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Lesotho} width={56} height={56} alt="Lesotho" />
          </CountryFlag>
          <CountryName>Lesotho</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Mozambique} width={56} height={56} alt="Mozambique" />
          </CountryFlag>
          <CountryName>Mozambique</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Namibia} width={56} height={56} alt="Namibia" />
          </CountryFlag>
          <CountryName>Namibia</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={SouthAfrica} width={56} height={56} alt="SouthAfrica" />
          </CountryFlag>
          <CountryName>South Africa</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Zambia} width={56} height={56} alt="Zambia" />
          </CountryFlag>
          <CountryName>Zambia</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Zimbabve} width={56} height={56} alt="Zimbabve" />
          </CountryFlag>
          <CountryName>Zimbabve</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Kenya} width={56} height={56} alt="Kenya" />
          </CountryFlag>
          <CountryName>Kenya</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Nigeria} width={56} height={56} alt="Nigeria" />
          </CountryFlag>
          <CountryName>Nigeria</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Ghana} width={56} height={56} alt="Ghana" />
          </CountryFlag>
          <CountryName>Ghana</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Canada} width={56} height={56} alt="Canada" />
          </CountryFlag>
          <CountryName>Canada</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={China} width={56} height={56} alt="China" />
          </CountryFlag>
          <CountryName>China</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={England} width={56} height={56} alt="England" />
          </CountryFlag>
          <CountryName>England</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={France} width={56} height={56} alt="France" />
          </CountryFlag>
          <CountryName>France</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Germany} width={56} height={56} alt="Germany" />
          </CountryFlag>
          <CountryName>Germany</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Italy} width={56} height={56} alt="Italy" />
          </CountryFlag>
          <CountryName>Italy</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Spain} width={56} height={56} alt="Spain" />
          </CountryFlag>
          <CountryName>Spain</CountryName>
        </Country>
        <Country>
          <CountryFlag>
            <Image src={Usa} width={56} height={56} alt="Usa" />
          </CountryFlag>
          <CountryName>USA</CountryName>
        </Country>
      </Countriesdiv>
    </Maindiv>
  );
};

export default globalreach;
