"use client";
import React from 'react'
import { Imagediv, Senddiv, OnlineMoneydiv, MoneyPicdiv, Contentdiv, Texth4, Detailp, } from './styles/sendmoney.style';

import Image from "next/image";
import SendMoney from "../_assets/images/sendmoney/SendMoney.png";
import DollarsImage from "../_assets/images/sendmoney/DollarsImage.png";








const sendmoney = () => {
  return (
    <Senddiv>
      <Imagediv>

        <Image src={SendMoney} width={517} height={566}/>
      </Imagediv>
      
      <OnlineMoneydiv>

          <MoneyPicdiv>
            <Image src={DollarsImage} width={191.93} height={158.46}/>
          </MoneyPicdiv>

          <Contentdiv>
            <Texth4>
             Send Money Online - Hassle-Free and Secure
            </Texth4>
            <Detailp>
            Effortlessly transfer funds to your loved ones worldwide with Aster-Pay's user-friendly process.
            </Detailp>
             
          </Contentdiv>

      </OnlineMoneydiv>
      
    </Senddiv>
  )
}

export default sendmoney

