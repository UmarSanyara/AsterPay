"use client";
import React from "react";
import { BarMain, BarInner } from "../_components/styles/BarStyle";
import Image from "next/image";
import Rocket from "./../_assets/images/Rocket.png";
import Man from "./../_assets/images/Man.png";
import Currency from "./../_assets/images/Currency.png";
import Country from "./../_assets/images/Country.png";
const Bar = () => {
  return (
    <>
      <BarMain>
        <Image className="Man" src={Man} alt="Man" />
        <BarInner>
          <Image className="Rocket" src={Rocket} alt="Rocket" />
          <div className="IconShow">
            <Image className="Image" src={Currency} alt="Image" />
            <div className="Text">
              <h1>20+</h1>
              <span>Supported Currencies</span>
            </div>
          </div>

          <div className="IconShow">
            <Image className="Image" src={Country} alt="Image" />
            <div className="Text">
              <h1>20+</h1>
              <span>Avalible Countries</span>
            </div>
          </div>
        </BarInner>
      </BarMain>
    </>
  );
};

export default Bar;
