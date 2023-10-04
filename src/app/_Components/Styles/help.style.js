import styled from "styled-components";

export const Maindiv = styled.div`
  padding-top: 79px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  background: rgba(242, 243, 249, 0.5);
  .watermark {
    transform: rotate(90deg);
    position: absolute;
    top: 5%;
    right: 0%;
    @media only screen and (max-width: 1200px) {
      top: 0%;
    }
    @media only screen and (max-width: 950px) {
      display: none;
    }
  }
`;
export const Headerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  .blackhead {
    color: #0d1b3e;
    text-align: center;
    font-family: "Jost";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 130% */
  }
  .bluehead {
    width: 60%;
    color: #4743c9;
    text-align: center;
    font-family: "Jost";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const Sectiondiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 105px;
  padding-top: 80px;

  .sittinggirl {
    @media only screen and (max-width: 750px) {
      width: 80%;
      height: auto;
      padding-left: 10%;
    }
  }
`;
export const Sectionbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 557px;
  border-radius: 10px;
  padding-top: 43px;
  border: 1px solid rgba(13, 27, 62, 0.3);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 10px 0px rgba(13, 27, 62, 0.08);
  @media only screen and (max-width: 650px) {
    width: 80%;
    height: auto;
  }
  .headtext {
    color: #0d1b3e;
    text-align: center;
    font-family: "Jost";
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 37px;
    @media only screen and (max-width: 450px) {
      font-size: 32px;
    }
  }
  .paratext {
    width: 85%;
    color: #000;
    text-align: center;
    font-family: "Jost";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 26px;
    @media only screen and (max-width: 650px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 18px;
    }
  }
`;
export const Inputdiv = styled.div`
  width: 85%;
  height: 72.6px;
  border-radius: 83.448px;
  margin-top: 47px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .input {
    width: 70%;
    height: 72.6px;
    border: 0px;
    color: #6a6969;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.862px; /* 104.31% */
    outline: none;
  }

  .button {
    border: 0px;
    background: #fff;
    cursor: pointer;
  }
`;
