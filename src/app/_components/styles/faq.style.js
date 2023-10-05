import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 73px;
  padding-top: 149px;
  padding-bottom: 139px;
  position: relative;
  @media only screen and (max-width: 500px) {
    padding-top: 180px;
  }
  .greencards {
    position: absolute;
    top: 10%;
    left: 10%;
    @media only screen and (max-width: 800px) {
      top: 2%;
    }
  }
  .clockwatermark {
    position: absolute;
    top: 10%;
    right: 0%;
    @media only screen and (max-width: 800px) {
      top: 0%;
    }
  }
`;
export const Headerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  .header {
    width: 506px;
    color: var(--Blue, #0d1b3e);
    text-align: center;
    font-family: "Jost";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 130% */
    @media only screen and (max-width: 1030px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 880px) {
      width: 350px;
      font-size: 32px;
    }
  }
  .para {
    color: var(--Blue, #0d1b3e);
    text-align: center;
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 20px;
    padding-right: 20px;
    @media only screen and (max-width: 880px) {
      font-size: 16px;
    }
  }
`;
export const Accordiandiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  cursor: pointer;
  .item {
    width: 626px;
    height: auto;
    flex-shrink: 0;
    text-align: center;
    border-radius: 11px;
    background: #fff;
    box-shadow: 0px 0px 8px 4px #edefff;
    padding-left: 19px;
    padding-right: 9px;
    padding-top: 19px;
    padding-bottom: 18px;
    @media only screen and (max-width: 750px) {
      width: 550px;
    }
    @media only screen and (max-width: 650px) {
      width: 550px;
    }
    @media only screen and (max-width: 550px) {
      width: 450px;
    }
    @media only screen and (max-width: 450px) {
      width: 350px;
    }
  }
  .heading {
    color: #464646;
  }
  .elseheading {
    color: #464646;
  }
  .number {
    color: #464646;
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .elsenumber {
    color: #464646;
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .sign {
    color: rgba(71, 67, 201, 1);
    font-size: 30px;
    padding-right: 10px;
  }
  .elsesign {
    color: rgba(71, 67, 201, 1);
    font-size: 30px;
    padding-right: 10px;
  }
  .content {
    max-height: 0px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }

  .show {
    height: auto;
    max-height: 9999px;
    overflow: auto;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`;
export const H2 = styled.span`
  color: #464646;
  font-family: "Jost";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const P = styled.p`
  color: #464646;
  font-family: "Jost";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Buttondiv = styled.div`
  width: 626px;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 650px) {
    padding-right: 10%;
  }
  .button {
    width: 190px;
    height: 56.296px;
    border: 0px;
    border-radius: 73.404px;
    background: var(--purple, #4743c9);
    box-shadow: 0px 0px 8.7963px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-family: "Jost";
    font-size: 17.593px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.351px; /* 104.31% */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20.42px;
    cursor: pointer;
  }
`;
