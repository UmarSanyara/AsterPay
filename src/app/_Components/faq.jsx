"use client";
import React from "react";
import {
  Accordiandiv,
  Buttondiv,
  H2,
  Headerdiv,
  Maindiv,
  P,
} from "./styles/faq.style";
import Greencards from "../_assets/images/faq/greencards.png";
import Clockwatermark from "../_assets/images/faq/clockwatermark.png";
import Arrow from "../_assets/images/faq/arrow.png";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    number: "General:",
    title: "  General questions about Aster-Pay and how it works.",
    answer:
      "Dedicated resources refer to a hosting service that provides exclusive and dedicated hardware and infrastructure for your website or application. This means you have full control over the resources and can optimize them according to your specific needs.",
  },
  {
    number: "Security:",
    title: " Learn how we ensure the safety of your transactions and data.",
    answer:
      "Dedicated resources refer to a hosting service that provides exclusive and dedicated hardware and infrastructure for your website or application. This means you have full control over the resources and can optimize them according to your specific needs.",
  },
  {
    number: "Basics:",
    title: " Fundamentals of using our service for seamless money transfers.",
    answer:
      "Dedicated resources refer to a hosting service that provides exclusive and dedicated hardware and infrastructure for your website or application. This means you have full control over the resources and can optimize them according to your specific needs.",
  },
  {
    number: "Troubleshooting:",
    title: "  Solutions to common issues and how to resolve them.",
    answer:
      "Dedicated resources refer to a hosting service that provides exclusive and dedicated hardware and infrastructure for your website or application. This means you have full control over the resources and can optimize them according to your specific needs.",
  },
  {
    number: "Currency Exchange:",
    title: " Information about currency conversion and rates.",
    answer:
      "Dedicated resources refer to a hosting service that provides exclusive and dedicated hardware and infrastructure for your website or application. This means you have full control over the resources and can optimize them according to your specific needs.",
  },
  {
    number: "Fees & Rates:",
    title: " Details on our fees, rates, and cost transparency.",
    answer:
      "Dedicated resources refer to a hosting service that provides exclusive and dedicated hardware and infrastructure for your website or application. This means you have full control over the resources and can optimize them according to your specific needs.",
  },
  {
    number: "Identity Verification:",
    title: " Steps and requirements for verifying your identity.",
    answer:
      "Dedicated resources refer to a hosting service that provides exclusive and dedicated hardware and infrastructure for your website or application. This means you have full control over the resources and can optimize them according to your specific needs.",
  },
];
const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Maindiv>
      <Image
        src={Greencards}
        width={149}
        height={129}
        className="greencards"
        alt="Greencards"
      />
      <Image
        src={Clockwatermark}
        width={213}
        height={188}
        className="clockwatermark"
        alt="Watermark"
      />
      <Headerdiv>
        <span className="header">Find Answers to Your Questions</span>
        <span className="para">
          Explore our extensive FAQ section to find answers to a wide range of
          topics, including:
        </span>
      </Headerdiv>
      <Accordiandiv>
        {data?.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <H2>
                <div className={selected == i ? "heading" : "elseheading"}>
                  <span className={selected == i ? "number" : "elsenumber"}>
                    {item.number}
                  </span>
                  &nbsp;&nbsp;
                  {item.title}
                </div>
                <span className={selected == i ? "sign" : "elsesign"}>
                  {selected == i ? "-" : "+"}
                </span>
              </H2>
            </div>
            <div className={selected == i ? "content show heading" : "content"}>
              <P>{item.answer}</P>
            </div>
          </div>
        ))}
        <Buttondiv>
          <button className="button">
            Explore FAQ{" "}
            <Image src={Arrow} width={44.77} height={44.77} alt="Arrow" />
          </button>
        </Buttondiv>
      </Accordiandiv>
    </Maindiv>
  );
};

export default Faq;
