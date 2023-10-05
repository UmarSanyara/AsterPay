"use client"
import React from "react";
import NavBar from "./_Components/NavBar";
import WelcomePage from "./_Components/WelcomePage";
import Bar from "./_Components/Bar";
import WhyPage from "./_Components/WhyPage";
import Footer from "./_Components/Footer";
const page = () => {
  return (
    <>
    <NavBar />
    <WelcomePage/>
    <Bar />
    <WhyPage/>
    <Footer/>
    </>
  );
};

export default page;
