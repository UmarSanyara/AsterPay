import styled from "styled-components";

export const Maindiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 171px;
`;

export const Backgrounddiv = styled.div`
  background: rgba(242, 243, 249, 0.5);

  width: 100%;
  height: 474px;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: 115.09px;

  @media (max-width: 1199px) and (min-width: 1100px) {
    margin-top: 115.09px;
    height: 431px;
  }

  @media (max-width: 1099px) and (min-width: 1000px) {
    margin-top: 115.09px;
    height: 401px;
  }

  @media (max-width: 999px) and (min-width: 900px) {
    margin-top: 115.09px;
    height: 372px;
  }

  @media (max-width: 899px) and (min-width: 800px) {
    margin-top: 115.09px;
    height: 334px;
  }

  @media (max-width: 799px) and (min-width: 700px) {
    margin-top: 115.09px;
    height: 294px;
  }

  @media (max-width: 699px) and (min-width: 600px) {
    margin-top: 81.09px;
    height: 294px;
  }

  @media (max-width: 599px) and (min-width: 426px) {
    background: rgba(242, 243, 249, 0.5);
    width: 100%;
    height: 650px;
    grid-row-start: 1;
    grid-column-start: 1;
    margin-top: 0px;
  }

  @media (max-width: 425px) {
    background: rgba(242, 243, 249, 0.5);
    width: 100%;
    height: 650px;
    grid-row-start: 1;
    grid-column-start: 1;
    margin-top: 0px;
  }
`;

export const Senddiv = styled.div`
  padding-left: 79px;
  padding-right: 79px;
  display: flex;
  grid-row-start: 1;
  grid-column-start: 1;

  @media (max-width: 1439px) and (min-width: 1400px) {
    padding-left: 65px;
    padding-right: 65px;
  }

  @media (max-width: 1399px) and (min-width: 1300px) {
    padding-left: 55px;
    padding-right: 55px;
  }

  @media (max-width: 1299px) and (min-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 1199px) and (min-width: 1100px) {
    padding-left: 46px;
    padding-right: 46px;
  }

  @media (max-width: 1099px) and (min-width: 1000px) {
    padding-left: 43px;
    padding-right: 43px;
  }

  @media (max-width: 999px) and (min-width: 900px) {
    padding-left: 37px;
    padding-right: 37px;
  }

  @media (max-width: 899px) and (min-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 799px) and (min-width: 700px) {
    padding-left: 25px;
    padding-right: 25px;
  }

  @media (max-width: 699px) and (min-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 599px) and (min-width: 426px) {
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    grid-row-start: 1;
    grid-column-start: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 425px) and (min-width: 0px) {
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    grid-row-start: 1;
    grid-column-start: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Imagediv = styled.div`
  padding-top: 24px;

  .sendpic {
    width: 517px;
    height: 566px;
  }

  @media (max-width: 1199px) and (min-width: 1100px) {
    .sendpic {
      width: 475px;
      height: 520px;
    }
  }

  @media (max-width: 1099px) and (min-width: 1000px) {
    .sendpic {
      width: 447px;
      height: 489px;
    }
  }

  @media (max-width: 999px) and (min-width: 900px) {
    .sendpic {
      width: 421px;
      height: 460px;
    }
  }

  @media (max-width: 899px) and (min-width: 800px) {
    .sendpic {
      width: 386px;
      height: 423px;
    }
  }

  @media (max-width: 799px) and (min-width: 700px) {
    .sendpic {
      width: 350px;
      height: 383px;
    }
  }

  @media (max-width: 699px) and (min-width: 600px) {
    .sendpic {
      width: 319px;
      height: 350px;
    }
  }

  @media (max-width: 599px) and (min-width: 0px) {
    padding-top: 20px;

    .sendpic {
      width: 312px;
      height: 342px;
    }
  }
`;



export const MoneyPicdiv = styled.div`
  .dollarsimage {
    float: right;
    width: 191.93px;
    height: 158.46px;
  }

  @media (max-width: 899px) and (min-width: 800px) {
    .dollarsimage {
      float: right;
      width: 164px;
      height: 136px;
    }
  }

  @media (max-width: 799px) and (min-width: 700px) {
    .dollarsimage {
      float: right;
      width: 150px;
      height: 124px;
    }
  }

  @media (max-width: 699px) and (min-width: 600px) {
    .dollarsimage {
      float: right;
      width: 129px;
      height: 106px;
    }
  }

  @media (max-width: 599px) and (min-width: 0px) {
    .dollarsimage {
      float: right;
      width: 103px;
      height: 85px;
    }
  }
`;

export const Contentdiv = styled.div`
  padding-top: 83.54px;
  padding-left: 107px;

  padding-right: 35px;

  @media (max-width: 1099px) and (min-width: 1000px) {
    padding-left: 80px;
  }

  @media (max-width: 999px) and (min-width: 900px) {
    padding-left: 70px;
  }

  @media (max-width: 899px) and (min-width: 800px) {
    padding-left: 60px;
  }

  @media (max-width: 799px) and (min-width: 700px) {
    padding-left: 50px;
  }

  @media (max-width: 699px) and (min-width: 600px) {
    padding-left: 40px;
  }

  @media (max-width: 599px) and (min-width: 426px) {
    padding-top: 7.54px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 425px) {
    padding-top: 7.54px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  padding-right: 35px;
`;

export const Texth4 = styled.h4`
  color: #0d1b3e;
  font-family: "Jost";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 65px;

  @media (max-width: 1299px) and (min-width: 1250px) {
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 55px;
  }

  @media (max-width: 1249px) and (min-width: 1200px) {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 55px;
  }

  @media (max-width: 1199px) and (min-width: 1150px) {
    font-size: 39px;
    font-style: normal;
    font-weight: 600;
    line-height: 55px;
  }

  @media (max-width: 1149px) and (min-width: 1100px) {
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 55px;
  }

  @media (max-width: 1099px) and (min-width: 1050px) {
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 45px;
  }

  @media (max-width: 1049px) and (min-width: 1000px) {
    font-size: 33px;
    font-style: normal;
    font-weight: 600;
    line-height: 45px;
  }

  @media (max-width: 999px) and (min-width: 950px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
  }
  @media (max-width: 949px) and (min-width: 900px) {
    font-size: 29px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
  }

  @media (max-width: 899px) and (min-width: 850px) {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }

  @media (max-width: 849px) and (min-width: 812px) {
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }

  @media (max-width: 811px) and (min-width: 750px) {
    font-size: 23px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  @media (max-width: 749px) and (min-width: 719px) {
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  @media (max-width: 718px) and (min-width: 655px) {
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
  }

  @media (max-width: 654px) and (min-width: 600px) {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }
`;

export const Detailp = styled.p`
  padding-top: 34px;
  color: #4743c9;
  font-family: "Jost";
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1299px) and (min-width: 1250px) {
    padding-top: 26px;
    font-size: 23px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 1249px) and (min-width: 1200px) {
    padding-top: 26px;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 1199px) and (min-width: 1150px) {
    padding-top: 26px;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 1149px) and (min-width: 1100px) {
    padding-top: 23px;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 1099px) and (min-width: 1050px) {
    padding-top: 20px;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 1049px) and (min-width: 1000px) {
    padding-top: 19px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 999px) and (min-width: 900px) {
    padding-top: 17px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 899px) and (min-width: 850px) {
    padding-top: 17px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 850px) and (min-width: 800px) {
    padding-top: 17px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 799px) and (min-width: 750px) {
    padding-top: 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 749px) and (min-width: 700px) {
    padding-top: 15px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 699px) and (min-width: 0px) {
    padding-top: 14px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

`;


export const OnlineMoneydiv = styled.div`
  display: flex;
  flex-direction: column;
`;
