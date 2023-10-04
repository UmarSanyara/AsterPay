"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../_assets/images/Logo.png";
import HamBurger from "../_assets/images/HamBurger.png";
import { Nav, NavItems, Items, NavRes, ResItems } from "./Styles/NavBarStyle";

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
          <h3>Home</h3>
        </ResItems>
        <ResItems>
          <h3>Send Money</h3>
        </ResItems>
        <ResItems>
          <h3>Security</h3>
        </ResItems>
        <ResItems>
          <h3>Support</h3>
        </ResItems>
        <ResItems>
          <h3>About Us</h3>
        </ResItems>
        <ResItems>
          <h3>Blog</h3>
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
          <h3>Home</h3>
          <span className={activeItem === 0 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(1)} isActive={activeItem === 1}>
          <h3>Send Money</h3>
          <span className={activeItem === 1 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(2)} isActive={activeItem === 2}>
          <h3>Security</h3>
          <span className={activeItem === 2 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(3)} isActive={activeItem === 3}>
          <h3>Support</h3>
          <span className={activeItem === 3 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(4)} isActive={activeItem === 4}>
          <h3>About Us</h3>
          <span className={activeItem === 4 ? "active" : ""}></span>
        </Items>
        <Items onClick={() => handleItemClick(5)} isActive={activeItem === 5}>
          <h3>Blog</h3>
          <span className={activeItem === 5 ? "active" : ""}></span>
        </Items>
      </NavItems>
    </Nav>
  );
};

export default NavBar;
