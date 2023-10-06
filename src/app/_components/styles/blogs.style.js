import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 264px;
  padding-bottom: 89px;
  position: relative;
  .button {
    width: 180px;
    height: 48px;
    flex-shrink: 0;
    border: 0px;
    border-radius: 10px;
    background: #4743c9;
    color: #fff;
    text-align: center;
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
export const MoneyIcon = styled.div`
  position: absolute;
  width: 184px;
  height: 134px;
  .icondiv {
    position: relative;
    top: -120%;
    left: -300%;
    @media only screen and (max-width: 1100px) {
      left: -200%;
    }
    @media only screen and (max-width: 1000px) {
      left: -100%;
    }
    @media only screen and (max-width: 750px) {
      left: 00%;
    }
  }
  .dollar1 {
    position: absolute;
    top: 20%;
    left: -5%;
  }
  .dollar2 {
    position: absolute;
    top: 40%;
    left: -15%;
  }
`;
export const Headerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .bluepara {
    color: #4743c9;
    text-align: center;
    font-family: "Jost";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 1000px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 750px) {
      width: 80%;
      font-size: 16px;
    }
  }
  .heading {
    width: 741px;
    color: #0d1b3e;
    text-align: center;
    font-family: "Jost";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 130% */
    @media only screen and (max-width: 1000px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 750px) {
      font-size: 32px;
      width: 80%;
      line-height: normal;
    }
  }
  .para {
    width: 712px;
    color: #0d1b3e;
    text-align: center;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 1000px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 750px) {
      font-size: 16px;
      width: 80%;
    }
  }
`;
export const Blogsdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  padding-bottom: 59px;
  padding-top: 87px;
`;
export const Blog = styled.div`
  width: 407px;
  height: 459px;
  border-radius: 20px;
  border: 0.5px solid #4743c9;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(13, 27, 62, 0.1);
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 500px) {
    width: 80%;
    height: auto;
  }
  .bluetext {
    color: #4743c9;
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 21px;
    padding-top: 17px;
  }
  .headingtext {
    color: #0d1b3e;
    font-family: "Jost";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-left: 21px;
    padding-top: 8px;
  }
  .paratext {
    color: #0d1b3e;
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 21px;
    padding-top: 19px;
    width: 95%;
    padding-bottom: 25px;
  }
  .blogimage {
    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;
