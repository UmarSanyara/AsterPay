"use client";

import React from "react";

import {
  Maindiv,
  Contentdiv,
  Prioritydiv,
  Pointsiv,
  Textdiv,
  Headingh4,
  Detailp,
  Imagediv,
  Logodiv,
  Textingdiv,
  LogoImgdiv,
  Featuresdiv,
  Headh5,
  Parap,
  Paraextp,
} from "./styles/security.style";

import Image from "next/image";
import Security from "../_assets/images/security/SecurityBanner.png";
import Financial from "../_assets/images/security/Financial.png";
import ThreeD from "../_assets/images/security/ThreeD.png";
import Biometric from "../_assets/images/security/Biometric.png";
import Fraud from "../_assets/images/security/Fraud.png";
import Certified from "../_assets/images/security/Certified.png";

const security = () => {
  return (
    <Maindiv id="Security">
      <Contentdiv>
        <Prioritydiv>
          <Textdiv>
            <Headingh4>Your Security, Our Top Priority</Headingh4>

            <Detailp>
              Discover the advanced measures we've put in place to ensure your
              financial transactions with Aster-Pay are always completely safe
              and secure.
            </Detailp>
          </Textdiv>

          <Imagediv>
            <Image className="SecuityBanSize" src={Security} />
          </Imagediv>
        </Prioritydiv>

        <Pointsiv>
          <Featuresdiv>
            <Logodiv>
              <LogoImgdiv className="F">
                <Image class="Financial" src={Financial} />
              </LogoImgdiv>
            </Logodiv>
            <Textingdiv>
              <Headh5>Breakthrough Financial Technology</Headh5>
              <Parap>
                At Aster-Pay, we leverage cutting-edge financial technology to
                safeguard your transactions. Our platform is built on
                industry-leading systems that undergo rigorous testing and
                continuous updates to stay ahead of evolving threats.
              </Parap>
            </Textingdiv>
          </Featuresdiv>

          <Featuresdiv>
            <Logodiv>
              <LogoImgdiv className="Thr">
                <Image class="ThreeD" src={ThreeD} />
              </LogoImgdiv>
            </Logodiv>
            <Textingdiv>
              <Headh5>3D Secure for Extra Protection</Headh5>
              <Parap>
                We've implemented 3D Secure, an additional layer of security
                that provides an extra level of authentication for online
                payments. This means that only you, the cardholder, can
                authorize the transaction, offering enhanced protection against
                unauthorized use of your card.
              </Parap>
            </Textingdiv>
          </Featuresdiv>

          <Featuresdiv>
            <Logodiv>
              <LogoImgdiv className="Bio">
                <Image class="Biometric" src={Biometric} />
              </LogoImgdiv>
            </Logodiv>
            <Textingdiv>
              <Headh5>Biometric Authentication:</Headh5>
              <Parap>
                For added peace of mind, Aster-Pay offers the option to use Face
                ID or Touch ID to log into your account. This advanced biometric
                authentication ensures that only you have access to your
                account, providing an extra layer of security beyond traditional
                passwords.
              </Parap>
            </Textingdiv>
          </Featuresdiv>

          <Featuresdiv>
            <Logodiv>
              <LogoImgdiv className="Fra">
                <Image class="Fraud" src={Fraud} />
              </LogoImgdiv>
            </Logodiv>
            <Textingdiv>
              <Headh5>Advanced Anti-Fraud Monitoring</Headh5>
              <Parap>
                Our platform employs state-of-the-art anti-fraud monitoring
                systems that continuously analyze transactions for any
                suspicious activity. This proactive approach allows us to
                identify and address potential threats in real-time, ensuring
                the highest level of security for your funds.
              </Parap>
            </Textingdiv>
          </Featuresdiv>

          <Featuresdiv>
            <Logodiv>
              <LogoImgdiv className="Cer">
                <Image class="Certified" src={Certified} />
              </LogoImgdiv>
            </Logodiv>
            <Textingdiv>
              <Headh5>Certified and Trusted</Headh5>
              <Parap>
                We take pride in being certified by industry leaders like
                Mastercard, Visa, and PCI DSS. These certifications serve as a
                testament to our commitment to maintaining the highest standards
                of security and compliance in the financial services industry.
              </Parap>

              <Paraextp>
                Rest assured, when you choose Aster-Pay, you're choosing a
                platform that prioritizes your security above all else.
              </Paraextp>
            </Textingdiv>
          </Featuresdiv>
        </Pointsiv>
      </Contentdiv>
    </Maindiv>
  );
};

export default security;