import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 112px;
  position: relative;
  padding-top: 130px;
  padding-bottom: 130px;
  .watermark {
    position: absolute;
    top: 0%;
    left: 0%;
    @media only screen and (max-width: 1200px) {
      top: 0%;
    }
    @media only screen and (max-width: 850px) {
      display: none;
    }
  }
`;
export const Headerdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .bluehead {
    color: #4743c9;
    text-align: center;
    font-family: "Jost";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .blackhead {
    color: #0d1b3e;
    text-align: center;
    font-family: "Jost";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 130% */
    @media only screen and (max-width: 476px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 426px) {
      font-size: 32px;
    }
  }
`;
export const Sectionsdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  position: relative;
  gap: 84px;
  .arrow1 {
    position: absolute;
    top: 25%;
    left: 20%;
    @media only screen and (max-width: 1279px) {
      display: none;
    }
  }
  .arrow2 {
    position: absolute;
    top: 25%;
    transform: scaleY(-1);
    @media only screen and (max-width: 1279px) {
      display: none;
    }
  }
  .arrow3 {
    position: absolute;
    top: 25%;
    right: 19%;
    @media only screen and (max-width: 1279px) {
      display: none;
    }
  }
`;
export const Section = styled.div`
  width: 257px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .sectionhead {
    color: #0d1b3e;
    text-align: center;
    font-family: "Jost";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    padding-top: 129px;
    line-height: normal;
    @media only screen and (max-width: 450px) {
      font-size: 24px;
    }
  }

  .sectionpara {
    color: #6a6969;
    text-align: center;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    padding-top: 37px;
    line-height: 26px; /* 130% */
    @media only screen and (max-width: 450px) {
      font-size: 16px;
    }
  }
`;
export const Icondiv = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #4743c9;
  .number {
    color: #fff;
    text-align: center;
    font-family: "Jost";
    font-size: 34.635px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .image {
    position: absolute;
    top: 75%;
  }
`;
