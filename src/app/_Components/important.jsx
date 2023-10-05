"use client";
import React from "react";

import {
  Maindiv,
  Contentdiv,
  Headingh4,
  Questiondiv,
  Quesh6,
  Answerp,
  Boxdiv,
  Logodiv,
  LogoOverdiv,
  LogoSafediv,
} from "./styles/important.style";

import Image from "next/image";
import Online from "../_assets/images/important/Online.png";
import Overseas from "../_assets/images/important/Overseas.png";
import SendSafe from "../_assets/images/important/SafeSend.png";

const important = () => {
  return (
    <Maindiv>
      <Contentdiv>
        <Headingh4>Important Questions Regarding Sending Funds</Headingh4>

        <Questiondiv>
          <Boxdiv>
            <Logodiv>
              <Image className="online" src={Online} alt="online" />
            </Logodiv>

            <Quesh6>How Much Does It Cost to Send Money Online?</Quesh6>
            <Answerp>
              The cost of sending money online varies depending on your
              location, but at Aster-Pay, we strive to keep fees to a minimum.
              We calculate the cost upfront so that you always know the exact
              amount before you send.
            </Answerp>
          </Boxdiv>

          <Boxdiv>
            <LogoOverdiv>
              <Image className="oversea" src={Overseas} alt="Overseas" />
            </LogoOverdiv>

            <Quesh6>How Long Does It Take to Send Money Overseas?</Quesh6>
            <Answerp>
              Over 90% of our transfers are lightning-fast, taking less than a
              minute to reach their destination. We are continuously working to
              improve our speed. In rare cases, it may take up to 2 days for
              specific card issuers.
            </Answerp>
          </Boxdiv>

          <Boxdiv>
            <LogoSafediv>
              <Image className="safe" src={SendSafe} alt="Safe" />
            </LogoSafediv>

            <Quesh6>Is It Safe to Send Money with Aster-Pay?</Quesh6>
            <Answerp>
              Absolutely. Your safety is our top priority. We employ 3D Secure
              technology to protect your transactions and adhere to the PCI DSS
              information security standard to safeguard your data.
            </Answerp>
          </Boxdiv>
        </Questiondiv>
      </Contentdiv>
    </Maindiv>
  );
};

export default important;
