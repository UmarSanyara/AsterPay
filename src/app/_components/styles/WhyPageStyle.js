import styled from "styled-components";

export const Main = styled.div`
  max-width: 1440px;
  min-height: 1006px;
  background: #fff;
  padding: 110px 0 0px;
  text-align: center;
  overflow: hidden;
  h1 {
    color: var(--Blue, #0d1b3e);
    font-family: Jost;
    font-size: 50px;
    font-weight: 600;
    line-height: 65px;
    padding-bottom: 21px;
  }

  span {
    color: var(--purple, #4743c9);
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
  }
  @media (max-width: 589px) {
    h1 {
      color: var(--Blue, #0d1b3e);
      font-family: Jost;
      font-size: 40px;
      padding-bottom: 21px;
    }
  }
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 911px;
  @media (max-width: 1300px) and (min-width: 693px) {
    flex-direction: column !important;
    height: 1500px;
  }
  @media (max-width: 693px) and (min-width: 589px) {
    height: 911px;
  }

  @media (max-width: 589px) {
    height: 1500px;
  }
`;

export const ImageSec = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .Background {
    position: absolute;
    left: 0;
    z-index: 0;
  }
  .Models {
    z-index: 1;
  }
  .Money {
    position: absolute;
    z-index: 10;
    top: 600px;
    left: 600px;
  }
  @media (max-width: 1352px) and (min-width: 1300px) {
    .Money {
      left: 540px;
    }
  }

  @media (max-width: 1300px) and (min-width: 850px) {
    padding-left: 40px;
    width: 100%;
    height: 60%;
    justify-content: flex-start;
    .Models {
      width: 800px !important;
    }
    .Money {
      position: absolute;
      z-index: 0;
      top: 430px;
      left: 750px;
    }
  }

  @media (max-width: 850px) and (min-width: 758px) {
    height: 90%;
    width: 100%;
    justify-content: flex-start;
    padding-left: 40px;
    .Money {
      top: 490px;
      left: 620px;
    }
  }

  @media (max-width: 758px) and (min-width: 693px) {
    height: 90%;
    width: 100%;
    justify-content: flex-start;
    padding-left: 40px;
    .Money {
      top: 490px;
      left: 560px;
    }

    .Models {
      width: 600px !important;
    }
  }

  @media (max-width: 693px) {
    display: none;
  }
`;
export const DetsSec = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 79px;
  flex-direction: column;
  gap: 20px;
  padding-top: 79px;
  @media (max-width: 1390px) and (min-width: 1300px) {
    padding-right: 39px !important;
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    padding-right: 0 !important;
    padding-top: 0 !important;
  }
`;
export const BoxSec = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 23px;
  @media (max-width: 1300px) and (min-width: 589px) {
    justify-content: center;
  }

  @media (max-width: 589px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 277px;
  height: 341px;
  border-radius: 20px;
  border: 1px solid rgba(13, 27, 62, 0.3);
  background: #fff;
  padding: 26px 20px;
  justify-content: left;
  .upper {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    h3 {
      color: var(--13-27-62-Aster-pay, #0d1b3e);
      font-family: Jost;
      font-size: 30px;
      font-weight: 600;
    }
  }
  p {
    text-align: left;
    padding-top: 18px;
    color: var(--Blue, #0d1b3e);
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    padding-bottom: 23px;
  }
  .LearnMore {
    cursor: pointer;
  }
  .LearnMorepart {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;
