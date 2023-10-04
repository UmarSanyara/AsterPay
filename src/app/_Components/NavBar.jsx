"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../_assets/images/Logo.png";
import HamBurger from "../_assets/images/HamBurger.png";
import {
  Nav,
  NavItems,
  Items,
  NavRes,
  ResItems,
  StyledLink,
} from "./styles/NavBarStyle";
import { Link } from "react-scroll";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isNavResOpen, setIsNavResOpen] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const toggleNavRes = () => {
    setIsNavResOpen(!isNavResOpen);
  };

  return (
    <Nav>
      <NavRes style={{ display: isNavResOpen ? "block" : "none" }}>
        <ResItems>
          <Link to="Home" smooth={true} duration={1500}>
            <h3>Home</h3>
          </Link>
        </ResItems>
        <ResItems>
          <Link to="Sendmoney" smooth={true} duration={1500}>
            <h3>Send Money</h3>
          </Link>
        </ResItems>
        <ResItems>
          <Link to="Security" smooth={true} duration={1500}>
            <h3>Security</h3>
          </Link>
        </ResItems>
        <ResItems>
          <Link to="Support" smooth={true} duration={1500}>
            <h3>Support</h3>
          </Link>
        </ResItems>
        <ResItems>
          <Link to="Aboutus" smooth={true} duration={1500}>
            <h3>About Us</h3>
          </Link>
        </ResItems>
        <ResItems>
          <Link to="Aboutus" smooth={true} duration={1500}>
            <h3>Blog</h3>
          </Link>
        </ResItems>
      </NavRes>

      <Image
        className="Ham"
        src={HamBurger}
        alt="Menu"
        onClick={toggleNavRes}
      />
      <Image className="Logo" src={Logo} alt="Logo" />
      <NavItems>
        <Items onClick={() => handleItemClick(0)} isActive={activeItem === 0}>
          <Link to="Home" smooth={true} duration={1500}>
            <h3>Home</h3>
          </Link>
          <span className={activeItem === 0 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(1)} isActive={activeItem === 1}>
          <Link to="Sendmoney" smooth={true} duration={1500}>
            <h3>Send Money</h3>
          </Link>
          <span className={activeItem === 1 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(2)} isActive={activeItem === 2}>
          <Link to="Security" smooth={true} duration={1500}>
            <h3>Security</h3>
          </Link>
          <span className={activeItem === 2 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(3)} isActive={activeItem === 3}>
          <Link to="Support" smooth={true} duration={1500}>
            {" "}
            <h3>Support</h3>
          </Link>
          <span className={activeItem === 3 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(4)} isActive={activeItem === 4}>
          <Link to="Aboutus" smooth={true} duration={1500}>
            <h3>About Us</h3>
          </Link>
          <span className={activeItem === 4 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(5)} isActive={activeItem === 5}>
          <Link to="Blogs" smooth={true} duration={1500}>
            {" "}
            <h3>Blog</h3>
          </Link>
          <span className={activeItem === 5 ? "active" : ""}></span>
        </Items>
      </NavItems>
    </Nav>
  );
};

export default NavBar;
