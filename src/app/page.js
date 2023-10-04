import React from "react";
import NavBar from "./_Components/NavBar";
import WelcomePage from "./_Components/WelcomePage";
import WhyPage from "./_Components/WhyPage";
import MiddleBar from "./_Components/MiddleBar";
const page = () => {
  return (
    <>
      <NavBar />
      <WelcomePage />
      <MiddleBar />
      <WhyPage />
    </>
  );
};

export default page;
