import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 130px;
  .watermark {
    position: absolute;
    top: 0%;
    left: 0%;
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
`;
export const Headerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .tag {
    color: var(--purple, #4743c9);
    text-align: center;
    font-family: "Jost";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 12px;
  }
  .heading {
    color: var(--13-27-62-Aster-pay, #0d1b3e);
    text-align: center;
    font-family: "Jost";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 130% */
    padding-bottom: 27px;
    @media only screen and (max-width: 900px) {
      font-size: 45px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 35px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 30px;
    }
  }
  .para {
    width: 768px;
    color: #0d1b3e;
    text-align: center;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 900px) {
      width: 700px;
      font-size: 18px;
    }
    @media only screen and (max-width: 700px) {
      width: 500px;
      font-size: 16px;
    }
    @media only screen and (max-width: 500px) {
      width: 300px;
      font-size: 16px;
    }
  }
`;
export const Sectionsdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding-top: 59px;
  padding-bottom: 59px;
  padding-right: 79px;
  padding-left: 79px;
  @media only screen and (max-width: 1400px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media only screen and (max-width: 1330px) {
    padding-right: 0px;
    padding-left: 0px;
  }
  @media only screen and (max-width: 500px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;
export const Section = styled.div`
  width: 626px;
  height: 264px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(13, 27, 62, 0.1);
  display: flex;
  gap: 20px;
  padding-right: 22px;
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: auto;
    justify-content: center;
    padding-right: 0%;
  }
  @media only screen and (max-width: 390px) {
    height: auto;
  }
  .vision {
    margin-top: 25px;
    margin-left: 22px;
    display: flex;
    justify-content: center;
  }
`;
export const Imagediv = styled.div`
  height: 80px;
  margin-top: 25px;
  margin-left: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Sectiondetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .detailheading {
    padding-top: 25px;
    color: var(--Blue, #0d1b3e);
    font-family: "Jost";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media only screen and (max-width: 470px) {
      font-size: 24px;
    }
  }
  .detailpara {
    color: var(--Blue, #0d1b3e);
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px; /* 127.778% */

    @media only screen and (max-width: 650px) {
      font-size: 16px;
      padding-bottom: 15px;
      padding-right: 15px;
    }
    @media only screen and (max-width: 470px) {
      font-size: 14px;
      padding-right: 5px;
    }
  }
`;
export const Button = styled.button`
  width: 274px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--purple, #4743c9);
  color: #fff;
  text-align: center;
  font-family: "Jost";
  border: 0px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 40%;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    width: 250px;
    font-size: 16px;
    margin-left: 20%;
  }
`;
