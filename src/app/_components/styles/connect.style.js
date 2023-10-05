import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  width: 1124px;
  height: 315px;
  gap: 37px;
  background-image: url(${(props) => props.image.src});
  margin-left: 11%;
  margin-top: 95px;
  padding-left: 66px;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 1300px) {
    margin-left: 0%;
  }
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    height: auto;
    width: 60%;
    border-radius: 25px;
    margin-left: 20%;
    padding-right: 5%;
    padding-left: 5%;
  }
`;
export const Headingdiv = styled.div`
  display: flex;
  flex-direction: column;
  .headtext {
    color: #fff;
    font-family: "Jost";
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 162.5% */
    padding-top: 36px;
    @media only screen and (max-width: 750px) {
      font-size: 32px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 24px;
      line-height: normal;
    }
  }
  .headpara {
    color: #fff;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    @media only screen and (max-width: 750px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 16px;
    }
  }
  .button {
    text-align: left;
    width: 196px;
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-top: 31px;
    cursor: pointer;
  }
`;
export const Imagediv = styled.div`
  padding-top: 33px;
  padding-right: 24px;
  .connecticon {
    @media only screen and (max-width: 750px) {
      width: 100%;
      height: auto;
    }
  }
`;
