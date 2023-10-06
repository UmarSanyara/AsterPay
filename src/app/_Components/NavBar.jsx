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
  FixNav,
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
  const closeNavRes = () => {
    setIsNavResOpen(false);
  };
  return (
    <FixNav>
      <Nav>
        <NavRes Open={isNavResOpen}>
          <Link to="Home" smooth={true} duration={1500}>
            <ResItems onClick={closeNavRes}>
              <h3>Home</h3>
            </ResItems>
          </Link>

          <Link to="Sendmoney" smooth={true} duration={1500}>
            <ResItems onClick={closeNavRes}>
              <h3>Send Money</h3>
            </ResItems>
          </Link>
          <Link to="Security" smooth={true} duration={1500}>
            <ResItems onClick={closeNavRes}>
              <h3>Security</h3>
            </ResItems>
          </Link>
          <Link to="Support" smooth={true} duration={1500}>
            <ResItems onClick={closeNavRes}>
              <h3>Support</h3>
            </ResItems>
          </Link>
          <Link to="Aboutus" smooth={true} duration={1500}>
            <ResItems onClick={closeNavRes}>
              <h3>About Us</h3>
            </ResItems>
          </Link>

          <Link to="Aboutus" smooth={true} duration={1500}>
            <ResItems onClick={closeNavRes}>
              <h3>Blog</h3>
            </ResItems>
          </Link>
        </NavRes>

        <Image
          className="Ham"
          src={HamBurger}
          alt="Menu"
          onClick={toggleNavRes}
        />
        <Image className="Logo" src={Logo} alt="Logo" />
        <NavItems>
          <Items onClick={() => setActiveItem(0)} isActive={activeItem === 0}>
            <Link to="Home" smooth={true} duration={1500}>
              <h3>Home</h3>
            </Link>
            <span className={activeItem === 0 ? "active" : ""}></span>
          </Items>
          <Items onClick={() => setActiveItem(1)} isActive={activeItem === 1}>
            <Link to="Sendmoney" smooth={true} duration={1500}>
              <h3>Send Money</h3>
            </Link>
            <span className={activeItem === 1 ? "active" : ""}></span>
          </Items>
          <Items onClick={() => setActiveItem(2)} isActive={activeItem === 2}>
            <Link to="Security" smooth={true} duration={1500}>
              <h3>Security</h3>
            </Link>
            <span className={activeItem === 2 ? "active" : ""}></span>
          </Items>
          <Items onClick={() => setActiveItem(3)} isActive={activeItem === 3}>
            <Link to="Support" smooth={true} duration={1500}>
              {" "}
              <h3>Support</h3>
            </Link>
            <span className={activeItem === 3 ? "active" : ""}></span>
          </Items>
          <Items onClick={() => setActiveItem(4)} isActive={activeItem === 4}>
            <Link to="Aboutus" smooth={true} duration={1500}>
              <h3>About Us</h3>
            </Link>
            <span className={activeItem === 4 ? "active" : ""}></span>
          </Items>
          <Items onClick={() => setActiveItem(5)} isActive={activeItem === 5}>
            <Link to="Blogs" smooth={true} duration={1500}>
              {" "}
              <h3>Blog</h3>
            </Link>
            <span className={activeItem === 5 ? "active" : ""}></span>
          </Items>
        </NavItems>
      </Nav>
    </FixNav>
  );
};

export default NavBar;
