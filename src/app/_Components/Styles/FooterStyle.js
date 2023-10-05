import styled from "styled-components";

export const Main = styled.div`
  max-width: 1440px;
  height: 557px;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    #fff 0%,
    #fff 35%,
    #0d1b3e 35%,
    #0d1b3e 100%
  );
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 88px;
  padding: 0px 80px 0px;
  @media (max-width: 838px) {
    padding: 0px 40px 0px !important;
  }
  @media (max-width: 390px) {
    padding: 0px 20px 0px !important;
  }
`;

export const UpperSec = styled.div`
  width: 100%;
  height: 315px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 78px;
  @media (max-width: 1193px) and (min-width: 1061px) {
    padding: 0 28px !important;
  }
  @media (max-width: 1061px) {
    padding: 0 0px !important;
  }
`;

export const Inner = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background: #4743c9;
  position: relative;
  padding: 29px 0px 0px 56px;
  z-index: 0;
  .Left {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1 !important;
  }
  .Right {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1 !important;
  }
  .Man {
    position: absolute;
    right: 76px;
    top: 42px;
  }
  h1 {
    z-index: 1 !important;
    color: var(--white, #fff);
    font-family: Jost;
    font-size: 40px;
    font-weight: 600;
    line-height: 65px; /* 162.5% */
    padding-bottom: 10px;
  }
  p {
    color: var(--white, #fff);
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    z-index: 1;
  }
  @media (max-width: 1061px) {
    h1 {
      font-size: 35px !important;
    }
    p {
      font-size: 15px !important;
    }
    .Man {
      right: 36px;
    }
  }
  @media (max-width: 889px) {
    .Man {
      display: none;
    }
  }
  @media (max-width: 630px) {
    padding: 29px 0px 0px 26px;
    h1 {
      font-size: 25px !important ;
    }
  }

  @media (max-width: 526px) {
    .Left {
      display: none;
    }
    .Right {
      display: none;
    }
  }

  @media (max-width: 462px) {
    h1 {
      font-size: 18px !important;
    }
    p {
      font-size: 10px !important;
    }
  }
`;

export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 21px;
  padding-top: 46px;

  .BtnImg {
    cursor: pointer;
  }
  @media (max-width: 526px) {
    .BtnImg {
      width: 160px;
      height: 50px;
      cursor: pointer;
    }
  }

  @media (max-width: 462px) {
    gap: 15px !important;
    .BtnImg {
      width: 120px;
      height: 40px;
      cursor: pointer;
    }
  }
`;

export const FooterData = styled.div`
  width: 100%;
`;
export const Dets = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  padding-bottom: 35px;
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    h3 {
      color: var(--white, #fff);
      font-family: Jost;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 38px;

    Image {
      cursor: pointer;
    }
  }
  @media (max-width: 630px) {
    .info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }

  @media (max-width: 584px) {
    padding-bottom: 15px;
    .info {
      gap: 25px !important;

      h3 {
        font-size: 10px;
      }
    }
    .links {
      gap: 28px;

      .Media {
        cursor: pointer;
        width: 15px;
        height: 13px !important;
      }
    }
  }
`;

export const DetsLast = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  .info {
    h3 {
      color: var(--white, #fff);
      font-family: Jost;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    h3 {
      color: var(--white, #fff);
      font-family: Jost;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
    }
    Image {
      cursor: pointer;
    }
  }
  @media (max-width: 584px) {
    .info {
      h3 {
        font-size: 10px;
      }
    }
    .links {
      gap: 20px !important;
      h3 {
        font-size: 10px;
      }
    }
  }
`;
