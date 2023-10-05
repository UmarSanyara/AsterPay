"use client";
import React from "react";
import Bluecards from "../_assets/images/blogs/bluecards.png";
import Dollarsign from "../_assets/images/blogs/dollarsign.png";
import Image from "next/image";
import {
  Blog,
  Blogsdiv,
  Headerdiv,
  Maindiv,
  MoneyIcon,
} from "./styles/blogs.style";
import GirlsShot from "../_assets/images/blogs/girlsshot.png";
import Studentstudying from "../_assets/images/blogs/studentsstudying.png";
import Studentwithphone from "../_assets/images/blogs/studentswithphone.png";

const blogs = () => {
  return (
    <Maindiv id="Blogs">
      <MoneyIcon>
        <div className="icondiv">
          <Image
            src={Dollarsign}
            height={21.83}
            width={21.83}
            className="dollar1"
            alt="DollarSign"
          />
          <Image
            src={Dollarsign}
            height={21.83}
            width={21.83}
            className="dollar2"
            alt="DollarSign"
          />
          <Image
            src={Bluecards}
            height={133}
            width={154}
            className="bluecards"
            alt="BlueCards"
          />
        </div>
      </MoneyIcon>
      <Headerdiv>
        <span className="bluepara">
          Our latest articles and stay up-to-date with the ever-evolving
          financial services landscape.
        </span>
        <span className="heading">
          Stay Informed with Our Thought Leadership Articles
        </span>
        <span className="para">
          Our blog covers a wide range of topics, including legislation updates,
          emerging technologies, and cross-border transfer news.
        </span>
      </Headerdiv>
      <Blogsdiv>
        <Blog>
          <Image
            src={GirlsShot}
            width={407}
            height={215}
            alt="GirlsShot"
            className="blogimage"
          />
          <span className="bluetext">By Malakia Matias - 10 Sep 2023</span>
          <h1 className="headingtext">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <span className="paratext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </span>
        </Blog>
        <Blog>
          <Image
            src={Studentstudying}
            width={407}
            height={215}
            alt="Studentstudying"
            className="blogimage"
          />
          <span className="bluetext">By Malakia Matias - 10 Sep 2023</span>
          <h1 className="headingtext">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <span className="paratext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </span>
        </Blog>
        <Blog>
          <Image
            src={Studentwithphone}
            width={407}
            height={215}
            alt="Studentwithphone"
            className="blogimage"
          />
          <span className="bluetext">By Malakia Matias - 10 Sep 2023</span>
          <h1 className="headingtext">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <span className="paratext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </span>
        </Blog>
      </Blogsdiv>
      <button className="button">See More Blogs</button>
    </Maindiv>
  );
};

export default blogs;
